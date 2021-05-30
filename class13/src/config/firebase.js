
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAVqOo4gCZwO0GbNJfKFs5fHWWgTmgRW2M",
    authDomain: "smtp-firebase-learning.firebaseapp.com",
    projectId: "smtp-firebase-learning",
    storageBucket: "smtp-firebase-learning.appspot.com",
    messagingSenderId: "62638103900",
    appId: "1:62638103900:web:f001cb561365ab2ff1f599",
    measurementId: "G-DHQBLJB0MG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();
//   export const storage = firebase.storage();
//   export const auth = firebase.auth();