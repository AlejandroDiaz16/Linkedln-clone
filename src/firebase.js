import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-hngqytpUx37aw8PHjBJUf5FlSQh43wc",
  authDomain: "linkedin-clone-61fb0.firebaseapp.com",
  projectId: "linkedin-clone-61fb0",
  storageBucket: "linkedin-clone-61fb0.appspot.com",
  messagingSenderId: "596260817461",
  appId: "1:596260817461:web:7f0d6662e2d97b3986ff7c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
