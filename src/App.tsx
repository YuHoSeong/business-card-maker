import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { ImageFileInputProps } from './components/image_file_input/image_file_input';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import type { authType } from './service/auth_service';
import { cardRepo } from './service/card_repository';

type AppProps = {
  authService: authType;
  FileInput: (props: ImageFileInputProps) => JSX.Element;
  cardRepository: cardRepo;
};

function App(props: AppProps) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={props.authService} />} />
          <Route
            path="/maker"
            element={
              <Maker
                FileInput={props.FileInput}
                authService={props.authService}
                cardRepository={props.cardRepository}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
