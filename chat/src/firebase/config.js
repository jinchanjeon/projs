import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBot6TFoUPGrAAOjVGYtA5eTQNIxq6HAAM",
    authDomain: "site-59340.firebaseapp.com",
    projectId: "site-59340",
    storageBucket: "site-59340.appspot.com",
    messagingSenderId: "358688164149",
    appId: "1:358688164149:web:074fb0c213903693aae47c"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  const projectAuth=firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export{projectFirestore, timestamp, projectAuth}
