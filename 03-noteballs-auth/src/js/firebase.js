import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA0LQDwJ4CWaix4JQK_-2u1CQu4cvFLUBA",
  authDomain: "noteballs-93e5b.firebaseapp.com",
  projectId: "noteballs-93e5b",
  storageBucket: "noteballs-93e5b.appspot.com",
  messagingSenderId: "652519093570",
  appId: "1:652519093570:web:5df49aa81367d12da804db"
};

const app = initializeApp(firebaseConfig); // server
const db = getFirestore(app); // database
const auth =  getAuth(app)

export {
  db,
  auth
}