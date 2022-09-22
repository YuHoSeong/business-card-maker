import React from 'react';
import { card } from '../../data/cards';
import CardEditorForm from '../card_editor_form/card_editor_form';
import styles from './editor.module.css';

type EditorProps = {
  cards: card[];
};

const Editor = (props: EditorProps) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {props.cards.map((card) => (
        <CardEditorForm card={card} />
      ))}
    </section>
  );
};

export default Editor;
