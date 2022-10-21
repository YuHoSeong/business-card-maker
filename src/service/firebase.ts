import { initializeApp } from 'firebase/app';
import * as Auth from 'firebase/auth';
import * as Database from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = Auth.getAuth(firebaseApp);
export const firebaseDatabase = Database.getDatabase(firebaseApp);
export const googleAuthProvider = new Auth.GoogleAuthProvider();
export const githubAuthProvider = new Auth.GithubAuthProvider();
