/**
 * CryptocoinPress - Main JavaScript Module
 * 
 * Handles:
 * - Mobile navigation
 * - News ticker functionality
 * - Performance optimizations
 * - Accessibility features
 */

'use strict';

/**
 * Mobile Navigation Controller
 */
const MobileNav = {
    /**
     * Toggles mobile menu visibility
     */
    toggle() {
        const navLinks = document.getElementById('navLinks');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (!navLinks || !menuToggle) return;
        
        const isOpen = navLinks.classList.contains('show');
        
        navLinks.classList.toggle('show');
        menuToggle.classList.toggle('active');
        
        // Update aria-expanded for accessibility
        menuToggle.setAttribute('aria-expanded', !isOpen);
    },
    
    /**
     * Closes mobile menu if open
     */
    close() {
        const navLinks = document.getElementById('navLinks');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (!navLinks || !menuToggle) return;
        
        navLinks.classList.remove('show');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
};

/**
 * Global toggle function for backward compatibility
 */
function toggleMobileMenu() {
    MobileNav.toggle();
}

/**
 * Event Listeners
 */

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.getElementById('navLinks');
    
    if (!navMenu || !navLinks) return;
    
    if (!navMenu.contains(event.target) && navLinks.classList.contains('show')) {
        MobileNav.close();
    }
});

// Close mobile menu when window is resized to desktop size
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 575.98) {
            MobileNav.close();
        }
    }, 250); // Debounce resize events
});

/**
 * News Ticker Controller
 */
const NewsTicker = {
    currentSpeed: 60,
    
    /**
     * Initialize ticker functionality
     */
    init() {
        const tickerText = document.querySelector('.ticker-text');
        const prevBtn = document.querySelector('.ticker-prev');
        const nextBtn = document.querySelector('.ticker-next');
        const tickerContent = document.querySelector('.ticker-content');
        
        if (!tickerText || !tickerContent) return;
        
        // Pause animation on hover for better UX
        tickerContent.addEventListener('mouseenter', () => {
            tickerText.style.animationPlayState = 'paused';
        });
        
        tickerContent.addEventListener('mouseleave', () => {
            tickerText.style.animationPlayState = 'running';
        });
        
        // Speed controls
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.adjustSpeed(-10));
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.adjustSpeed(10));
        }
    },
    
    /**
     * Adjust ticker animation speed
     * @param {number} delta - Speed adjustment amount
     */
    adjustSpeed(delta) {
        const tickerText = document.querySelector('.ticker-text');
        if (!tickerText) return;
        
        this.currentSpeed = Math.max(30, Math.min(90, this.currentSpeed + delta));
        tickerText.style.animationDuration = `${this.currentSpeed}s`;
    }
};

/**
 * Performance Optimizations
 */
const PerformanceUtils = {
    /**
     * Initialize lazy loading for images
     */
    initLazyLoading() {
        // Only initialize if IntersectionObserver is supported
        if (!('IntersectionObserver' in window)) return;
        
        const images = document.querySelectorAll('img[data-src]');
        if (images.length === 0) return;
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        img.classList.remove('lazy');
                    }
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });

        images.forEach(img => {
            img.classList.add('lazy');
            imageObserver.observe(img);
        });
    }
};

/**
 * Application Initialization
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    NewsTicker.init();
    PerformanceUtils.initLazyLoading();
    
    // Initialize Feather Icons if available
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});

