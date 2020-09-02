import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCCLDJ53Qq6ad19A5Xxyx0147jMmo-oRp0",
    authDomain: "sasta-messenger.firebaseapp.com",
    databaseURL: "https://sasta-messenger.firebaseio.com",
    projectId: "sasta-messenger",
    storageBucket: "sasta-messenger.appspot.com",
    messagingSenderId: "856285894917",
    appId: "1:856285894917:web:d0a58a26ea0f7d5a277f6c",
    measurementId: "G-W8RMW9CX9P"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db ;