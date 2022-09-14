import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authType } from '../../service/auth_service';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

type MakerProps = {
  authService: authType;
};

const Maker = (props: MakerProps) => {
  const navigate = useNavigate();

  function onLogout() {
    props.authService.logout();
  }

  useEffect(() => {
    props.authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <Footer />
    </section>
  );
};

export default Maker;
