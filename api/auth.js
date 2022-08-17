import { getAuth, signInAnonymously, signOut } from "firebase/auth";

export const register = async ({ email, password }) => {};

export const login = async () => {
  const auth = getAuth();
  signInAnonymously(auth)
    .then((res) => {
      // Signed in..
      console.log(res);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("[auth API] authentication error: ", errorMessage, errorDoe);
    });
};

export const logout = async ({ email, password }) => {};
