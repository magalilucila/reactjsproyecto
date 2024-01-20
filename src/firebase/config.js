// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0arj60KZ_b5rC5m-_ZHqXWQrimzW43cE",
    authDomain: "reactjs2612.firebaseapp.com",
    projectId: "reactjs2612",
    storageBucket: "reactjs2612.appspot.com",
    messagingSenderId: "638988161572",
    appId: "1:638988161572:web:6cd2d6e11e86b10d4b3eb1",
    measurementId: "G-K6FQ5LSGQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)