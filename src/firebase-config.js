// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxjQVT2ULySedFYbySVsstXqa2JGD9K1o",
  authDomain: "blogporject-1764f.firebaseapp.com",
  projectId: "blogporject-1764f",
  storageBucket: "blogporject-1764f.appspot.com",
  messagingSenderId: "695979978941",
  appId: "1:695979978941:web:7590eb21a4b50de19e47d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
