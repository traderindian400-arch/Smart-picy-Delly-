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
