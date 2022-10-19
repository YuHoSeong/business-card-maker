import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './App';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput, {
  ImageFileInputProps,
} from './components/image_file_input/image_file_input';
import CardRepository from './service/card_repository';

// Dependency Injection

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = (props: ImageFileInputProps) => {
  return <ImageFileInput {...props} imageUploader={imageUploader} />;
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App
      cardRepository={cardRepository}
      authService={authService}
      FileInput={FileInput}
    />
  </React.StrictMode>
);
