function toggleMenu() {
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        }

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.nav-menu').classList.remove('active');
                document.querySelector('.hamburger').classList.remove('active');
            });
        });