import React from 'react';
import styles from './header.module.css';

type HeaderProps = {
  onLogout?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function Header(props: HeaderProps) {
  return (
    <header className={styles.header}>
      {props.onLogout && (
        <button className={styles.logout} onClick={props.onLogout}>
          Logout
        </button>
      )}
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
}

export default Header;
