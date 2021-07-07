import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyClBa4r6jAbd5qpk5_mqG0l48YNo_d9NmU",
    authDomain: "facebook-messenger-525bb.firebaseapp.com",
    projectId: "facebook-messenger-525bb",
    storageBucket: "facebook-messenger-525bb.appspot.com",
    messagingSenderId: "201771251453",
    appId: "1:201771251453:web:e11beed5622e5beac87094",
    measurementId: "G-04GJ6QDV51"

});

const db = firebaseApp.firestore();

export default db;