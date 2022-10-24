import React, { useRef } from 'react';
import { card } from '../../data/cards';
import Button from '../button/button';
import { file } from '../card_add_form/card_add_form';
import { ImageFileInputProps } from '../image_file_input/image_file_input';
import styles from './card_editor_form.module.css';

type CardEditorFormProps = {
  FileInput: React.MemoExoticComponent<
    (props: ImageFileInputProps) => JSX.Element
  >;
  card: card;
  updateCard(card: card): void;
  deleteCard(card: card): void;
};

const CardEditorForm = ({
  FileInput,
  card,
  updateCard,
  deleteCard,
}: CardEditorFormProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const themeRef = useRef<HTMLSelectElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const { name, company, title, email, message, theme, fileName } = card;

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    if (event.currentTarget == null) return;
    // console.log(event.currentTarget);

    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  const onSubmit = () => {
    deleteCard(card);
  };

  const onFileChange = (file: file) => {
    // console.log(file);
    updateCard({
      ...card,
      fileName: file.fileName,
      fileURL: file.fileURL,
    });
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        ref={nameRef}
        defaultValue={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        ref={companyRef}
        defaultValue={company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        defaultValue={theme}
        ref={themeRef}
        onChange={onChange}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        ref={titleRef}
        onChange={onChange}
        defaultValue={title}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        ref={emailRef}
        onChange={onChange}
        defaultValue={email}
      />
      <textarea
        className={styles.textarea}
        name="message"
        ref={messageRef}
        onChange={onChange}
        defaultValue={message}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditorForm;
