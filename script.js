// ======================================
// Smart Picks Daily
// script.js - Part 1
// ======================================

document.addEventListener("DOMContentLoaded", () => {

renderCategories();
renderProducts();
renderBlogs();
renderTestimonials();
renderFAQs();

initSmoothScroll();

});

// ==============================
// Categories
// ==============================

function renderCategories(){

const container = document.getElementById("categoryGrid");

if(!container || typeof categories==="undefined") return;

container.innerHTML="";

categories.forEach(item=>{

container.innerHTML+=`
<div class="category-card">
<div class="category-icon">${item.icon}</div>
<h3>${item.title}</h3>
<p>${item.description}</p>
<a href="#">Explore →</a>
</div>
`;

});

}

// ==============================
// Products
// ==============================

function renderProducts(){

const container=document.getElementById("productGrid");

if(!container || typeof featuredProducts==="undefined") return;

container.innerHTML="";

featuredProducts.forEach(product=>{

container.innerHTML+=`
<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<div class="product-content">

<h3>${product.name}</h3>

<p>${product.description}</p>

<div class="rating">
⭐ ${product.rating}
</div>

<div class="product-buttons">

<a href="#">Read Review</a>

<a href="${product.link}" target="_blank">
View Deal
</a>

</div>

</div>

</div>
`;

});

}

// ==============================
// Smooth Scroll
// ==============================

function initSmoothScroll(){

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

}
// ======================================
// Smart Picks Daily
// script.js - Part 2
// ======================================

// ==============================
// Blog Posts
// ==============================

function renderBlogs() {

const container = document.getElementById("blogGrid");

if (!container || typeof blogPosts === "undefined") return;

container.innerHTML = "";

blogPosts.forEach(post => {

container.innerHTML += `
<div class="blog-card">

<img src="${post.image}" alt="${post.title}">

<div class="blog-content">

<span>${post.category} • ${post.date}</span>

<h3>${post.title}</h3>

<p>${post.excerpt}</p>

<a href="${post.link}">
Read More →
</a>

</div>

</div>
`;

});

}

// ==============================
// Testimonials
// ==============================

function renderTestimonials() {

const container = document.getElementById("testimonialGrid");

if (!container || typeof testimonials === "undefined") return;

container.innerHTML = "";

testimonials.forEach(item => {

container.innerHTML += `
<div class="testimonial-card">

<div class="stars">
${"⭐".repeat(item.rating)}
</div>

<p>"${item.review}"</p>

<h4>${item.name}</h4>

<span>${item.country}</span>

</div>
`;

});

}

// ==============================
// FAQ
// ==============================

function renderFAQs() {

const container = document.getElementById("faqList");

if (!container || typeof faqs === "undefined") return;

container.innerHTML = "";

faqs.forEach(faq => {

container.innerHTML += `
<div class="faq-item">

<h3>${faq.question}</h3>

<p>${faq.answer}</p>

</div>
`;

});

}
