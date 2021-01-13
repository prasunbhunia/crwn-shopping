import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDE2Ku-EocWCQw1oeCky5LmvsC8c7ePIiQ",
    authDomain: "shopping-db-56fc9.firebaseapp.com",
    projectId: "shopping-db-56fc9",
    storageBucket: "shopping-db-56fc9.appspot.com",
    messagingSenderId: "65475487374",
    appId: "1:65475487374:web:9b4b304f04308e812f8bdf",
    measurementId: "G-H9R34JG5JW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;