import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";

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

  
// Initialize Firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Export Firebase app instance
export default firebaseApp;

// Fire class for managing Firebase logic
class Fire {
    init() {
        const auth = getAuth(firebaseApp);

        // Listen for auth state changes
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("User is signed in:", user);
            } else {
                // Sign in anonymously if no user is signed in
                signInAnonymously(auth).catch((error) => {
                    console.error("Error signing in anonymously:", error);
                });
            }
        });
    }
}

// Export the Fire class
export const fireInstance = new Fire();
