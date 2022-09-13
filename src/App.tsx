import React from 'react';
import './App.css';
import Login from './components/login/login';
import type { authType } from './service/auth_service';

function App({ authService }: { authService: authType }) {
  return <Login authService={authService}></Login>;
}

export default App;
