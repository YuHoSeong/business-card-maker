import * as Auth from 'firebase/auth';
import auth from './firebase';

export type providerType = 'Google' | 'Github';
export type authType = {
  login(s: providerType): Promise<Auth.UserCredential>;
  onAuthChange(onUserChanged: (user: Auth.User | null) => void): void;
  logout(): void;
};

class AuthService {
  login(providerName: providerType) {
    const authProvider = new Auth[`${providerName}AuthProvider`]();
    return Auth.signInWithPopup(auth, authProvider);
  }

  onAuthChange(onUserChanged: (user: Auth.User | null) => void) {
    Auth.onAuthStateChanged(auth, (user) => {
      onUserChanged(user);
    });
  }

  logout() {
    Auth.signOut(auth);
  }
}

export default AuthService;
