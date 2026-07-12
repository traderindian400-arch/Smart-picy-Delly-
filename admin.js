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
/* =====================================
   Delete Product
===================================== */

function deleteProduct(index){

const confirmDelete = confirm("Are you sure you want to delete this product?");

if(!confirmDelete) return;

products.splice(index,1);

saveData();

renderProducts();

}

/* =====================================
   Add Blog
===================================== */

const blogForm = document.getElementById("blogForm");

if(blogForm){

blogForm.addEventListener("submit",function(e){

e.preventDefault();

const blog = {

id: Date.now(),

title: document.getElementById("blogTitle").value,

category: document.getElementById("blogCategory").value,

image: document.getElementById("blogImage").value,

description: document.getElementById("blogDescription").value,

createdAt: new Date().toLocaleDateString()

};

blogs.push(blog);

saveData();

this.reset();

alert("Blog Published Successfully!");

});

}

/* =====================================
   Add Category
===================================== */

const categoryForm = document.getElementById("categoryForm");

if(categoryForm){

categoryForm.addEventListener("submit",function(e){

e.preventDefault();

const category = {

id: Date.now(),

name: document.getElementById("categoryName").value,

icon: document.getElementById("categoryIcon").value

};

categories.push(category);

saveData();

this.reset();

alert("Category Added Successfully!");

});

}

/* =====================================
   Refresh Dashboard
===================================== */

updateDashboard();

renderProducts();
