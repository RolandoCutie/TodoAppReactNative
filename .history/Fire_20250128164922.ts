import { initializeApp, firebase } from "firebase/app";
import '@firebase/firestore';
import '@firebase/auth';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbBXljuynzoH18RdviEpyRndOFamPls3g",
    authDomain: "flutterfirebase-7cfe5.firebaseapp.com",
    databaseURL: "https://flutterfirebase-7cfe5-default-rtdb.firebaseio.com",
    projectId: "flutterfirebase-7cfe5",
    storageBucket: "flutterfirebase-7cfe5.firebasestorage.app",
    messagingSenderId: "324259221552",
    appId: "1:324259221552:web:73f6d1aa865fe1640d5df5",
    measurementId: "G-6E31QZQ1SM"
};


class Fire {
    init() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
            if (user) {


            } else {
                firebase.auth().signInAnonymously().catch(
                  (error: any) => {}
                );
            }
        })
    }
}

export default Fire;
