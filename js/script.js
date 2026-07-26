// Preloader Logic
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('preloader-hidden');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Toggle hamburger icon between menu and close (using Phosphor icons or similar, we'll just toggle a class for now or let HTML handle it)
            if (navMenu.classList.contains('active')) {
                hamburger.innerHTML = '<i class="ph ph-x"></i>';
            } else {
                hamburger.innerHTML = '<i class="ph ph-list"></i>';
            }
        });
    }

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.innerHTML = '<i class="ph ph-list"></i>';
            }
        });
    });

    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Set current year in footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Intersection Observer for scroll animations (fade-in elements)
    const faders = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Accordion functionality for Terms and Policies
    const accordions = document.querySelectorAll('.accordion-btn');
    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                // Update icon
                const icon = this.querySelector('i');
                icon.classList.remove('ph-caret-up');
                icon.classList.add('ph-caret-down');
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                // Update icon
                const icon = this.querySelector('i');
                icon.classList.remove('ph-caret-down');
                icon.classList.add('ph-caret-up');
            }
        });
    });
});
