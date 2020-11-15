import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDJLCKsV_tiQGLO8xk2GqA7uELclnoh2Yc",
    authDomain: "sofista-15db4.firebaseapp.com",
    databaseURL: "https://sofista-15db4.firebaseio.com",
    projectId: "sofista-15db4",
    storageBucket: "sofista-15db4.appspot.com",
    messagingSenderId: "753097639918",
    appId: "1:753097639918:web:7ffe919126b0b8658270ff"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const database = firebaseApp.firestore()

  export default database