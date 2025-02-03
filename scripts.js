document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event bubbling
    mobileMenu.classList.toggle('hidden');
    menuBtn.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        menuBtn.classList.remove('active');
    }
});

// Close menu on scroll
window.addEventListener('scroll', () => {
    mobileMenu.classList.add('hidden');
    menuBtn.classList.remove('active');
});
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const headerHeight = document.querySelector('nav').offsetHeight;
            const offset = target.offsetTop - headerHeight;

            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });

            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                menuBtn.classList.remove('active');
            }
        });
    });

    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        mirror: false,
        offset: 120,
        disable: window.innerWidth < 640
    });

    // Initialize Typed.js
    const typed = new Typed('#typed-subtitle', {
        strings: ['Full-Stack Developer', 'Problem Solver', 'Tech Enthusiast'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        AOS.refresh();
    });
});

    // Parallax Effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const backgroundPosition = scrolled * 0.5;
        document.body.style.backgroundPosition = `center ${backgroundPosition}px`;
    });
