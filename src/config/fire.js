import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyC4U8-k3Uz2JXSxXz_pZrecw95a-Zpt-wI",

  authDomain: "blog-react-project-28e4a.firebaseapp.com",

  projectId: "blog-react-project-28e4a",

  storageBucket: "blog-react-project-28e4a.appspot.com",

  messagingSenderId: "647781310925",

  appId: "1:647781310925:web:9e65233ee173ebad886484"

};




const fire = firebase.initializeApp(firebaseConfig);

export default fire;
