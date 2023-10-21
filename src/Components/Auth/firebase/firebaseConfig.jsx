import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB0rzacx5Op7UHP-lse3fnTaE7VB3v7qBQ",
  authDomain: "erazone-bd564.firebaseapp.com",
  projectId: "erazone-bd564",
  storageBucket: "erazone-bd564.appspot.com",
  messagingSenderId: "745706945889",
  appId: "1:745706945889:web:fc25089f5f1811f46c5920"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };