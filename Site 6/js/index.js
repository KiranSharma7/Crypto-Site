// CryptoNews JavaScript - Tab functionality and interactive elements
document.addEventListener('DOMContentLoaded', function() {
    
    // Tab functionality for sidebar
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    function switchTab(targetTab) {
        // Remove active class from all tabs and contents
        tabButtons.forEach(btn => btn.classList.remove('tab-button--active'));
        tabContents.forEach(content => content.classList.remove('tab-content--active'));
        
        // Add active class to clicked tab
        const clickedButton = document.querySelector(`[data-tab="${targetTab}"]`);
        const targetContent = document.querySelector(`#${targetTab}`);
        
        if (clickedButton && targetContent) {
            clickedButton.classList.add('tab-button--active');
            targetContent.classList.add('tab-content--active');
        }
    }
    
    // Add click event listeners to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = button.getAttribute('data-tab');
            switchTab(targetTab);
        });
        
        // Add keyboard navigation
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const targetTab = button.getAttribute('data-tab');
                switchTab(targetTab);
            }
        });
    });
    
    // Initialize first tab as active
    if (tabButtons.length > 0) {
        const firstTab = tabButtons[0].getAttribute('data-tab');
        switchTab(firstTab);
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Breaking news ticker pause on hover
    const breakingTicker = document.querySelector('.breaking-news__content');
    if (breakingTicker) {
        breakingTicker.addEventListener('mouseenter', () => {
            breakingTicker.style.animationPlayState = 'paused';
        });
        
        breakingTicker.addEventListener('mouseleave', () => {
            breakingTicker.style.animationPlayState = 'running';
        });
    }
    
    // Add loading state for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
        
        img.addEventListener('error', () => {
            img.classList.add('error');
            // Optionally set a fallback image
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNmNWY1ZjUiLz48dGV4dCB4PSIxNTAiIHk9IjEwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk5OSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0Ij5JbWFnZSBub3QgYXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg==';
        });
    });
    
    // Copy link functionality for share buttons (if present)
    const copyLinkBtns = document.querySelectorAll('[data-action="copy-link"]');
    copyLinkBtns.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            try {
                await navigator.clipboard.writeText(window.location.href);
                
                // Show feedback
                const originalText = btn.textContent;
                btn.textContent = 'Copied!';
                btn.classList.add('copied');
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.warn('Failed to copy link:', err);
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = window.location.href;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
            }
        });
    });
    
    // Intersection Observer for lazy loading and animations
    const observerOptions = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.article-card, .analysis-card, .masonry-item');
    animateElements.forEach(el => observer.observe(el));
    
    // Handle keyboard navigation for better accessibility
    document.addEventListener('keydown', (e) => {
        // Skip to main content with 'S' key
        if (e.key === 's' && e.altKey) {
            e.preventDefault();
            const mainContent = document.querySelector('main') || document.querySelector('.container');
            if (mainContent) {
                mainContent.focus();
                mainContent.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
    
    // Performance optimization: Preload critical images
    const criticalImages = document.querySelectorAll('.hero-image, .featured-image');
    criticalImages.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    });
    
    console.log('CryptoNews site initialized successfully');
});