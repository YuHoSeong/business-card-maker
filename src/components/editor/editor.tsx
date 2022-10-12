import React, { ReactNode } from 'react';
import { cards, card } from '../../data/cards';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditorForm from '../card_editor_form/card_editor_form';
import { ImageFileInputProps } from '../image_file_input/image_file_input';
import styles from './editor.module.css';

type EditorProps = {
  FileInput: (props: ImageFileInputProps) => JSX.Element;
  cards: cards;
  addCard(card: card): void;
  updateCard(card: card): void;
  deleteCard(card: card): void;
};

const Editor = (props: EditorProps) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {Object.keys(props.cards).map((key) => (
        <CardEditorForm
          key={key}
          FileInput={props.FileInput}
          card={props.cards[key]}
          updateCard={props.updateCard}
          deleteCard={props.deleteCard}
        />
      ))}
      <CardAddForm FileInput={props.FileInput} onAdd={props.addCard} />
    </section>
  );
};

export default Editor;
