import { initializeApp } from 'firebase/app';
import * as Auth from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

const auth = Auth.getAuth(firebaseApp);

export default auth;
