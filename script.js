// scripts.js

// Mobile Navigation Toggle
document.querySelector('.navbar-toggle').addEventListener('click', () => {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
});

// Detect scroll and change background color
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {  // Adjust this value to control when the change occurs
        navbar.style.backgroundColor = "var(--navy-blue)";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
});

// Carousel Controls
const prevButton = document.querySelector('.carousel-controls .prev');
const nextButton = document.querySelector('.carousel-controls .next');
const carouselItems = document.querySelector('.carousel-items');
let currentIndex = 0;

const updateCarousel = () => {
    const itemsCount = document.querySelectorAll('.carousel-items').length;
    const itemWidth = 100 / itemsCount;
    carouselItems.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
};

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : document.querySelectorAll('.carousel-item').length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < document.querySelectorAll('.carousel-item').length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.navbar-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
