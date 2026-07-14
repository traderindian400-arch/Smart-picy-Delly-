// ======================================
// Smart Picks Daily
// auth.js - Part 1
// ======================================

import { auth } from "./firebase.js";

import {
signInWithEmailAndPassword,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// =========================
// DOM
// =========================

const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

// =========================
// Login
// =========================

if(loginForm){

loginForm.addEventListener("submit",async(e)=>{

e.preventDefault();

const email=emailInput.value.trim();

const password=passwordInput.value.trim();

if(email===""||password===""){

alert("Please fill all fields.");

return;

}

try{

await signInWithEmailAndPassword(
auth,
email,
password
);

window.location.href="dashboard.html";

}catch(error){

switch(error.code){

case "auth/invalid-credential":

alert("Invalid Email or Password.");

break;

case "auth/user-not-found":

alert("User not found.");

break;

case "auth/wrong-password":

alert("Wrong Password.");

break;

default:

alert(error.message);

}

}

});

}

// =========================
// Session Check
// =========================

onAuthStateChanged(auth,(user)=>{

if(user){

console.log("Logged In:",user.email);

}else{

console.log("No User Logged In");

}

});

console.log("✅ Auth Part 1 Loaded");
// ======================================
// auth.js - Part 2
// Register + Email Verification
// ======================================

import {
createUserWithEmailAndPassword,
sendEmailVerification,
updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// =========================
// Register Function
// =========================

async function registerUser(name,email,password){

try{

const userCredential=

await createUserWithEmailAndPassword(

auth,

email,

password

);

await updateProfile(userCredential.user,{

displayName:name

});

await sendEmailVerification(

userCredential.user

);

alert(

"✅ Account Created Successfully!\n\nPlease verify your email before logging in."

);

}catch(error){

switch(error.code){

case "auth/email-already-in-use":

alert("This email is already registered.");

break;

case "auth/weak-password":

alert("Password should be at least 6 characters.");

break;

case "auth/invalid-email":

alert("Invalid Email Address.");

break;

default:

alert(error.message);

}

}

}
// ======================================
// auth.js - Part 3
// Google Login + Logout
// ======================================

import {
GoogleAuthProvider,
signInWithPopup,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// =========================
// Google Login
// =========================

const provider = new GoogleAuthProvider();

const googleBtn = document.querySelector(".google-btn");

if (googleBtn) {

googleBtn.addEventListener("click", async () => {

try {

const result = await signInWithPopup(auth, provider);

alert("✅ Welcome " + result.user.displayName);

window.location.href = "dashboard.html";

} catch (error) {

alert(error.message);

}

});

}

// =========================
// Logout
// =========================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

logoutBtn.addEventListener("click", async () => {

try {

await signOut(auth);

alert("Logged Out Successfully");

window.location.href = "login.html";

} catch (error) {

alert(error.message);

}

});

}

console.log("✅ Auth Part 3 Loaded");
// ======================================
// auth.js - Part 4 (Final)
// Forgot Password + Session + Dashboard Protection
// ======================================

import {
sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// =========================
// Forgot Password
// =========================

const forgotLink = document.querySelector(".forgot-link");

if (forgotLink) {

forgotLink.addEventListener("click", async (e) => {

e.preventDefault();

const email = prompt("Enter your registered email:");

if (!email) return;

try {

await sendPasswordResetEmail(auth, email);

alert("Password reset email sent successfully.");

} catch (error) {

alert(error.message);

}

});

}

// =========================
// Auto Login Session
// =========================

onAuthStateChanged(auth, (user) => {

if (user) {

console.log("Current User:", user.email);

} else {

console.log("No Active Session");

}

});

// =========================
// Dashboard Protection
// =========================

if (window.location.pathname.includes("dashboard.html")) {

onAuthStateChanged(auth, (user) => {

if (!user) {

window.location.href = "login.html";

}

});

}

console.log("✅ Smart Picks Daily Authentication Ready");
