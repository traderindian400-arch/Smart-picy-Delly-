
// ======================================
// Smart Picks Daily
// auth.js - Part 1
// Firebase Authentication
// ======================================

import { auth } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
onAuthStateChanged,
signOut,
sendPasswordResetEmail,
sendEmailVerification,
updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// =========================
// DOM Elements
// =========================

const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const googleBtn = document.querySelector(".google-btn");

const logoutBtn = document.getElementById("logoutBtn");

console.log("✅ Auth System Loaded");
// ======================================
// auth.js - Part 2
// Register System
// ======================================

if (loginForm) {

loginForm.addEventListener("submit", async (e) => {

e.preventDefault();

const email = emailInput.value.trim();

const password = passwordInput.value.trim();

try {

const userCredential =
await createUserWithEmailAndPassword(
auth,
email,
password
);

await sendEmailVerification(userCredential.user);

alert("✅ Account created successfully! Please verify your email.");

await signOut(auth);

loginForm.reset();

} catch (error) {

alert(error.message);

}

});

}
