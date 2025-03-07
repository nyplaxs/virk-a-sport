import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAp0RqbD6zGCIa2TBVToZrgKM18tZlXTiY",
  projectId: "virk-a",
  storageBucket: "virk-a.firebasestorage.app",
  messagingSenderId: "952403294314",
  appId: "1:952403294314:android:ed4df85e1cbdc0ae1ab213"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
