import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './App';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';

export type FileInputProps = {
  
};

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = (props?: FileInputProps) => {
  return <ImageFileInput {...props} imageUploader={imageUploader} />;
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>
);
