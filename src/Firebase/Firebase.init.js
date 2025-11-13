
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC1iz5dFAOpKniBZe3jIYnTM4IsgU9kXT0",
  authDomain: "taste-trail-b596a.firebaseapp.com",
  projectId: "taste-trail-b596a",
  storageBucket: "taste-trail-b596a.firebasestorage.app",
  messagingSenderId: "154015040199",
  appId: "1:154015040199:web:669bedcbe77e5ff74874e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;