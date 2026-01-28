



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