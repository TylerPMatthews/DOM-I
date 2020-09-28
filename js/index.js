const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav Bar Links
const newLink1 = document.querySelector('nav a')
newLink1.textContent = 'Services'

const newLink2 = document.querySelector('nav a:nth-of-type(2)')
newLink2.textContent = 'Product'

const newLink3 = document.querySelector('nav a:nth-of-type(3)')
newLink3.textContent = 'Vision'

const newLink4 = document.querySelector('nav a:nth-of-type(4)')
newLink4.textContent = 'Features'

const newLink5 = document.querySelector('nav a:nth-of-type(5)')
newLink5.textContent = 'About'

const newLink6 = document.querySelector('nav a:nth-of-type(6)')
newLink6.textContent = 'Contact'


//Main Image
let newImage = document.getElementById('cta-img')
newImage.src = 'img/header-img.png'

//Main Title


let newTitle = document.querySelector('.cta-text h1')
newTitle.textContent = 'Dom IS Awesome'

//Button under main title

let newButton = document.querySelector('.cta-text button')
newButton.textContent = 'Get Started'

// Top content

//h4 title
const newTitle2 = document.querySelector('.top-content .text-content h4 ')
newTitle2.textContent = 'Features'

// Paragrapgh to h4 title
const newP2 = document.querySelector('.top-content .text-content p')
newP2.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


//h4 title
const newTitle3 = document.querySelector('.top-content .text-content:nth-of-type(2) h4')
newTitle3.textContent = 'About'

// Paragrapgh to h4 title
const newP3 = document.querySelector('.top-content .text-content:nth-of-type(2) p')
newP3.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
//Image
 let newImage1 = document.getElementById('middle-img')
 newImage1.src = 'img/mid-page-accent.jpg'

//Bottom Content

//H4 Title
const newTitle4 = document.querySelector('.bottom-content .text-content h4')
newTitle4.textContent = 'Services'

// Paragrapgh to h4 title
const newP4 = document.querySelector('.bottom-content .text-content p')
newP4.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//H4 Title
const newTitle5 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')
newTitle5.textContent = 'Product'

// Paragrapgh to h4 title
const newP5 = document.querySelector('.bottom-content .text-content:nth-of-type(2) p')
newP5.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//H4 Title
const newTitle6 = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')
newTitle6.textContent = 'Vision'

// Paragrapgh to h4 title
const newP6 = document.querySelector('.bottom-content .text-content:nth-of-type(3) p')
newP6.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//Contact Section

//h4 Title
const newTitle7 = document.querySelector('.contact h4')
newTitle7.textContent = 'Contact'

// P
const newP7 = document.querySelector('.contact p')
newP7.textContent = '123 Way 456 Street Somewhere, USA'

// P

const newP8 = document.querySelector('.contact p:nth-of-type(2)')
newP8.textContent = '1 (888) 888-8888'

// P

const newP9 = document.querySelector('.contact p:nth-of-type(3)')
newP9.textContent = 'sales@greatidea.io'


//Footer Section

//P
const newP10 = document.querySelector('footer p')
newP10.textContent = 'Copyright Great Idea! 2018'

const newColorNav = document.querySelector('nav a')
newColorNav.style.color = 'green'

const addNav1 = document.createElement('a')
addNav1.href = '#';
addNav1.textContent = 'Item1'
document.querySelector('nav').appendChild(addNav1)

const addNav2 = document.createElement('a')
addNav1.href = '#';
addNav1.textContent = 'Item2'
document.querySelector('nav a').prepend(addNav2)