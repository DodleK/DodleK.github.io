// ========================================
// Top Navigation
// ========================================
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.content-section');

// Navigation click handler
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all items and sections
        navItems.forEach(i => i.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked item
        item.classList.add('active');
        
        // Show corresponding section
        const targetId = item.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
            
            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Close mobile sidebar if open
            if (window.innerWidth <= 968) {
                sidebar.classList.remove('active');
            }
        }
    });
});

// ========================================
// Rotating Title Animation
// ========================================
const titles = [
    "Data Analytics Engineer",
    "BI Solutions Architect",
    "ETL Pipeline Engineer",
    "Power BI Specialist"
];

let currentTitleIndex = 0;
const rotatingTitle = document.querySelector('.rotating-title');

if (rotatingTitle) {
    setInterval(() => {
        // Fade out
        rotatingTitle.style.opacity = '0';
        rotatingTitle.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            // Change text
            currentTitleIndex = (currentTitleIndex + 1) % titles.length;
            rotatingTitle.textContent = titles[currentTitleIndex];
            
            // Fade in
            rotatingTitle.style.opacity = '1';
            rotatingTitle.style.transform = 'translateY(0)';
        }, 300);
        
    }, 3000); // Change every 3 seconds
    
    // Add transition CSS
    rotatingTitle.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
}

// ========================================
// Mobile Sidebar Toggle
// ========================================
const mobileToggle = document.getElementById('mobileToggle');
const sidebar = document.querySelector('.sidebar');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 968) {
        if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// ========================================
// Smooth Fade-in Animation for Cards
// ========================================
const animateElements = document.querySelectorAll('.expertise-card, .portfolio-card, .timeline-item, .education-item');

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
// Form Submission Handler
// ========================================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Form will be handled by Formspree
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
    if (navItems.length > 0) {
        navItems[0].classList.add('active');
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
// Copy Email to Clipboard
// ========================================
const emailLinks = document.querySelectorAll('a[href^="mailto"]');
emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const email = link.getAttribute('href').replace('mailto:', '');
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                console.log('Email copied to clipboard:', email);
            });
        }
    });
});

// ========================================
// Smooth Scroll Enhancement
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
