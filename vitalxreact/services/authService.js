import { auth, googleProvider } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthService {
  static async register(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await this._saveToken(userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error("❌ Erreur d'inscription :", error);
      throw new Error(error.message);
    }
  }

  static async login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      await this._saveToken(userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error("❌ Erreur de connexion :", error);
      throw new Error(error.message);
    }
  }

  static async loginWithGoogle() {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      await this._saveToken(userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error("❌ Erreur de connexion avec Google :", error);
      throw new Error(error.message);
    }
  }

  static async logout() {
    try {
      await signOut(auth);
      await AsyncStorage.removeItem("userToken");
      console.log("✅ Déconnexion réussie !");
    } catch (error) {
      console.error("❌ Erreur lors de la déconnexion :", error);
      throw new Error(error.message);
    }
  }

  static async _saveToken(user) {
    if (user) {
      const token = await user.getIdToken();
      await AsyncStorage.setItem("userToken", token);
      console.log("✅ Token enregistré localement !");
    }
  }

  static listenAuthChanges(callback) {
    return onAuthStateChanged(auth, callback);
  }
}

export default AuthService;
