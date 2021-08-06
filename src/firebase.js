import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVMOXeu2mDPSvXm0Z6TQfA5hTGg9HCf8Q",
  authDomain: "linkedin-clone-beddb.firebaseapp.com",
  projectId: "linkedin-clone-beddb",
  storageBucket: "linkedin-clone-beddb.appspot.com",
  messagingSenderId: "103885600700",
  appId: "1:103885600700:web:18bd1073c47a3fd60b9db9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
