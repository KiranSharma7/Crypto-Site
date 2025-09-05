# Contributing to News Templates Collection

Thank you for your interest in contributing to our news templates project! This document provides guidelines for contributing new templates, improving existing ones, and maintaining code quality.

## 🎯 Contribution Goals

We're building towards **1000+ professional news website templates**. Every contribution helps us reach this ambitious goal while maintaining high quality standards.

## 🚀 Quick Start for Contributors

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create** a new branch for your contribution
4. **Add** or improve templates following our guidelines
5. **Test** your templates across devices and browsers
6. **Submit** a pull request with detailed descriptions

## 📝 Types of Contributions

### 1. New Base Templates
- Add completely new template designs to `base-layouts/`
- Follow naming convention: `Site X` (where X is the next sequential number)
- Each template should represent a unique style or category

### 2. Template Improvements
- Enhance existing templates with better responsiveness
- Fix bugs or accessibility issues
- Optimize performance and loading times
- Add new features while maintaining template integrity

### 3. Documentation
- Improve template descriptions
- Add usage examples
- Create tutorials or guides
- Translate documentation

### 4. Assets and Resources
- Contribute shared images, icons, or fonts to the `assets/` folder
- Optimize existing assets for better performance
- Add placeholder content that's more realistic

## 📁 Template Structure Guidelines

### Required Files for Each Template
```
Site X/
├── index.html           # Main template file
├── css/
│   ├── style.css       # Main stylesheet
│   └── responsive.css  # Media queries (optional)
├── js/
│   └── script.js       # JavaScript functionality (optional)
├── images/             # Template-specific images
├── README.md           # Template-specific documentation
└── preview.png         # Screenshot for preview (1200x800px)
```

### Template Categories
- **General News**: World news, breaking news, daily news
- **Business**: Financial, markets, economy, corporate
- **Technology**: Tech news, gadgets, software, AI
- **Sports**: Games, scores, teams, athlete profiles
- **Entertainment**: Movies, music, celebrity, TV
- **Lifestyle**: Health, travel, food, fashion, wellness
- **Local News**: Community, weather, events, government
- **Specialized**: Politics, science, education, environment

## 🎨 Design Standards

### Visual Requirements
- **Professional Appearance**: Clean, modern, credible design
- **Responsive Design**: Must work perfectly on mobile, tablet, and desktop
- **Loading Speed**: Optimized images and minimal external dependencies
- **Cross-browser Compatibility**: Works in Chrome, Firefox, Safari, Edge
- **Accessibility**: Proper contrast ratios, semantic HTML, alt tags

### Layout Guidelines
- **Header**: Logo, navigation, search functionality
- **Main Content**: Article listings, featured stories, sidebar
- **Footer**: Links, copyright, contact information
- **Typography**: Readable fonts, proper hierarchy, good line spacing
- **Color Scheme**: Professional colors appropriate for news

## 💻 Technical Standards

### HTML Requirements
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Template description">
    <title>Template Name - News Site</title>
    <!-- Additional meta tags as needed -->
</head>
```

### CSS Standards
- Use **semantic class names** (e.g., `.article-header`, `.news-grid`)
- **Mobile-first** responsive design approach
- **CSS Grid** and **Flexbox** for layouts
- **CSS Custom Properties** for consistent theming
- **BEM methodology** for class naming when possible

### JavaScript Guidelines
- **Vanilla JavaScript** preferred (no frameworks unless absolutely necessary)
- **ES6+** syntax where appropriate
- **Comments** for complex functionality
- **Performance-focused** code (no memory leaks)

### Performance Standards
- **Images**: Optimized, appropriate formats (WebP when possible)
- **CSS**: Minified for production, organized for development
- **JavaScript**: Only load what's necessary
- **File Sizes**: Keep individual files under reasonable limits

## 🧪 Testing Checklist

### Before Submitting
- [ ] Template loads correctly in all major browsers
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] All images have appropriate alt text
- [ ] No console errors or warnings
- [ ] Navigation links work properly
- [ ] Forms function correctly (if applicable)
- [ ] Typography is readable and accessible
- [ ] Color contrast meets accessibility standards

### Browser Testing
Test your templates in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Device Testing
- Mobile: 375px width minimum
- Tablet: 768px typical
- Desktop: 1200px and wider

## 📋 Pull Request Guidelines

### PR Title Format
```
[Category] Template Name - Brief Description
```
Examples:
- `[Business] Financial Times Style - Professional business news layout`
- `[Fix] Site 3 - Improve mobile navigation responsiveness`
- `[Enhancement] Site 7 - Add dark mode toggle`

### PR Description Template
```markdown
## Description
Brief description of changes made.

## Template Category
- [ ] General News
- [ ] Business
- [ ] Technology
- [ ] Sports
- [ ] Entertainment
- [ ] Lifestyle
- [ ] Local News
- [ ] Specialized

## Changes Made
- List key changes
- Include any new features
- Note any breaking changes

## Testing
- [ ] Tested on mobile devices
- [ ] Tested on desktop browsers
- [ ] Verified accessibility compliance
- [ ] No console errors

## Screenshots
[Include before/after screenshots if applicable]

## Additional Notes
Any additional context or notes for reviewers.
```

## 🎨 Asset Guidelines

### Images
- **Format**: Use WebP when possible, fallback to JPG/PNG
- **Size**: Optimize for web (typically under 200KB per image)
- **Dimensions**: Provide multiple sizes when needed
- **Alt Text**: Always include descriptive alt text
- **Stock Photos**: Only use royalty-free or properly licensed images

### Icons
- **Format**: SVG preferred for scalability
- **Consistency**: Use similar style/weight across the template
- **Size**: Optimize SVG code (remove unnecessary elements)

### Fonts
- **Web Fonts**: Use Google Fonts or other free web fonts
- **Performance**: Limit to 2-3 font families maximum
- **Fallbacks**: Always provide system font fallbacks

## 🔍 Code Review Process

### Review Criteria
1. **Code Quality**: Clean, readable, well-organized
2. **Design Quality**: Professional, modern, appropriate for news
3. **Responsiveness**: Works well across all device sizes
4. **Performance**: Fast loading, optimized assets
5. **Accessibility**: Meets basic accessibility standards
6. **Documentation**: Clear README and comments

### Review Timeline
- **Initial Review**: Within 48 hours
- **Feedback Response**: Contributors have 7 days to respond
- **Final Review**: Within 24 hours of updates

## 📈 Recognition

### Contributor Credits
- Contributors are credited in template README files
- Significant contributions are recognized in main project README
- Top contributors may be invited as maintainers

### Template Attribution
```html
<!-- Template created by [Your Name] for News Templates Collection -->
<!-- GitHub: [Your GitHub Profile] -->
<!-- Date: [Creation Date] -->
```

## ❓ Getting Help

### Where to Ask Questions
- **General Questions**: Open an issue with "Question" label
- **Technical Issues**: Create detailed bug reports
- **Design Feedback**: Use "Design Review" issue template
- **Feature Requests**: Use "Enhancement" issue template

### Community Guidelines
- **Be respectful** and constructive in all interactions
- **Provide context** when asking questions or reporting issues
- **Search existing issues** before creating new ones
- **Follow up** on your contributions and respond to feedback

## 🚫 What Not to Contribute

- Templates with copyrighted designs or content
- Code that requires paid libraries or services
- Templates with poor accessibility
- Low-quality or incomplete templates
- Content promoting harmful or illegal activities

## 📅 Release Cycle

- **Monthly releases** with new templates and improvements
- **Hotfixes** for critical bugs as needed
- **Major version updates** for significant changes or milestones

---

**Questions?** Feel free to open an issue or reach out to the maintainers. We appreciate your contributions to building the world's largest collection of news website templates!

**Happy Coding!** 🚀