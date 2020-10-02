import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC5YLQzGBLRITAal1ovQp1pvJbvF7oTSG4",
    authDomain: "clone-dd52b.firebaseapp.com",
    databaseURL: "https://clone-dd52b.firebaseio.com",
    projectId: "clone-dd52b",
    storageBucket: "clone-dd52b.appspot.com",
    messagingSenderId: "620036423765",
    appId: "1:620036423765:web:9123ba4aa1a05538c5d4dc",
    measurementId: "G-G9TZHE0D88"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
