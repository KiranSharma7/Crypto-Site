// Article page specific JavaScript

// Social Share Functionality
document.addEventListener('DOMContentLoaded', function() {
    const shareButtons = document.querySelectorAll('.share-btn');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const currentUrl = window.location.href;
            const articleTitle = document.querySelector('.article-title')?.textContent || document.title;
            const articleImage = document.querySelector('.article-featured-image')?.style.backgroundImage;
            
            if (this.classList.contains('facebook')) {
                const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
                window.open(shareUrl, '_blank', 'width=600,height=400');
            } 
            else if (this.classList.contains('twitter')) {
                const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
            else if (this.classList.contains('linkedin')) {
                const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
            else if (this.classList.contains('whatsapp')) {
                const shareUrl = `https://wa.me/?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;
                window.open(shareUrl, '_blank');
            }
            else if (this.classList.contains('pinterest')) {
                const shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&description=${encodeURIComponent(articleTitle)}`;
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
            else if (this.classList.contains('email')) {
                const mailtoUrl = `mailto:?subject=${encodeURIComponent(articleTitle)}&body=${encodeURIComponent('Check out this article: ' + currentUrl)}`;
                window.location.href = mailtoUrl;
            }
            else if (this.classList.contains('print')) {
                window.print();
            }
        });
    });
});

// Reading Progress Bar
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(135deg, #00C6FF 0%, #0072FF 100%);
        z-index: 1000;
        transition: width 0.3s ease;
        width: 0%;
    `;
    document.body.appendChild(progressBar);

    const articleContent = document.querySelector('.article-text');
    if (articleContent) {
        window.addEventListener('scroll', function() {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / documentHeight) * 100;
            
            progressBar.style.width = Math.min(progress, 100) + '%';
        });
    }
});

// Copy URL to clipboard functionality
document.addEventListener('DOMContentLoaded', function() {
    const copyButtons = document.querySelectorAll('[data-action="copy-url"]');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            navigator.clipboard.writeText(window.location.href).then(function() {
                // Show success message
                const originalText = button.textContent;
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = originalText;
                }, 2000);
            });
        });
    });
});

// Auto-scroll to comments section if hash is present
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash === '#comments') {
        const commentsSection = document.getElementById('comments');
        if (commentsSection) {
            setTimeout(() => {
                commentsSection.scrollIntoView({ behavior: 'smooth' });
            }, 500);
        }
    }
});

// Table of Contents Generator (if article has headings)
document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('.article-text h2, .article-text h3');
    
    if (headings.length > 2) {
        const tocContainer = document.createElement('div');
        tocContainer.className = 'table-of-contents';
        tocContainer.innerHTML = '<h3>Table of Contents</h3>';
        
        const tocList = document.createElement('ul');
        
        headings.forEach((heading, index) => {
            // Add ID to heading if it doesn't have one
            if (!heading.id) {
                heading.id = `heading-${index}`;
            }
            
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#${heading.id}`;
            link.textContent = heading.textContent;
            link.className = heading.tagName.toLowerCase();
            
            listItem.appendChild(link);
            tocList.appendChild(listItem);
        });
        
        tocContainer.appendChild(tocList);
        
        // Insert TOC after the first paragraph
        const firstParagraph = document.querySelector('.article-text p');
        if (firstParagraph) {
            firstParagraph.insertAdjacentElement('afterend', tocContainer);
        }
    }
});