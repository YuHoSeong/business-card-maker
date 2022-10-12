import React, { useRef } from 'react';
import ImageUploader from '../../service/image_uploader';
import { file } from '../card_add_form/card_add_form';
import styles from './image_file_input.module.css';

export type ImageFileInputProps = {
  imageUploader?: ImageUploader;
  name?: string;
  onFileChange({}: file): void;
};

const ImageFileInput = (props: ImageFileInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    inputRef.current?.click();
  };

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target?.files?.item(0));
    // console.log(event.target);

    if (event.target && event.target.files && props.imageUploader) {
      const uploaded = await props.imageUploader.upload(event.target.files[0]);
      console.log(uploaded);
      props.onFileChange({
        fileName: uploaded.original_filename,
        fileURL: uploaded.url,
      });
    }
    // const uploaded = await props.imageUploader.upload(
    //   event.target.files?[0]
    // );
    // console.log(uploaded);

    // props.onFileChange({
    //   name: 'filename',
    //   url: 'url',
    // });
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
      <button className={styles.button} onClick={onButtonClick}>
        {props.name || 'No file'}
      </button>
    </div>
  );
};

export default ImageFileInput;
