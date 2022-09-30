import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authType } from '../../service/auth_service';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import { card, cardsData } from '../../data/cards';

type MakerProps = {
  authService: authType;
};

const Maker = (props: MakerProps) => {
  const [cards, setCards] = useState<card[]>(cardsData);

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

  const addCard = (card: card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor addCard={addCard} cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
