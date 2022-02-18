import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyADcj253aGOmMKNoT9lpd50JRmaXGklrYA',
  authDomain: 'clothing-6c5d9.firebaseapp.com',
  projectId: 'clothing-6c5d9',
  storageBucket: 'clothing-6c5d9.appspot.com',
  messagingSenderId: '271361416745',
  appId: '1:271361416745:web:0eb7378062a024c85ec638',
  measurementId: 'G-RX6HC3F9N3',
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseFirestore = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = async () =>
  await signInWithPopup(firebaseAuth, provider);

export default firebaseApp;
