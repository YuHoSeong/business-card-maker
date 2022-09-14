import React from 'react';
import styles from './App.module.css';
import Login from './components/login/login';
import type { authType } from './service/auth_service';

function App({ authService }: { authService: authType }) {
  return (
    <div className={styles.app}>
      <Login authService={authService} />;
    </div>
  );
}

export default App;
