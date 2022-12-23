import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtToyTWz9UN70j43a4law28mzk8YZrpZ4",
  authDomain: "auth-11a51.firebaseapp.com",
  projectId: "auth-11a51",
  storageBucket: "auth-11a51.appspot.com",
  messagingSenderId: "38803986112",
  appId: "1:38803986112:web:81beaaba52b323df783f25",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const SignInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const img = result.user.photoURL;
      const status = result.user.emailVerified;
      console.log(result.user);

      localStorage.setItem("name", name);
      localStorage.setItem("img", img);
      localStorage.setItem("status", status);
    })
    .catch((err) => {
      console.log(err);
    });
};
export default SignInWithGoogle;
