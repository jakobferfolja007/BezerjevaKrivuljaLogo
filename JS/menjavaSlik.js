const heroSlides = [
    { image: 'images/akcija3.jpg', tag: 'Zimska ponudba', title: 'Legenda je<br>nazaj' },
    { image: 'images/akcija2.jpg', tag: 'Pomladna akcija', title: 'Novi McCrispy<br>mango curry' },
    { image: 'images/akcija.jpg', tag: 'Vroča ponudba', title: 'Okusi<br>vročino' }
];

let slideIndex = 0;

const heroImg = document.getElementById('hero-image');
const heroTag = document.getElementById('hero-tag');
const heroTitle = document.getElementById('hero-title');

setInterval(() => {
    slideIndex = (slideIndex + 1) % heroSlides.length;

    // posodobi sliko
    heroImg.src = heroSlides[slideIndex].image;

    // posodobi tag
    heroTag.textContent = heroSlides[slideIndex].tag;

    // posodobi naslov z <br> za dve vrstici
    heroTitle.innerHTML = heroSlides[slideIndex].title;
}, 4000);







// seznam slik
const images = [
    'images/BigMac.jpg',
    'images/Mcflurry.jpg',
    'images/Cola.jpg',
    'images/Fries.jpg'
];

let currentIndex = 0;
const imgElement = document.getElementById('highlight-image');

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length; // ciklično
    imgElement.src = images[currentIndex];
}, 2000); // 2000ms = 2 sekundi