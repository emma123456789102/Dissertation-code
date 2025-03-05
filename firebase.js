import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbyxievV9aKGHjLFyO0BKKv4V8rRd5P-k",
  authDomain: "autismdiagnosistool.firebaseapp.com",
  projectId: "autismdiagnosistool",
  storageBucket: "autismdiagnosistool.firebasestorage.app",
  messagingSenderId: "932313058973",
  appId: "1:932313058973:web:fbb31ab2cf6ef0ae700e74",
  measurementId: "G-VDYP4DYPXB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
