// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, 
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    User
} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ_IXKDR0dAKIEdsLccqFW4nNfs7Acdi8",
  authDomain: "yt-clone-8980d.firebaseapp.com",
  projectId: "yt-clone-8980d",

  appId: "1:999386943961:web:9e382be3a84fadd99149c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Signs user in using google and returns a promise when the user has successfully logged in
export function signinWithGoogle(){
    //could use github facebook etc providers for login using firebase
    return signInWithPopup(auth, new GoogleAuthProvider());
}
// promise for signing the user out
export function signOut(){
   return  auth.signOut();
}

//Trigger callback when user auth state changes returns a function to unsubscribe callback

export function onAuthStateChangedHelper(callback:(user:User | null) => void){
return onAuthStateChanged(auth,callback);
}