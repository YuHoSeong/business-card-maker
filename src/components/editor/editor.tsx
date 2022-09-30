import React from 'react';
import { card } from '../../data/cards';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditorForm from '../card_editor_form/card_editor_form';
import styles from './editor.module.css';

type EditorProps = {
  cards: card[];
  addCard(card: card): void;
};

const Editor = (props: EditorProps) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {props.cards.map((card) => (
        <CardEditorForm key={card.id} card={card} />
      ))}
      <CardAddForm onAdd={props.addCard} />
    </section>
  );
};

export default Editor;
