import * as firebase from 'firebase';
import 'firebase/firebase-firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAO11frAnidwTAfvquCgdJI1Wqbc7uUcQM",
    authDomain: "voices-app-a1211.firebaseapp.com",
    projectId: "voices-app-a1211",
    storageBucket: "voices-app-a1211.appspot.com",
    messagingSenderId: "843151915961",
    appId: "1:843151915961:web:815924b8d10ff3d9625468",
    measurementId: "G-DNYKLVDX03"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

export default firestore;