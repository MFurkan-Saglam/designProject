import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFn-aATSUlIXHjY-xQrAmWRwJMpVyCmsc",
  authDomain: "photo-gallery-a1c6a.firebaseapp.com",
  projectId: "photo-gallery-a1c6a",
  storageBucket: "photo-gallery-a1c6a.appspot.com",
  messagingSenderId: "891525492249",
  appId: "1:891525492249:web:10eeae2e148f4161124488",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
