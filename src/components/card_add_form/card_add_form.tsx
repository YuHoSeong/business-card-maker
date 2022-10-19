import React, { useRef, useState } from 'react';
import { card } from '../../data/cards';
import Button from '../button/button';
import { ImageFileInputProps } from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css';

type CardAddFromPorps = {
  onAdd(card: card): void;
  FileInput: (props: ImageFileInputProps) => JSX.Element;
};
export type file = {
  fileName: string;
  fileURL: string;
};

const CardAddForm = ({ FileInput, onAdd }: CardAddFromPorps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const themeRef = useRef<HTMLSelectElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [file, setFile] = useState<file>({ fileName: '', fileURL: '' });

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const card = {
      id: Date.now().toString(),
      name: nameRef.current?.value || '',
      company: companyRef.current?.value || '',
      theme: themeRef.current?.value || '',
      title: titleRef.current?.value || '',
      email: emailRef.current?.value || '',
      message: messageRef.current?.value || '',
      fileName: file.fileName,
      fileURL: file.fileURL,
    };
    formRef.current?.reset();
    setFile({ fileName: '', fileURL: '' });
    onAdd(card);
  };
  const onFileChange = (file: file) => {
    console.log(file);
    setFile({
      fileName: file.fileName,
      fileURL: file.fileURL,
    });
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder="Company"
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        placeholder="Theme"
      >
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        placeholder="Title"
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        placeholder="Email"
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="Message"
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
