// Mobile Menu Toggle Functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

// Toggle mobile menu
mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('mobile-active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('mobile-active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Button click handlers
const orderButton = document.querySelector('.btn-primary');
const knowMoreButton = document.querySelector('.btn-secondary');
const loginButton = document.querySelector('.login-btn');

// Order Now button functionality
orderButton.addEventListener('click', () => {
    alert('Order functionality would be implemented here!');
});

// Know More button functionality
knowMoreButton.addEventListener('click', () => {
    alert('Know More functionality would be implemented here!');
});

// Login button functionality
loginButton.addEventListener('click', () => {
    alert('Login functionality would be implemented here!');
});

// Image hover effect enhancement
const heroImage = document.querySelector('.hero-image img');
if (heroImage) {
    heroImage.addEventListener('mouseenter', () => {
        heroImage.style.transform = 'rotate(0deg) scale(1.05)';
    });
    
    heroImage.addEventListener('mouseleave', () => {
        heroImage.style.transform = 'rotate(2deg) scale(1)';
    });
}

// Handle window resize
window.addEventListener('resize', () => {
    // Close mobile menu on resize to larger screens
    if (window.innerWidth > 968) {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('mobile-active');
    }
});

console.log('Flower Shop website loaded successfully! 🌸');
