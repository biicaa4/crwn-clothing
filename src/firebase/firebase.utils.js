 import firebase from 'firebase/app' ;
 import 'firebase/firestore' ;
 import 'firebase/auth' ;

 const config = {
    apiKey: "AIzaSyAM8Ew4RC578cz2rcDWpVEtYF8eRIYd3N4",
    authDomain: "crwn-db-32f35.firebaseapp.com",
    databaseURL: "https://crwn-db-32f35.firebaseio.com",
    projectId: "crwn-db-32f35",
    storageBucket: "crwn-db-32f35.appspot.com",
    messagingSenderId: "902075697662",
    appId: "1:902075697662:web:2f1ed260a04019478758af"
 } ;

 firebase.initializeApp(config) ;

 export const auth = firebase.auth() ;
 export const firestore = firebase.firestore() ;

 const provider = new firebase.auth.GoogleAuthProvider() ;
 provider.setCustomParameters({ prompt : 'select_account'}) ;
 export const signInWithGoogle = () => auth.signInWithPopup(provider) ;

 export default firebase ;