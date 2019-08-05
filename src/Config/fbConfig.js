import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBk-u4s76DKhu_aksF1RGECORk5_g_gXdk",
    authDomain: "akong-website.firebaseapp.com",
    databaseURL: "https://akong-website.firebaseio.com",
    projectId: "akong-website",
    storageBucket: "akong-website.appspot.com",
    messagingSenderId: "299802066619",
    appId: "1:299802066619:web:9d8336d70ae1c774"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;