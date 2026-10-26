/**
 * main.js - General Website Functionality
 * Handles UI enhancements, mobile navigation, active links, and dynamic footer year.
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    setCurrentYear();
    initScrollToTop();
});

/**
 * Highlights the active navigation link based on current page URL
 * and toggles mobile menu if applicable.
 */
function initNavigation() {
    const currentPath = window.location.pathname.toLowerCase();
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').toLowerCase();
        // Match home or inner pages
        if (currentPath.endsWith(linkPath) || (currentPath === '/' && linkPath.includes('index.html'))) {
            link.classList.add('active');
        }
    });
}

/**
 * Automatically updates copyright year in the footer.
 */
function setCurrentYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

/**
 * Adds smooth scroll-to-top button functionality.
 */
function initScrollToTop() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTop';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.setAttribute('title', 'Go to top');
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 25px;
        right: 25px;
        display: none;
        background-color: #000;
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 45px;
        height: 45px;
        font-size: 20px;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0,0,0,0.2);
        z-index: 1000;
        transition: opacity 0.3s;
    `;

    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}