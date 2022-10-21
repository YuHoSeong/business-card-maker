// import * as Auth from 'firebase/auth';
import {
  signInWithPopup,
  User,
  UserCredential,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth, githubAuthProvider, googleAuthProvider } from './firebase';

// export type providerType = 'Google' | 'Github';
export type authType = {
  login(providerName: string): Promise<UserCredential>;
  onAuthChange(onUserChanged: (user: User | null) => void): void;
  logout(): void;
};

class AuthService {
  login(providerName: string) {
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(auth, authProvider);
  }

  onAuthChange(onUserChanged: (user: User | null) => void) {
    onAuthStateChanged(auth, (user) => {
      onUserChanged(user);
    });
  }

  logout() {
    signOut(auth);
  }

  getProvider(providerName: string) {
    switch (providerName) {
      case 'Google':
        return googleAuthProvider;
      case 'Github':
        return githubAuthProvider;
      default:
        throw new Error(`not supported provider : ${providerName}`);
    }
  }
}

export default AuthService;
