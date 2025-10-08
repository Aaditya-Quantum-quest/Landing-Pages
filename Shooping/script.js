// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Interactive button effects
document.querySelector('.join-btn').addEventListener('click', function () {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = '';
        alert('🎉 Welcome to Socialty! Your journey begins now.');
    }, 150);
});

document.querySelector('.download-btn').addEventListener('click', function (e) {
    e.preventDefault();
    alert('🚀 Get started feature launching soon!');
});