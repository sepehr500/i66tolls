import firebase from 'firebase'

const getFirebase = () => {
  const config = {
    apiKey: "AIzaSyCM5BnpcIywV85kyBAawGAaRBBHUvNn3EU",
    authDomain: "i66toll.firebaseapp.com",
    databaseURL: "https://i66toll.firebaseio.com",
    projectId: "i66toll",
    storageBucket: "i66toll.appspot.com",
    messagingSenderId: "180988107064"
  };

  return !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
}

export { getFirebase }