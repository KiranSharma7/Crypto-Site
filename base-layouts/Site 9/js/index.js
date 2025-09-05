/**
 * Crypto News Website - Enhanced Navigation Script
 * Optimized for performance, accessibility, and modern JavaScript best practices
 */

/**
 * Toggle mobile navigation menu
 * @param {HTMLElement} icon - The hamburger button element
 */
function toggleMenu(icon) {
    // Validate input
    if (!icon || typeof icon.classList === 'undefined') {
        console.error('Invalid hamburger icon element provided to toggleMenu');
        return;
    }

    // Find navigation menu
    const navigation = document.querySelector('.navigations');
    if (!navigation) {
        console.error('Navigation menu not found');
        return;
    }

    // Toggle visual states
    icon.classList.toggle('open');
    navigation.classList.toggle('active');
    
    // Update ARIA expanded state for accessibility
    const isExpanded = navigation.classList.contains('active');
    icon.setAttribute('aria-expanded', isExpanded.toString());
    
    // Announce to screen readers
    const announcement = isExpanded ? 'Navigation menu opened' : 'Navigation menu closed';
    announceToScreenReader(announcement);
}

/**
 * Announce text to screen readers
 * @param {string} message - Message to announce
 */
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

/**
 * Handle keyboard navigation
 * @param {KeyboardEvent} event - Keyboard event
 */
function handleKeyboardNavigation(event) {
    // Close mobile menu on Escape key
    if (event.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navigation = document.querySelector('.navigations');
        
        if (hamburger && navigation && navigation.classList.contains('active')) {
            toggleMenu(hamburger);
            hamburger.focus(); // Return focus to hamburger button
        }
    }
}

/**
 * Initialize navigation when DOM is loaded
 */
function initializeNavigation() {
    // Add keyboard event listener
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Add screen reader only styles if not present
    if (!document.querySelector('.sr-only')) {
        const style = document.createElement('style');
        style.textContent = `
            .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border: 0;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Ensure hamburger button has proper initial ARIA state
    const hamburger = document.querySelector('.hamburger');
    if (hamburger && !hamburger.hasAttribute('aria-expanded')) {
        hamburger.setAttribute('aria-expanded', 'false');
    }
}

/**
 * Handle window resize to close mobile menu on desktop
 */
function handleResize() {
    const navigation = document.querySelector('.navigations');
    const hamburger = document.querySelector('.hamburger');
    
    if (window.innerWidth > 768 && navigation && navigation.classList.contains('active')) {
        navigation.classList.remove('active');
        if (hamburger) {
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeNavigation);
} else {
    initializeNavigation();
}

// Handle window resize
window.addEventListener('resize', handleResize);

/**
 * Performance optimizations
 */
// Throttle resize events for better performance
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResize, 150);
});

// Preload critical images when page loads
window.addEventListener('load', () => {
    const criticalImages = document.querySelectorAll('img[data-preload]');
    criticalImages.forEach(img => {
        const newImg = new Image();
        newImg.src = img.dataset.preload;
    });
});
