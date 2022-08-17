import { auth } from "@/services/firebase";

export const register = async ({ email, password }) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log(user);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("[auth API] registration error: ", errorMessage, errorCode);
      return null;
    });
};

export const login = async ({ email, password }) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log(user);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("[auth API] login error: ", errorMessage, errorCode);
      return null;
    });
};

export const logout = async () => {
  auth
    .signOut()
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
