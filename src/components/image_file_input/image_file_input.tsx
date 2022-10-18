import React, { useRef, useState } from 'react';
import ImageUploader from '../../service/image_uploader';
import { file } from '../card_add_form/card_add_form';
import styles from './image_file_input.module.css';

export type ImageFileInputProps = {
  imageUploader?: ImageUploader;
  name?: string;
  onFileChange({}: file): void;
};

const ImageFileInput = (props: ImageFileInputProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    inputRef.current?.click();
  };

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target && event.target.files && props.imageUploader) {
      setLoading(true);
      const uploaded = await props.imageUploader.upload(event.target.files[0]);
      setLoading(false);
      props.onFileChange({
        fileName: uploaded.original_filename,
        fileURL: uploaded.url,
      });
    }
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {!loading && (
        <button
          className={`${styles.button} ${
            props.name ? styles.pink : styles.grey
          }`}
          onClick={onButtonClick}
        >
          {props.name || 'No file'}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
