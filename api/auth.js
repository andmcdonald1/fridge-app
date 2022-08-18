import { auth } from "@/services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const register = async (email, password) => {
  let user;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      user = userCredentials.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("[auth API] registration error: ", errorMessage, errorCode);
      alert(errorMessage);
    });
};

export const login = async (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log(user);
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("[auth API] login error: ", errorMessage, errorCode);
      alert(errorMessage);
    });
};

export const logout = async () => {
  signOut(auth)
    .then(() => {
      return null;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("[auth API] logout error: ", errorMessage, errorCode);
      return null;
    });
};
