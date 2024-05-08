import {getFirestore} from "firebase/firestore"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw4FRlqOGeeX4DSaW-5EYy_uq4TlNsL1A",
  authDomain: "todolistreact-86ae4.firebaseapp.com",
  projectId: "todolistreact-86ae4",
  storageBucket: "todolistreact-86ae4.appspot.com",
  messagingSenderId: "697087769830",
  appId: "1:697087769830:web:68c3dd4e78dd3e2594cf27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


