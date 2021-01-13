import firebase from "firebase/app";
import "firebase/analytics";
var firebaseConfig = {
  apiKey: "AIzaSyCSXrQ43pEklMCWlpJ7d_wEqNWmIKh5BiE",
  authDomain: "my-site-b9a56.firebaseapp.com",
  projectId: "my-site-b9a56",
  storageBucket: "my-site-b9a56.appspot.com",
  messagingSenderId: "1030415501900",
  appId: "1:1030415501900:web:64d45a11d3acb9e14442e9",
  measurementId: "G-F61E6EDTJQ",
};
if(typeof window !== "undefined" && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    if('measurementId' in firebaseConfig) firebase.analytics();
}
