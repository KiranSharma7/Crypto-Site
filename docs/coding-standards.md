# Coding Standards and Best Practices

This document outlines the coding standards, conventions, and best practices for the News Templates Collection project. Following these guidelines ensures consistency, maintainability, and quality across all templates.

## 📁 File Organization

### Directory Structure
```
Site X/
├── index.html              # Main template file
├── css/
│   ├── style.css          # Main stylesheet
│   ├── responsive.css     # Media queries (if separate)
│   └── components/        # Component-specific styles (optional)
├── js/
│   ├── main.js           # Main JavaScript file
│   └── components/       # Component-specific scripts (optional)
├── images/
│   ├── hero/             # Hero/banner images
│   ├── articles/         # Article thumbnails
│   └── ui/               # UI elements (icons, logos)
├── assets/               # Other assets (fonts, etc.)
├── README.md             # Template documentation
└── preview.png           # Template screenshot (1200x800px)
```

### File Naming Conventions
- **HTML Files**: `lowercase-with-hyphens.html`
- **CSS Files**: `lowercase-with-hyphens.css`
- **JavaScript Files**: `camelCase.js` or `lowercase-with-hyphens.js`
- **Images**: `descriptive-name-size.format` (e.g., `hero-banner-1200x600.jpg`)
- **Directories**: `lowercase-with-hyphens`

## 🏗️ HTML Standards

### Document Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Concise template description">
    <meta name="keywords" content="news, template, responsive">
    <meta name="author" content="Template Creator Name">
    <title>Template Name - News Website</title>
    
    <!-- Favicon -->
    <link rel="icon" href="images/favicon.ico">
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="css/style.css">
    
    <!-- Open Graph tags for social sharing -->
    <meta property="og:title" content="Template Name">
    <meta property="og:description" content="Template description">
    <meta property="og:image" content="images/preview.png">
</head>
<body>
    <!-- Content here -->
    
    <!-- Scripts before closing body tag -->
    <script src="js/main.js"></script>
</body>
</html>
```

### Semantic HTML
Use appropriate HTML5 semantic elements:

```html
<header>          <!-- Site header -->
<nav>             <!-- Navigation menus -->
<main>            <!-- Main content area -->
<section>         <!-- Content sections -->
<article>         <!-- Individual articles -->
<aside>           <!-- Sidebar content -->
<footer>          <!-- Site footer -->
<figure>          <!-- Images with captions -->
<figcaption>      <!-- Image captions -->
<time>            <!-- Dates and times -->
```

### Accessibility Standards
```html
<!-- Always include alt text for images -->
<img src="article.jpg" alt="Descriptive text about the image">

<!-- Use proper heading hierarchy -->
<h1>Main Page Title</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>

<!-- Include ARIA labels when needed -->
<button aria-label="Open mobile menu" class="menu-toggle">
    <span></span>
    <span></span>
    <span></span>
</button>

<!-- Use semantic form labels -->
<label for="search-input">Search articles</label>
<input type="search" id="search-input" name="search">

<!-- Include skip links for keyboard navigation -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

### Form Standards
```html
<form class="newsletter-signup" action="#" method="post">
    <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <div class="form-group">
        <input type="checkbox" id="privacy" name="privacy" required>
        <label for="privacy">I agree to the privacy policy</label>
    </div>
    
    <button type="submit" class="btn btn-primary">Subscribe</button>
</form>
```

## 🎨 CSS Standards

### CSS Organization
```css
/* ==========================================================================
   1. CSS Reset/Normalize
   ========================================================================== */

/* ==========================================================================
   2. CSS Custom Properties (Variables)
   ========================================================================== */

/* ==========================================================================
   3. Base Styles
   ========================================================================== */

/* ==========================================================================
   4. Layout Components
   ========================================================================== */

/* ==========================================================================
   5. UI Components
   ========================================================================== */

/* ==========================================================================
   6. Utility Classes
   ========================================================================== */

/* ==========================================================================
   7. Media Queries
   ========================================================================== */
```

### CSS Custom Properties
```css
:root {
    /* Colors */
    --color-primary: #1a365d;
    --color-secondary: #2c5282;
    --color-accent: #3182ce;
    --color-success: #38a169;
    --color-warning: #d69e2e;
    --color-error: #e53e3e;
    
    /* Text Colors */
    --text-primary: #1a202c;
    --text-secondary: #4a5568;
    --text-light: #a0aec0;
    
    /* Background Colors */
    --bg-primary: #ffffff;
    --bg-secondary: #f7fafc;
    --bg-dark: #1a202c;
    
    /* Typography */
    --font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-family-secondary: 'Merriweather', Georgia, serif;
    
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    
    /* Border Radius */
    --radius-sm: 0.25rem;
    --radius-md: 0.5rem;
    --radius-lg: 1rem;
    
    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
    
    /* Transitions */
    --transition-fast: 0.15s ease-in-out;
    --transition-normal: 0.3s ease-in-out;
    --transition-slow: 0.5s ease-in-out;
}
```

### Class Naming Convention (BEM-inspired)
```css
/* Block */
.article-card { }

/* Element */
.article-card__title { }
.article-card__image { }
.article-card__content { }
.article-card__meta { }

/* Modifier */
.article-card--featured { }
.article-card--large { }
.article-card__title--truncated { }
```

### Responsive Design Patterns
```css
/* Mobile First Approach */
.container {
    width: 100%;
    padding: 0 var(--spacing-md);
    margin: 0 auto;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        max-width: 768px;
        padding: 0 var(--spacing-lg);
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        padding: 0 var(--spacing-xl);
    }
}

/* Large Desktop */
@media (min-width: 1440px) {
    .container {
        max-width: 1400px;
    }
}
```

### Grid and Flexbox Patterns
```css
/* CSS Grid for main layout */
.main-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
}

@media (min-width: 1024px) {
    .main-layout {
        grid-template-columns: 2fr 1fr;
    }
}

/* Flexbox for component layouts */
.article-card {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.article-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
}
```

### Performance-Focused CSS
```css
/* Use efficient selectors */
.article-title { } /* Good */
div.article > h2.title { } /* Avoid - too specific */

/* Prefer classes over IDs for styling */
.header-nav { } /* Good */
#header-nav { } /* Avoid for styling */

/* Use transform for animations */
.card {
    transition: transform var(--transition-normal);
}

.card:hover {
    transform: translateY(-2px); /* Good - GPU accelerated */
}

/* Avoid expensive properties for animations */
.card:hover {
    box-shadow: var(--shadow-lg); /* OK for hover */
    /* Avoid animating: width, height, padding, margin */
}
```

## ⚙️ JavaScript Standards

### Code Organization
```javascript
(function() {
    'use strict';
    
    // Configuration
    const CONFIG = {
        BREAKPOINTS: {
            mobile: 768,
            tablet: 1024,
            desktop: 1440
        },
        ANIMATION_DURATION: 300
    };
    
    // Utility functions
    const utils = {
        debounce: function(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },
        
        throttle: function(func, limit) {
            let inThrottle;
            return function() {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        }
    };
    
    // Main application
    const NewsTemplate = {
        init: function() {
            this.bindEvents();
            this.initComponents();
        },
        
        bindEvents: function() {
            document.addEventListener('DOMContentLoaded', this.onDOMReady.bind(this));
            window.addEventListener('resize', utils.debounce(this.onResize.bind(this), 250));
        },
        
        onDOMReady: function() {
            console.log('Template initialized');
        },
        
        onResize: function() {
            // Handle resize events
        },
        
        initComponents: function() {
            this.initMobileMenu();
            this.initLazyLoading();
            this.initSearch();
        }
    };
    
    // Initialize
    NewsTemplate.init();
})();
```

### Modern JavaScript Patterns
```javascript
// Use const and let appropriately
const API_URL = 'https://api.example.com';
let currentPage = 1;

// Arrow functions for short operations
const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(date));
};

// Template literals for strings
const createArticleHTML = (article) => {
    return `
        <article class="article-card">
            <h2 class="article-card__title">${article.title}</h2>
            <p class="article-card__excerpt">${article.excerpt}</p>
            <time class="article-card__date">${formatDate(article.date)}</time>
        </article>
    `;
};

// Async/await for API calls
const fetchArticles = async (page = 1) => {
    try {
        const response = await fetch(`${API_URL}/articles?page=${page}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error('Failed to fetch articles:', error);
        return [];
    }
};
```

### Component Patterns
```javascript
// Mobile Menu Component
class MobileMenu {
    constructor(selector) {
        this.menu = document.querySelector(selector);
        this.toggle = this.menu?.querySelector('.menu-toggle');
        this.nav = this.menu?.querySelector('.mobile-nav');
        
        if (this.menu && this.toggle && this.nav) {
            this.init();
        }
    }
    
    init() {
        this.bindEvents();
        this.setInitialState();
    }
    
    bindEvents() {
        this.toggle.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleMenu();
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.menu.contains(e.target) && this.isOpen()) {
                this.closeMenu();
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen()) {
                this.closeMenu();
            }
        });
    }
    
    toggleMenu() {
        if (this.isOpen()) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }
    
    openMenu() {
        this.nav.classList.add('active');
        this.toggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }
    
    closeMenu() {
        this.nav.classList.remove('active');
        this.toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
    
    isOpen() {
        return this.nav.classList.contains('active');
    }
    
    setInitialState() {
        this.toggle.setAttribute('aria-expanded', 'false');
    }
}
```

### Error Handling
```javascript
// Graceful error handling
function initializeComponent(selector, ComponentClass) {
    try {
        const element = document.querySelector(selector);
        if (!element) {
            console.warn(`Component element not found: ${selector}`);
            return null;
        }
        
        return new ComponentClass(element);
    } catch (error) {
        console.error(`Failed to initialize component ${ComponentClass.name}:`, error);
        return null;
    }
}

// API error handling with user feedback
async function loadArticles() {
    const loadingElement = document.querySelector('.loading');
    const errorElement = document.querySelector('.error-message');
    
    try {
        loadingElement?.classList.add('active');
        errorElement?.classList.remove('active');
        
        const articles = await fetchArticles();
        displayArticles(articles);
        
    } catch (error) {
        console.error('Failed to load articles:', error);
        
        if (errorElement) {
            errorElement.textContent = 'Failed to load articles. Please try again later.';
            errorElement.classList.add('active');
        }
    } finally {
        loadingElement?.classList.remove('active');
    }
}
```

## 🖼️ Image Standards

### Image Formats and Optimization
```html
<!-- Use WebP with fallback -->
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Descriptive alt text" loading="lazy">
</picture>

<!-- Responsive images -->
<img srcset="small.jpg 480w,
             medium.jpg 800w,
             large.jpg 1200w"
     sizes="(max-width: 768px) 100vw,
            (max-width: 1024px) 50vw,
            33vw"
     src="medium.jpg"
     alt="Descriptive alt text"
     loading="lazy">
```

### Image Naming Convention
- `hero-banner-1920x800.jpg` - Hero/banner images
- `article-thumb-400x300.jpg` - Article thumbnails
- `author-avatar-100x100.jpg` - Author profile images
- `icon-search-24x24.svg` - UI icons
- `logo-site-200x50.png` - Site logos

### Recommended Sizes
- **Hero Images**: 1920x800px, 1200x600px
- **Article Thumbnails**: 400x300px, 300x200px
- **Author Avatars**: 100x100px, 150x150px
- **Social Media**: 1200x630px for Open Graph

## 📊 Performance Standards

### Loading Performance
- **First Contentful Paint**: < 1.5 seconds
- **Largest Contentful Paint**: < 2.5 seconds
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Optimization Techniques
```html
<!-- Preload critical resources -->
<link rel="preload" href="css/critical.css" as="style">
<link rel="preload" href="fonts/primary-font.woff2" as="font" type="font/woff2" crossorigin>

<!-- Defer non-critical JavaScript -->
<script src="js/analytics.js" defer></script>

<!-- Use lazy loading for images -->
<img src="placeholder.jpg" data-src="actual-image.jpg" loading="lazy" alt="Description">
```

### CSS Optimization
```css
/* Use efficient selectors */
.component { } /* Good */
.page .section .component { } /* Too specific */

/* Minimize repaints and reflows */
.element {
    will-change: transform; /* Only when needed */
    transform: translateZ(0); /* Create compositing layer if needed */
}
```

## ♿ Accessibility Standards

### WCAG 2.1 Compliance
- **AA Level** compliance minimum
- **Color Contrast**: 4.5:1 for normal text, 3:1 for large text
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Reader Support**: Proper ARIA labels and roles
- **Focus Management**: Visible focus indicators

### Implementation Examples
```html
<!-- Skip links for keyboard users -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Proper heading hierarchy -->
<h1>Site Title</h1>
<h2>Section Title</h2>
<h3>Article Title</h3>

<!-- ARIA landmarks -->
<header role="banner">
<nav role="navigation" aria-label="Main navigation">
<main role="main" id="main-content">
<aside role="complementary" aria-label="Sidebar">
<footer role="contentinfo">

<!-- Form accessibility -->
<label for="search">Search articles</label>
<input type="search" id="search" aria-describedby="search-help">
<div id="search-help">Enter keywords to search for articles</div>

<!-- Button accessibility -->
<button aria-label="Close dialog" class="close-btn">
    <svg aria-hidden="true"><!-- icon --></svg>
</button>
```

## 🧪 Testing Standards

### Browser Testing Matrix
| Browser | Desktop | Mobile |
|---------|---------|--------|
| Chrome | ✅ Latest 2 versions | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions | ✅ Latest version |
| Safari | ✅ Latest 2 versions | ✅ Latest 2 versions |
| Edge | ✅ Latest 2 versions | ✅ Latest version |

### Testing Checklist
#### Functionality
- [ ] All navigation links work correctly
- [ ] Forms submit and validate properly
- [ ] Search functionality operates
- [ ] Mobile menu toggles correctly
- [ ] Interactive elements respond appropriately

#### Responsive Design
- [ ] Layout works at 320px width (smallest mobile)
- [ ] Content is readable on all screen sizes
- [ ] Images scale appropriately
- [ ] Touch targets are at least 44px
- [ ] Horizontal scrolling is not required

#### Performance
- [ ] Page loads within 3 seconds on 3G
- [ ] Images are optimized and compressed
- [ ] No JavaScript errors in console
- [ ] CSS and JS are minified for production
- [ ] Lighthouse performance score > 90

#### Accessibility
- [ ] Color contrast meets WCAG AA standards
- [ ] All images have meaningful alt text
- [ ] Keyboard navigation works throughout
- [ ] Screen reader testing passes
- [ ] Focus indicators are visible

## 📝 Code Comments

### HTML Comments
```html
<!-- Header Section: Site branding and main navigation -->
<header class="site-header">
    <!-- Logo and site title -->
    <div class="brand">
        <!-- Site logo and tagline -->
    </div>
    
    <!-- Main navigation menu -->
    <nav class="main-nav">
        <!-- Primary navigation links -->
    </nav>
</header>
```

### CSS Comments
```css
/* ==========================================================================
   Article Card Component
   
   Reusable component for displaying article previews throughout the site.
   Includes responsive behavior and hover states.
   ========================================================================== */

.article-card {
    /* Base card styling */
    background: var(--bg-primary);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    
    /* Hover enhancement */
    transition: transform var(--transition-normal);
}

.article-card:hover {
    transform: translateY(-2px); /* Subtle lift effect */
}
```

### JavaScript Comments
```javascript
/**
 * Initialize the mobile menu component
 * Handles menu toggle, keyboard navigation, and accessibility
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (!menuToggle || !mobileMenu) {
        console.warn('Mobile menu elements not found');
        return;
    }
    
    // Toggle menu visibility
    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        toggleMenu();
    });
}
```

## 🔍 Code Quality Tools

### Recommended Tools
- **HTML Validator**: W3C Markup Validator
- **CSS Linting**: stylelint with standard config
- **JavaScript Linting**: ESLint with standard config
- **Accessibility Testing**: axe-core, WAVE
- **Performance Testing**: Lighthouse, WebPageTest

### Example configurations:

#### .stylelintrc.json
```json
{
    "extends": ["stylelint-config-standard"],
    "rules": {
        "indentation": 4,
        "string-quotes": "single",
        "color-hex-case": "lower",
        "color-hex-length": "short",
        "selector-max-id": 0,
        "selector-max-universal": 0
    }
}
```

#### .eslintrc.json
```json
{
    "extends": ["eslint:recommended"],
    "env": {
        "browser": true,
        "es2020": true
    },
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "rules": {
        "no-console": "warn",
        "no-unused-vars": "error",
        "prefer-const": "error",
        "no-var": "error"
    }
}
```

---

Following these coding standards ensures that all templates in our collection maintain high quality, consistency, and professional standards. These guidelines help us build towards our goal of 1000+ exceptional news website templates.

For questions about these standards or suggestions for improvements, please open an issue in the repository. 🚀