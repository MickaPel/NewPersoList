import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC6IK05-zzrtXpJmii_EaMdAhtE9w0cEhs",
    authDomain: "persolist-8d424.firebaseapp.com",
    databaseURL: "https://persolist-8d424-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "persolist-8d424",
    storageBucket: "persolist-8d424.appspot.com",
    messagingSenderId: "390092852942",
    appId: "1:390092852942:web:11b5bff55d7b8fea2aca9f"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;