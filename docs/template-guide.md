# Template Creation Guide

This guide helps contributors create high-quality news website templates that meet our project standards and contribute to our goal of 1000+ templates.

## 🎯 Template Planning

### Before You Start
1. **Research the Category**: Study existing news sites in your chosen category
2. **Define the Target Audience**: Who will use this template?
3. **List Required Features**: What functionality does this news type need?
4. **Create a Wireframe**: Plan the layout structure
5. **Choose a Design Direction**: Modern, classic, minimal, etc.

### Template Categories & Ideas

#### General News Templates
- **Breaking News**: Alert-focused, real-time updates
- **Daily News**: Balanced layout for regular news consumption
- **World News**: International focus, multiple language considerations
- **Investigative**: Long-form article focused layouts

#### Specialized News Templates
- **Business News**: Market data integration, financial charts
- **Technology News**: Code syntax highlighting, product showcases
- **Sports News**: Score displays, team colors, match schedules
- **Entertainment**: Image galleries, video integration, celebrity focus
- **Health & Wellness**: Medical article layouts, wellness tips
- **Travel News**: Map integration, destination galleries
- **Food & Lifestyle**: Recipe cards, lifestyle photography
- **Political News**: Candidate profiles, voting information, polls

## 🏗️ Template Structure

### Essential Components

#### 1. Header Section
```html
<header class="site-header">
    <div class="container">
        <div class="logo-section">
            <h1 class="site-title">News Site Name</h1>
            <p class="tagline">Your trusted source for news</p>
        </div>
        <nav class="main-navigation">
            <!-- Navigation items -->
        </nav>
        <div class="header-extras">
            <!-- Search, social links, subscribe button -->
        </div>
    </div>
</header>
```

#### 2. Main Content Area
```html
<main class="main-content">
    <section class="featured-stories">
        <!-- Hero/featured content -->
    </section>
    
    <section class="news-grid">
        <!-- Article grid or list -->
    </section>
    
    <aside class="sidebar">
        <!-- Trending, ads, newsletter signup -->
    </aside>
</main>
```

#### 3. Footer Section
```html
<footer class="site-footer">
    <div class="container">
        <div class="footer-content">
            <!-- Links, copyright, contact info -->
        </div>
    </div>
</footer>
```

### Content Types to Include

#### Article Cards
- **Headline**: Clear, compelling title
- **Summary**: 1-2 sentence excerpt
- **Image**: High-quality thumbnail (16:9 or 4:3 ratio)
- **Metadata**: Date, author, category, reading time
- **Call-to-Action**: "Read More" button or link

#### Featured Articles
- **Hero Image**: Large, engaging visual
- **Headline**: Prominent, attention-grabbing
- **Lead Paragraph**: First paragraph or summary
- **Author Info**: Name, photo, credentials
- **Social Sharing**: Share buttons for major platforms

#### Category Sections
- **Section Headers**: Clear category identification
- **Multiple Articles**: 3-6 articles per section
- **"View More" Links**: Easy navigation to category pages

## 🎨 Design Principles

### Visual Hierarchy
1. **Primary Content**: Featured stories, breaking news
2. **Secondary Content**: Regular news articles
3. **Tertiary Content**: Sidebar items, footer links
4. **Supporting Elements**: Navigation, search, social links

### Typography Guidelines
```css
/* Headline Hierarchy */
.hero-headline { font-size: 2.5rem; font-weight: 700; }
.section-headline { font-size: 1.8rem; font-weight: 600; }
.article-headline { font-size: 1.2rem; font-weight: 600; }
.card-headline { font-size: 1rem; font-weight: 500; }

/* Body Text */
.lead-text { font-size: 1.1rem; line-height: 1.6; }
.body-text { font-size: 1rem; line-height: 1.5; }
.meta-text { font-size: 0.875rem; color: #666; }
```

### Color Schemes
Choose colors that convey trust and professionalism:

#### Professional Blue Theme
```css
:root {
    --primary-blue: #1a365d;
    --secondary-blue: #2c5282;
    --accent-blue: #3182ce;
    --light-blue: #e6fffa;
    --text-dark: #1a202c;
    --text-light: #4a5568;
    --background: #ffffff;
    --border: #e2e8f0;
}
```

#### Modern Gray Theme
```css
:root {
    --primary-gray: #2d3748;
    --secondary-gray: #4a5568;
    --accent-red: #e53e3e;
    --light-gray: #f7fafc;
    --text-dark: #1a202c;
    --text-light: #718096;
    --background: #ffffff;
    --border: #e2e8f0;
}
```

## 📱 Responsive Design Strategy

### Breakpoints
```css
/* Mobile First Approach */
.container {
    padding: 0 1rem;
    max-width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        padding: 0 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        padding: 0 3rem;
    }
}
```

### Layout Patterns

#### Mobile Layout (< 768px)
- Single column layout
- Stacked navigation (hamburger menu)
- Full-width images
- Larger touch targets (44px minimum)

#### Tablet Layout (768px - 1023px)
- Two-column layout
- Horizontal navigation
- Grid layouts for articles
- Balanced image sizes

#### Desktop Layout (1024px+)
- Multi-column layouts
- Sidebar content
- Complex grid systems
- Hover effects and interactions

## ⚡ Performance Optimization

### Image Optimization
```html
<!-- Use responsive images -->
<picture>
    <source srcset="image-small.webp" media="(max-width: 768px)" type="image/webp">
    <source srcset="image-large.webp" media="(min-width: 769px)" type="image/webp">
    <img src="image-fallback.jpg" alt="Descriptive alt text" loading="lazy">
</picture>
```

### CSS Optimization
- Use CSS Grid and Flexbox for layouts
- Minimize use of heavy frameworks
- Implement critical CSS inline for above-the-fold content
- Use CSS custom properties for consistent theming

### JavaScript Best Practices
- Load scripts at the end of the body
- Use defer attribute for non-critical scripts
- Implement lazy loading for images
- Minimize DOM manipulation

## 🔧 Interactive Features

### Essential JavaScript Features
```javascript
// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('active');
}

// Search functionality
function initSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    
    searchInput.addEventListener('input', function() {
        // Implement search logic
    });
}

// Lazy loading images
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}
```

### Advanced Features (Optional)
- Dark mode toggle
- Font size adjustment
- Social media sharing
- Newsletter signup
- Comment systems
- Related articles
- Reading progress indicators

## 🧪 Testing Checklist

### Functional Testing
- [ ] All navigation links work
- [ ] Search functionality operates correctly
- [ ] Forms submit properly
- [ ] Mobile menu toggles correctly
- [ ] Images load properly with fallbacks

### Cross-Browser Testing
- [ ] Chrome (latest version)
- [ ] Firefox (latest version)
- [ ] Safari (latest version)
- [ ] Edge (latest version)

### Device Testing
- [ ] iPhone (various sizes)
- [ ] Android phones
- [ ] iPad/tablets
- [ ] Desktop (various resolutions)

### Performance Testing
- [ ] Page loads in under 3 seconds
- [ ] Images are properly optimized
- [ ] No console errors
- [ ] Lighthouse score > 90 (performance)

### Accessibility Testing
- [ ] Proper heading hierarchy (h1, h2, h3)
- [ ] All images have alt text
- [ ] Color contrast meets WCAG standards
- [ ] Keyboard navigation works
- [ ] Screen reader friendly

## 📄 Documentation Requirements

### Template README.md
Each template should include:
```markdown
# Template Name

## Description
Brief description of the template and its intended use.

## Features
- List key features
- Responsive design
- Special functionality

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Setup
1. Download the template
2. Customize content and images
3. Update navigation links
4. Configure any required settings

## Customization
Instructions for common customizations:
- Changing colors
- Adding/removing sections
- Modifying layouts

## Credits
- Design: [Your Name]
- Images: [Source/License]
- Icons: [Source/License]
```

### Code Comments
```html
<!-- Header Section - Contains logo, navigation, and search -->
<header class="site-header">
    <!-- Logo and site branding -->
    <div class="logo-section">
        <!-- Site title and tagline -->
    </div>
    
    <!-- Main navigation menu -->
    <nav class="main-navigation">
        <!-- Navigation items -->
    </nav>
</header>
```

## 🎨 Design Resources

### Recommended Tools
- **Design**: Figma, Sketch, Adobe XD
- **Images**: Unsplash, Pexels, Pixabay
- **Icons**: Feather Icons, Heroicons, Font Awesome
- **Colors**: Coolors, Adobe Color
- **Typography**: Google Fonts, Adobe Fonts

### Inspiration Sources
- Award-winning news websites
- Modern newspaper designs
- Magazine layouts
- Contemporary web design trends
- Accessibility-focused designs

## 🚀 Launching Your Template

### Pre-Launch Checklist
- [ ] All code validated and tested
- [ ] Documentation completed
- [ ] Preview images created
- [ ] Performance optimized
- [ ] Accessibility verified

### Submission Process
1. Create a new branch
2. Add your template to `base-layouts/`
3. Update the main `index.html` preview page
4. Write comprehensive documentation
5. Submit pull request with detailed description

### Post-Launch
- Monitor for user feedback
- Address any reported issues
- Consider enhancements based on usage
- Update documentation as needed

---

**Need help?** Check out our existing templates for examples, or open an issue for specific questions. Happy template building! 🎉