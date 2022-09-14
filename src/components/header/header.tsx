import React from 'react';
import type { authType } from '../../service/auth_service';
import styles from './header.module.css';

function Header({ authService }: { authService: authType }) {
  function onLogout(): boolean {
    return true;
  }

  return (
    <header className={styles.header}>
      {onLogout() === true && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
}

export default Header;
