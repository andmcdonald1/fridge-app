import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBIJp86raSlWFHa02ym9X-FB6YlwC_d1lo",
  authDomain: "tracking-fridge.firebaseapp.com",
  projectId: "tracking-fridge",
  storageBucket: "tracking-fridge.appspot.com",
  messagingSenderId: "789680607957",
  appId: "1:789680607957:web:3d2e09dfcd756c3849885c",
};

let app;
if (firebase.getApps.length == 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.getApp();
}

const auth = getAuth(app);
export { auth };
