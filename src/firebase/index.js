// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, CACHE_SIZE_UNLIMITED } from "firebase/firestore";
import { browserSessionPersistence, getAuth, setPersistence, signInWithEmailAndPassword, GoogleAuthProvider, 
  FacebookAuthProvider, GithubAuthProvider
 } from "firebase/auth";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeDy73zzcOiD6xubGwZ4RR7kKmDj-nwg8",
  authDomain: "ipsync-kantons.firebaseapp.com",
  projectId: "ipsync-kantons",
  storageBucket: "ipsync-kantons.firebasestorage.app",
  messagingSenderId: "566972654795",
  appId: "1:566972654795:web:e9cba38fe2e709eb17a74e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app)

const db = initializeFirestore(app, {
    localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager(),
      cacheSizeBytes: CACHE_SIZE_UNLIMITED
    })
})
  // auth
  const auth = getAuth(app);
setPersistence(auth, browserSessionPersistence)
.then(() => {
  // Existing and future Auth states are now persisted in the current
  // session only. Closing the window would clear any existing state even
  // if a user forgets to sign out.
  // ...
  // New sign-in will be persisted with session persistence.
  return signInWithEmailAndPassword(auth, email, password);
})
.catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
});

const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const github = new GithubAuthProvider();
export { auth, db, messaging, google, facebook, github }