import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBot6TFoUPGrAAOjVGYtA5eTQNIxq6HAAM",
    authDomain: "site-59340.firebaseapp.com",
    projectId: "site-59340",
    storageBucket: "site-59340.appspot.com",
    messagingSenderId: "358688164149",
    appId: "1:358688164149:web:32937ff75c933dd2aae47c"
  };

//init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore,timestamp}
