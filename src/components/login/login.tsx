import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import type { authType } from '../../service/auth_service';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';

type LoginProps = {
  authService: authType;
};

function Login(props: LoginProps) {
  const navigate = useNavigate();

  useEffect(() => {
    props.authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });

  function goToMaker(userId: String) {
    navigate('/maker', { state: { id: userId } });
  }
  function onLogin(event: React.MouseEvent<HTMLElement>) {
    const text = event.currentTarget.textContent;
    // login(s:provierType)
    // provierType = 'Google' | 'Github';
    if (text === 'Google') {
      props.authService.login(text).then((data) => goToMaker(data.user.uid));
    } else if (text === 'Github') {
      props.authService.login(text).then((data) => goToMaker(data.user.uid));
    } else {
      console.error("Social login button text isn't 'Google' or 'Github'");
    }
  }

  return (
    <section className={styles.login}>
      <Header />
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
