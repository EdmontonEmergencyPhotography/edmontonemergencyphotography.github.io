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

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate about items
    const aboutItems = document.querySelectorAll('.about-item');
    aboutItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    // Animate gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    // Animate social cards
    const socialCards = document.querySelectorAll('.social-card');
    socialCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Animate contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
});

// Gallery lightbox functionality (simple version)
const galleryImages = document.querySelectorAll('.gallery-item');

galleryImages.forEach(item => {
    item.addEventListener('click', () => {
        // Add a subtle click effect
        item.style.transform = 'scale(0.98)';
        setTimeout(() => {
            item.style.transform = '';
        }, 100);
        
        // In a full implementation, this would open a lightbox
        // For now, we just provide visual feedback
        console.log('Gallery item clicked - lightbox would open here');
    });
});

// Add parallax effect to hero background
let ticking = false;

function updateParallax(scrollPos) {
    const hero = document.querySelector('.hero-background');
    if (hero) {
        const yPos = scrollPos * 0.5;
        hero.style.transform = `translateY(${yPos}px)`;
    }
    ticking = false;
}

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateParallax(scrollPos);
        });
        ticking = true;
    }
});

// Mobile menu toggle (if needed in future)
function createMobileMenu() {
    const nav = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth <= 768) {
        // Mobile menu functionality could be added here
        // For now, the CSS handles the responsive layout
    }
}

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// Add loading animation complete
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Form validation (if contact form is added)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Console easter egg
console.log('%c🚨 Edmonton Emergency Photography 🚨', 'font-size: 20px; font-weight: bold; color: #dc2626;');
console.log('%cDocumenting critical moments with professionalism and precision.', 'font-size: 12px; color: #475569;');
console.log('%cInterested in our services? Contact us at contact@edmontonemergency.photo', 'font-size: 12px; color: #1e40af;');