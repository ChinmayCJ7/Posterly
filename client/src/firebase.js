import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBZOqGqkGBNxPGoxoJ5MCGWiM_yp5MeFKI",
  authDomain: "posterly-v0.firebaseapp.com",
  projectId: "posterly-v0",
  storageBucket: "posterly-v0.firebasestorage.app",
  messagingSenderId: "704045363472",
  appId: "1:704045363472:web:ab613647c8d50c40fc7595"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
