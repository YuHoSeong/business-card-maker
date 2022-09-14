import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import type { authType } from '../../service/auth_service';
import styles from './login.module.css';

function Login({ authService }: { authService: authType }) {
  function onLogin(event: React.MouseEvent<HTMLElement>) {
    const text = event.currentTarget.textContent;
    // login(s:provierType)
    // provierType = 'Google' | 'Github';
    if (text === 'Google') {
      authService.login(text);
    } else if (text === 'Github') {
      authService.login(text);
    } else {
      console.error("Social login button text isn't 'Google' or 'Github'");
    }
  }

  return (
    <section className={styles.login}>
      <Header authService={authService}></Header>
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer></Footer>
    </section>
  );
}

export default Login;
