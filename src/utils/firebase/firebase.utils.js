import {initializeApp} from 'firebase/app';
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA-62lUmOKY7g9WpWabuCH_x0uIRLAtnS8",
    authDomain: "gainz-gymwear-db.firebaseapp.com",
    projectId: "gainz-gymwear-db",
    storageBucket: "gainz-gymwear-db.appspot.com",
    messagingSenderId: "288743408934",
    appId: "1:288743408934:web:3fdd2af928e043af01ede7"
};
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);