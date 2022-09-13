import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import type { authType } from '../../service/auth_service';

function Login({ authService }: { authService: authType }) {
  function onLogin() {
    authService.login('Google');
  }

  return (
    <section>
      <Header></Header>
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
      <Footer></Footer>
    </section>
  );
}

export default Login;
