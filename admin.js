/* =====================================
   Smart Picks Daily
   admin.js - Part 1
===================================== */

// Load Data
let products = JSON.parse(localStorage.getItem("products")) || [];
let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
let categories = JSON.parse(localStorage.getItem("categories")) || [];

// Dashboard Elements
const totalProducts = document.getElementById("totalProducts");
const totalBlogs = document.getElementById("totalBlogs");
const totalCategories = document.getElementById("totalCategories");

// Update Dashboard Counts
function updateDashboard() {

    totalProducts.textContent = products.length;
    totalBlogs.textContent = blogs.length;
    totalCategories.textContent = categories.length;

}

// Save Data
function saveData() {

    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("blogs", JSON.stringify(blogs));
    localStorage.setItem("categories", JSON.stringify(categories));

    updateDashboard();

}

// Initial Load
updateDashboard();
