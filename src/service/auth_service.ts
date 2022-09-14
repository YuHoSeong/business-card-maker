import * as fbAuth from 'firebase/auth';
import app from './firebase';

export type providerType = 'Google' | 'Github';
export type authType = {
  login(s: providerType): Promise<fbAuth.UserCredential>;
};

class AuthService {
  login(providerName: providerType) {
    const authProvider = new fbAuth[`${providerName}AuthProvider`]();
    const auth = fbAuth.getAuth(app);
    return fbAuth.signInWithPopup(auth, authProvider);
  }
}

export default AuthService;
