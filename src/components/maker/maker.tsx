import React, { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authType } from '../../service/auth_service';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import { cards, card, cardsData } from '../../data/cards';
import { FileInputProps } from '../..';

type MakerProps = {
  authService: authType;
  FileInput(props?: FileInputProps): ReactNode;
};

const Maker = (props: MakerProps) => {
  const [cards, setCards] = useState<cards>(cardsData);

  const navigate = useNavigate();

  function onLogout() {
    props.authService.logout();
  }

  useEffect(() => {
    props.authService.onAuthChange((user) => {
      if (!user) {
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
  };

  const deleteCard = (card: card) => {
    setCards((cards: cards): cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
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
