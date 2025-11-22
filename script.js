// Simple animation for chart bars
document.addEventListener('DOMContentLoaded', function() {
    const chartBars = document.querySelectorAll('.chart-bar');
    
    // Animate chart bars on page load
    setTimeout(() => {
        chartBars.forEach(bar => {
            const height = bar.style.height;
            bar.style.height = '0%';
            
            setTimeout(() => {
                bar.style.height = height;
            }, 300);
        });
    }, 500);
    
    // Add scroll animation for specialization cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe specialization cards
    const cards = document.querySelectorAll('.specialization-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(card);
    });
    
    // Observe tech items
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(item);
    });
    
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Form submission (send via AJAX to preserve page and integrate with Formspree)
    const contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const url = contactForm.action;
            const method = (contactForm.method || 'POST').toUpperCase();
            const formData = new FormData(contactForm);

            fetch(url, {
                method: method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset();
                } else {
                    response.json().then(data => {
                        alert((data && data.error) ? data.error : 'Oops! There was a problem submitting the form.');
                    }).catch(() => {
                        alert('Oops! There was a problem submitting the form.');
                    });
                }
            }).catch(() => {
                alert('Network error: could not send the message.');
            });
        });
    }
    
    // Smooth scrolling for navigation links
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
});
