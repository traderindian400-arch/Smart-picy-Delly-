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
/* =====================================
   Add Product
===================================== */

const productForm = document.getElementById("productForm");

if (productForm) {

productForm.addEventListener("submit", function(e){

e.preventDefault();

const product = {

id: Date.now(),

name: document.getElementById("productName").value,

category: document.getElementById("productCategory").value,

image: document.getElementById("productImage").value,

price: document.getElementById("productPrice").value,

description: document.getElementById("productDescription").value,

rating: 5,

createdAt: new Date().toLocaleDateString()

};

products.push(product);

saveData();

this.reset();

alert("Product Added Successfully!");

renderProducts();

});

}

/* =====================================
   Render Products Table
===================================== */

function renderProducts(){

const table = document.getElementById("productTable");

if(!table) return;

table.innerHTML = "";

products.forEach((product,index)=>{

table.innerHTML += `

<tr>

<td>${product.name}</td>

<td>${product.category}</td>

<td>${product.price}</td>

<td>Active</td>

<td>

<button onclick="deleteProduct(${index})">

Delete

</button>

</td>

</tr>

`;

});

}

/* Initial Render */

renderProducts();
