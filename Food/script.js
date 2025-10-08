// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Button click handlers
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function () {
        alert('Welcome to Organo! Let\'s start your healthy journey.');
    });
});

document.querySelector('.btn-secondary').addEventListener('click', function () {
    alert('Exploring our delicious and healthy menu options!');
});

// Add parallax effect to floating leaves
document.addEventListener('mousemove', (e) => {
    const leaves = document.querySelectorAll('.floating-leaf');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    leaves.forEach((leaf, index) => {
        const speed = (index + 1) * 10;
        const xPos = (x - 0.5) * speed;
        const yPos = (y - 0.5) * speed;
        leaf.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});