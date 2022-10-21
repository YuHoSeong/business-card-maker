import React from 'react';
import styles from './button.module.css';

type ButtonProps = {
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = (props: ButtonProps) => {
  return (
    <button type="button" className={styles.button} onClick={props.onClick}>
      {props.name}
    </button>
  );
};
export default Button;
