import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authType } from '../../service/auth_service';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import { cards, card } from '../../data/cards';
import { ImageFileInputProps } from '../image_file_input/image_file_input';
import { cardRepo } from '../../service/card_repository';

type MakerProps = {
  authService: authType;
  FileInput: (props: ImageFileInputProps) => JSX.Element;
  cardRepository: cardRepo;
};

const Maker = (props: MakerProps) => {
  const navigateState = useLocation().state;
  const [cards, setCards] = useState<cards>({});
  const [userId, setUserId] = useState<string>(
    navigateState && navigateState.id
  );

  const navigate = useNavigate();

  function onLogout() {
    props.authService.logout();
  }

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = props.cardRepository.asyncCard(userId, (cards: cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId]);

  useEffect(() => {
    props.authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/');
      }
    });
  });

  const creatOrUpdateCard = (card: card) => {
    setCards((cards: cards): cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    props.cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card: card) => {
    setCards((cards: cards): cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    props.cardRepository.removeCard(userId, card);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={creatOrUpdateCard}
          updateCard={creatOrUpdateCard}
          deleteCard={deleteCard}
          FileInput={props.FileInput}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
