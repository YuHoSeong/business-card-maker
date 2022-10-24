import React from 'react';
import { cards } from '../../data/cards';
import Card from '../card/card';
import styles from './preview.module.css';

type PreviewProps = {
  cards: cards;
};

const Preview = ({ cards }: PreviewProps) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {Object.keys(cards).map((key) => (
          <Card key={key} {...cards[key]} />
        ))}
      </ul>
    </section>
  );
};

export default Preview;
