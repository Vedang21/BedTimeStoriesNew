import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyCDhsutj-uelMPBOuWd9rTUHOUNokxovak",
    authDomain: "bedtimestories-360cc.firebaseapp.com",
    databaseURL: "https://bedtimestories-360cc.firebaseio.com",
    projectId: "bedtimestories-360cc",
    storageBucket: "bedtimestories-360cc.appspot.com",
    messagingSenderId: "979381076373",
    appId: "1:979381076373:web:76953f031d9f940951769c",
    measurementId: "G-EQD1LYDHW0"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()