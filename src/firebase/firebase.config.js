// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
    apiKey: "AIzaSyCovGXO0zJ0IQ6z4jhpaO9n2kQAyFizdUc",
    authDomain: "auth-react-context-3b499.firebaseapp.com",
    projectId: "auth-react-context-3b499",
    storageBucket: "auth-react-context-3b499.appspot.com",
    messagingSenderId: "368446901892",
    appId: "1:368446901892:web:2f703a45554478df017cd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;