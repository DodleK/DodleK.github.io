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
        rotatingTitle.style.opacity = '0';
        rotatingTitle.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            currentTitleIndex = (currentTitleIndex + 1) % titles.length;
            rotatingTitle.textContent = titles[currentTitleIndex];
            rotatingTitle.style.opacity = '1';
            rotatingTitle.style.transform = 'translateY(0)';
        }, 300);
        
    }, 3000);
    
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

document.addEventListener('click', (e) => {
    if (window.innerWidth <= 968) {
        if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// ========================================
// Contact Form with Success Message
// ========================================
const contactForm = document.querySelector('.contact-form');
const formWrapper = document.querySelector('.contact-form-wrapper');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('.submit-button');
        const originalButtonText = submitButton.innerHTML;
        
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
        
        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                showSuccessMessage();
                contactForm.reset();
            } else {
                showErrorMessage();
            }
        } catch (error) {
            showErrorMessage();
        } finally {
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;
        }
    });
}

function showSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.className = 'form-message success-message';
    successMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <h4>Thank you for your message!</h4>
        <p>I'll get back to you as soon as possible.</p>
    `;
    
    formWrapper.insertBefore(successMessage, contactForm);
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    setTimeout(() => {
        successMessage.style.opacity = '0';
        setTimeout(() => successMessage.remove(), 300);
    }, 5000);
}

function showErrorMessage() {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'form-message error-message';
    errorMessage.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        <h4>Oops! Something went wrong.</h4>
        <p>Please try again or email me directly at <a href="mailto:kavya.dodle@outlook.com">kavya.dodle@outlook.com</a></p>
    `;
    
    formWrapper.insertBefore(errorMessage, contactForm);
    errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    setTimeout(() => {
        errorMessage.style.opacity = '0';
        setTimeout(() => errorMessage.remove(), 300);
    }, 7000);
}

// ========================================
// Animations
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
// Initialize
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    if (sections.length > 0) sections[0].classList.add('active');
    if (navItems.length > 0) navItems[0].classList.add('active');
    
    document.body.classList.add('loaded');
    console.log('%c👋 Kavya Dodle Portfolio', 'font-size: 20px; font-weight: bold; color: #F59E0B;');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 968) sidebar.classList.remove('active');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && window.innerWidth <= 968) sidebar.classList.remove('active');
});
