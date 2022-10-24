import React, { memo } from 'react';
import styles from './button.module.css';

type ButtonProps = {
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = memo(({ name, onClick }: ButtonProps) => {
  // console.log('memo button');

  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {name}
    </button>
  );
});
export default Button;
