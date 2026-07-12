
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
