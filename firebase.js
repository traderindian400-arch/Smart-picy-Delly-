// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD7nCWK0X4ZvCU1B0KIsxMO02KlzT8qzFg",
  authDomain: "smart-picks-daily-c5c37.firebaseapp.com",
  projectId: "smart-picks-daily-c5c37",
  storageBucket: "smart-picks-daily-c5c37.firebasestorage.app",
  messagingSenderId: "865414148917",
  appId: "1:865414148917:web:5946f76bceb0bd63d1927c",
  measurementId: "G-EGD287884Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
