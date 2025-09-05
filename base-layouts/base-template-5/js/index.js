// Simple pagination functionality
document.addEventListener('DOMContentLoaded', function() {
    const newsGrid = document.querySelector('#analysis-opinion .news-grid');
    const articles = Array.from(newsGrid.querySelectorAll('.news-card'));
    const itemsPerPage = 2;
    const totalPages = Math.ceil(articles.length / itemsPerPage);
    let currentPage = 1;

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageNumbers = document.querySelectorAll('.page-number');

    function showPage(page) {
        // Hide all articles
        articles.forEach(article => article.style.display = 'none');
        
        // Show articles for current page
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        articles.slice(startIndex, endIndex).forEach(article => {
            article.style.display = 'block';
        });
        
        // Update pagination controls
        prevBtn.disabled = page === 1;
        nextBtn.disabled = page === totalPages;
        
        // Update page numbers
        pageNumbers.forEach(pageNum => {
            const pageValue = parseInt(pageNum.getAttribute('data-page'));
            pageNum.classList.toggle('active', pageValue === page);
        });
        
        currentPage = page;
    }

    // Event listeners
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
        }
    });

    pageNumbers.forEach(pageNum => {
        pageNum.addEventListener('click', () => {
            const page = parseInt(pageNum.getAttribute('data-page'));
            showPage(page);
        });
    });

    // Initialize pagination
    showPage(1);

    // Add ID to Analysis & Opinion section for targeting
    const analysisSection = document.querySelector('.container h2:last-of-type').parentNode;
    analysisSection.id = 'analysis-opinion';
});