import React from 'react';
import { cards } from '../../data/cards';
import Card from '../card/card';
import styles from './preview.module.css';

type PreviewProps = {
  cards: cards;
};

const Preview = (props: PreviewProps) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {Object.keys(props.cards).map((key) => (
          <Card key={key} card={props.cards[key]} />
        ))}
      </ul>
    </section>
  );
};

export default Preview;
