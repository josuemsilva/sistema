import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBuTT7tuTZyfbP6GyA89Kio7k3MWmMU_VY",
  authDomain: "tickets-403bc.firebaseapp.com",
  projectId: "tickets-403bc",
  storageBucket: "tickets-403bc.appspot.com",
  messagingSenderId: "95387816707",
  appId: "1:95387816707:web:5a2ef0ba83da6e9e27cf36",
  measurementId: "G-F4QVTG12DQ",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
