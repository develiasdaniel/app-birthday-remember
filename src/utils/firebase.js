import firebase from "@firebase/app";
//import firebase from "@react-native-firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBl2B1xdDyywko7b0yR1sM5ko2oRhb9D08",
    authDomain: "birthdayapp-6ed5c.firebaseapp.com",
    databaseURL: "https://birthdayapp-6ed5c.firebaseio.com",
    projectId: "birthdayapp-6ed5c",
    storageBucket: "birthdayapp-6ed5c.appspot.com",
    messagingSenderId: "916311332264",
    appId: "1:916311332264:web:7bd9803dbf63f82ffff99d"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);