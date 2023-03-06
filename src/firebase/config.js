import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyACxq4ic2YU0JaV9fVwqt1C5S5G8DYa0eA",
  authDomain: "content-management-system-3010.firebaseapp.com",
  projectId: "content-management-system-3010",
  storageBucket: "content-management-system-3010.appspot.com",
  messagingSenderId: "913165033506",
  appId: "1:913165033506:web:92495e12adfb7485826a7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };