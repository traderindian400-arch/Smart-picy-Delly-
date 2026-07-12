// ======================================
// Smart Picks Daily
// Premium Affiliate Website
// data.js - Part 1
// ======================================

// =========================
// Categories
// =========================

const categories = [
{
id: 1,
icon: "🤖",
title: "AI Tools",
description: "Discover the best AI tools for productivity, writing, coding and business."
},
{
id: 2,
icon: "📱",
title: "Android Apps",
description: "Useful Android apps for students, creators and professionals."
},
{
id: 3,
icon: "🌐",
title: "Useful Websites",
description: "Amazing websites that help you work smarter and save time."
},
{
id: 4,
icon: "💻",
title: "Software",
description: "Top software for Windows, Mac and online productivity."
},
{
id: 5,
icon: "💰",
title: "Best Deals",
description: "Latest software discounts and lifetime deals."
},
{
id: 6,
icon: "🛒",
title: "Amazon Finds",
description: "Best Amazon products recommended by our experts."
},
{
id: 7,
icon: "📚",
title: "Digital Products",
description: "Premium ebooks, templates, prompts and digital downloads."
},
{
id: 8,
icon: "🎥",
title: "Creator Tools",
description: "Best tools for YouTubers, bloggers and content creators."
}
];

// =========================
// Featured Products
// =========================

const featuredProducts = [
{
id: 1,
name: "ChatGPT Plus",
image: "images/chatgpt.jpg",
rating: 4.9,
price: "$20/month",
category: "AI Tools",
description: "Powerful AI assistant for writing, coding, research and productivity.",
link: "#"
},
{
id: 2,
name: "Canva Pro",
image: "images/canva.jpg",
rating: 4.8,
price: "$15/month",
category: "Creator Tools",
description: "Professional graphic design platform with AI-powered features.",
link: "#"
}
];
// ======================================
// Smart Picks Daily
// data.js - Part 2
// ======================================

// =========================
// More Featured Products
// =========================

featuredProducts.push(

{
id: 3,
name: "Notion AI",
image: "images/notion.jpg",
rating: 4.8,
price: "$10/month",
category: "AI Tools",
description: "AI powered workspace for notes, documents, tasks and collaboration.",
link: "#"
},

{
id: 4,
name: "Grammarly Premium",
image: "images/grammarly.jpg",
rating: 4.7,
price: "$12/month",
category: "AI Tools",
description: "Improve grammar, spelling and writing with advanced AI.",
link: "#"
},

{
id: 5,
name: "Adobe Photoshop",
image: "images/photoshop.jpg",
rating: 4.9,
price: "$22/month",
category: "Software",
description: "Professional photo editing and graphic design software.",
link: "#"
},

{
id: 6,
name: "CapCut Pro",
image: "images/capcut.jpg",
rating: 4.8,
price: "$9/month",
category: "Creator Tools",
description: "Professional AI video editing tool for creators.",
link: "#"
}

);

// =========================
// Blog Posts
// =========================

const blogPosts = [

{
id:1,
title:"10 Best AI Tools You Should Try in 2026",
image:"images/blog-ai-tools.jpg",
category:"AI Tools",
date:"July 2026",
excerpt:"Discover the most powerful AI tools for creators, students and professionals.",
link:"#"
},

{
id:2,
title:"Best Productivity Apps to Save Time",
image:"images/blog-productivity.jpg",
category:"Productivity",
date:"July 2026",
excerpt:"Boost your productivity with these amazing apps.",
link:"#"
},

{
id:3,
title:"Top Useful Websites Everyone Should Know",
image:"images/blog-websites.jpg",
category:"Websites",
date:"July 2026",
excerpt:"Free websites that make work easier and faster.",
link:"#"
},

{
id:4,
title:"Best Amazon Tech Gadgets Under $50",
image:"images/blog-amazon.jpg",
category:"Amazon",
date:"July 2026",
excerpt:"Affordable gadgets that are actually worth buying.",
link:"#"
}

];
// ======================================
// Smart Picks Daily
// data.js - Part 3 (Final)
// ======================================

// =========================
// Testimonials
// =========================

const testimonials = [
{
id:1,
name:"John Smith",
country:"United States",
rating:5,
review:"Smart Picks Daily helped me discover amazing AI tools that improved my workflow."
},
{
id:2,
name:"Emma Wilson",
country:"United Kingdom",
rating:5,
review:"Professional reviews with honest recommendations. Highly recommended."
},
{
id:3,
name:"Rahul Sharma",
country:"India",
rating:5,
review:"Excellent website for software and digital product recommendations."
}
];

// =========================
// FAQs
// =========================

const faqs = [
{
question:"Are your reviews honest?",
answer:"Yes. Every review is based on research, testing and honest opinions."
},
{
question:"Do you use affiliate links?",
answer:"Yes. Some links are affiliate links, but they never affect our recommendations."
},
{
question:"Can I trust your recommendations?",
answer:"Absolutely. We only recommend products that provide real value."
},
{
question:"How often is the website updated?",
answer:"We regularly publish new reviews, deals and blog articles."
}
];

// =========================
// Social Links
// =========================

const socialLinks = {
instagram:"https://instagram.com/",
facebook:"https://facebook.com/",
youtube:"https://youtube.com/",
pinterest:"https://pinterest.com/"
};

// =========================
// Website Stats
// =========================

const websiteStats = [
{
title:"AI Tools Reviewed",
value:"500+"
},
{
title:"Monthly Visitors",
value:"100K+"
},
{
title:"Products Compared",
value:"1,000+"
},
{
title:"Countries Reached",
value:"50+"
}
];

// =========================
// Trust Features
// =========================

const trustFeatures = [
{
icon:"✅",
title:"Honest Reviews",
description:"Every recommendation is based on research and real value."
},
{
icon:"🔒",
title:"Safe & Secure",
description:"We respect your privacy and never misuse your information."
},
{
icon:"⚡",
title:"Fast Updates",
description:"Latest AI tools, software and deals updated regularly."
},
{
icon:"🌍",
title:"Global Audience",
description:"Helpful recommendations for users worldwide."
}
];

// =========================
// Navigation
// =========================

const navigationMenu = [
"Home",
"AI Tools",
"Reviews",
"Blog",
"Best Deals",
"About",
"Contact"
];

// =========================
// Footer Links
// =========================

const footerLinks = {
company:[
"About",
"Contact",
"Privacy Policy",
"Terms & Conditions",
"Affiliate Disclosure",
"Disclaimer"
],

resources:[
"AI Tools",
"Software",
"Useful Websites",
"Amazon Finds",
"Digital Products",
"Blog"
],

support:[
"FAQ",
"Help Center",
"Submit a Tool",
"Report Issue"
]
};

console.log("✅ Smart Picks Daily Data Loaded Successfully");
