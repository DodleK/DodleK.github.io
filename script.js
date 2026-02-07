// ========================================
// Sidebar Navigation
// ========================================
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');

// Navigation click handler
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links and sections
        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Show corresponding section
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
            
            // Smooth scroll to top on mobile
            if (window.innerWidth <= 968) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                // Close mobile sidebar
                sidebar.classList.remove('active');
            }
        }
    });
});

// ========================================
// Mobile Sidebar Toggle
// ========================================
const mobileToggle = document.getElementById('mobileToggle');
const sidebar = document.querySelector('.sidebar');

mobileToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 968) {
        if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// ========================================
// Skill Bar Animation on Scroll
// ========================================
const skillItems = document.querySelectorAll('.skill-item');

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.skill-progress');
            const width = progressBar.style.width;
            progressBar.style.width = '0';
            setTimeout(() => {
                progressBar.style.width = width;
            }, 100);
        }
    });
}, observerOptions);

skillItems.forEach(item => {
    skillObserver.observe(item);
});

// ========================================
// Smooth Fade-in Animation for Cards
// ========================================
const animateElements = document.querySelectorAll('.expertise-card, .portfolio-card, .timeline-item, .education-card');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(el);
});

// ========================================
// Portfolio Card Hover Effects
// ========================================
const portfolioCards = document.querySelectorAll('.portfolio-card');

portfolioCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ========================================
// Form Submission Handler (Optional)
// ========================================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Form will be handled by Formspree
        // Add custom success message if needed
        console.log('Form submitted');
    });
}

// ========================================
// Prevent Default Hash Navigation
// ========================================
window.addEventListener('hashchange', (e) => {
    e.preventDefault();
});

// ========================================
// Initialize on Load
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Activate first section by default
    if (sections.length > 0) {
        sections[0].classList.add('active');
    }
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
    
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    console.log('%c👋 Kavya Dodle Portfolio', 'font-size: 20px; font-weight: bold; color: #F59E0B;');
    console.log('%cPower BI Specialist | Data Analytics Engineer', 'font-size: 14px; color: #94A3B8;');
    console.log('%c📧 kavyakasthuridodle@gmail.com', 'font-size: 14px; color: #F59E0B;');
});

// ========================================
// Resize Handler
// ========================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Close sidebar on desktop resize
        if (window.innerWidth > 968) {
            sidebar.classList.remove('active');
        }
    }, 250);
});

// ========================================
// Keyboard Navigation
// ========================================
document.addEventListener('keydown', (e) => {
    // ESC to close mobile sidebar
    if (e.key === 'Escape' && window.innerWidth <= 968) {
        sidebar.classList.remove('active');
    }
});

// ========================================
// External Links - Open in New Tab
// ========================================
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hasAttribute('target')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ========================================
// Copy Email to Clipboard (Optional Feature)
// ========================================
const emailLinks = document.querySelectorAll('a[href^="mailto"]');
emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const email = link.getAttribute('href').replace('mailto:', '');
        
        // Optional: Copy to clipboard
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                console.log('Email copied to clipboard:', email);
            });
        }
    });
});
