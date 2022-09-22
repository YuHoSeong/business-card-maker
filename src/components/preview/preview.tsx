import React from 'react';
import { card } from '../../data/cards';
import Card from '../card/card';
import styles from './preview.module.css';

type PreviewProps = {
  cards: card[];
};

const Preview = (props: PreviewProps) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {props.cards.map((card) => (
          <Card card={card} />
        ))}
      </ul>
    </section>
  );
};

export default Preview;
