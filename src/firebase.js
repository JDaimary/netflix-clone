import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB231cF6Ru1m1R4c2UGTAcy6nq_fpPgIsg",
  authDomain: "netflix-clone-d4fc0.firebaseapp.com",
  projectId: "netflix-clone-d4fc0",
  storageBucket: "netflix-clone-d4fc0.appspot.com",
  messagingSenderId: "350514030294",
  appId: "1:350514030294:web:4185c78898eb896c838b77",
  measurementId: "G-PH881YNJ70",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
