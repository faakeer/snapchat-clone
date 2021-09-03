import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBiU8wD1HEvjClcxWvWPyMxoVUEr9233XY",
  authDomain: "snapchat-clone-27508.firebaseapp.com",
  projectId: "snapchat-clone-27508",
  storageBucket: "snapchat-clone-27508.appspot.com",
  messagingSenderId: "416784940004",
  appId: "1:416784940004:web:09b9047776e65e13fd25f1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
