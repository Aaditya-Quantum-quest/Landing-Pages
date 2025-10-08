// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced button interactions
document.querySelector('.order-btn').addEventListener('click', function () {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = '';
        alert('🍽️ Welcome to Fusion Kitchen! Your culinary journey awaits.');
    }, 150);
});

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.1;

    document.querySelectorAll('.floating-card').forEach((card, index) => {
        card.style.transform = `translateY(${parallax * (index + 1)}px) rotate(${Math.sin(scrolled * 0.01) * 2}deg)`;
    });
});