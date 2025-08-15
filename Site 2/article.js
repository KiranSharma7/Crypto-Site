/**
 * CryptocoinPress - Article Page JavaScript
 * 
 * Handles:
 * - Mobile navigation
 * - Article-specific functionality
 * - Accessibility features
 */

'use strict';

/**
 * Mobile Navigation Controller
 * Shared functionality with main site
 */
const MobileNav = {
    toggle() {
        const navLinks = document.getElementById('navLinks');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (!navLinks || !menuToggle) return;
        
        const isOpen = navLinks.classList.contains('show');
        
        navLinks.classList.toggle('show');
        menuToggle.classList.toggle('active');
        
        menuToggle.setAttribute('aria-expanded', !isOpen);
    },
    
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
 * Article Page Functionality
 */
const ArticlePage = {
    /**
     * Initialize social sharing functionality
     */
    initSocialSharing() {
        const shareButtons = document.querySelectorAll('.share-btn');
        
        shareButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const url = encodeURIComponent(window.location.href);
                const title = encodeURIComponent(document.title);
                
                if (btn.classList.contains('facebook')) {
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'share', 'width=600,height=400');
                } else if (btn.classList.contains('twitter')) {
                    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, 'share', 'width=600,height=400');
                } else {
                    // Copy link functionality
                    navigator.clipboard?.writeText(window.location.href).then(() => {
                        btn.textContent = 'Copied!';
                        setTimeout(() => {
                            btn.innerHTML = '<i class="fas fa-link"></i>';
                        }, 2000);
                    }).catch(() => {
                        // Fallback for older browsers
                        const textArea = document.createElement('textarea');
                        textArea.value = window.location.href;
                        document.body.appendChild(textArea);
                        textArea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textArea);
                        btn.textContent = 'Copied!';
                        setTimeout(() => {
                            btn.innerHTML = '<i class="fas fa-link"></i>';
                        }, 2000);
                    });
                }
            });
        });
    },
    
    /**
     * Initialize reading progress indicator
     */
    initReadingProgress() {
        const article = document.querySelector('.article-body');
        if (!article) return;
        
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: var(--primary-color);
            z-index: 1000;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / documentHeight) * 100;
            
            progressBar.style.width = Math.min(progress, 100) + '%';
        });
    }
};

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

// Close mobile menu on resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 575.98) {
            MobileNav.close();
        }
    }, 250);
});

/**
 * Initialize article page functionality
 */
document.addEventListener('DOMContentLoaded', function() {
    ArticlePage.initSocialSharing();
    ArticlePage.initReadingProgress();
    
    // Initialize Feather Icons if available
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});

