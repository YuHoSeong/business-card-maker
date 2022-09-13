import firebaseAuth, { getAuth, signInWithPopup } from 'firebase/auth';

type AuthType = 'Google' | 'Github';

class AuthService {
  login(providerName: AuthType) {
    const authProvider = new firebaseAuth[`${providerName}AuthProvider`]();
    const auth = getAuth();
    return signInWithPopup(auth, authProvider);
  }
}

export default AuthService;
