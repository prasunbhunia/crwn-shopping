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

export const createUserProfileDocumnet = async (userAuth, additionaldata) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`Account/uznSHKuzsXNJcIOci2bM/User/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionaldata,
            })
        }catch(error){
            console.log('Error Creating User ',error.message);
        }
    }
    return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;