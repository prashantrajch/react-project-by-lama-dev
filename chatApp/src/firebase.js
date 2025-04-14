import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBTwdvYYWlwzsfaelt8DpuC4BrU0dioMI",
  authDomain: "chatapp-7629b.firebaseapp.com",
  projectId: "chatapp-7629b",
  storageBucket: "chatapp-7629b.firebasestorage.app",
  messagingSenderId: "913464623751",
  appId: "1:913464623751:web:2bf7d8189a4d536921ae22",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
