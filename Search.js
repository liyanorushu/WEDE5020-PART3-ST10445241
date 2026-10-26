/**
 * search.js - Real-Time Dynamic Search & Filter
 * Filters products on Services / Catalog page.
 */

document.addEventListener('DOMContentLoaded', () => {
    initProductSearch();
});

function initProductSearch() {
    const productsSection = document.querySelector('.products-section');
    const galleryGrid = document.querySelector('.gallery-grid');

    if (!galleryGrid || !productsSection) return;

    // Dynamically insert Search Input Bar
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.style.cssText = 'margin-bottom: 25px; text-align: center;';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'productSearchInput';
    searchInput.placeholder = 'Search products (e.g. Tumbler, Stainless, Cold Cup)...';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 450px;
        padding: 12px 18px;
        font-size: 16px;
        border: 2px solid #ccc;
        border-radius: 25px;
        outline: none;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    `;

    searchContainer.appendChild(searchInput);
    productsSection.insertBefore(searchContainer, galleryGrid);

    // Event listener for filtering cards
    searchInput.addEventListener('keyup', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const cards = galleryGrid.querySelectorAll('.card');
        let count = 0;

        cards.forEach(card => {
            const title = card.querySelector('h4') ? card.querySelector('h4').textContent.toLowerCase() : '';
            const desc = card.querySelector('p') ? card.querySelector('p').textContent.toLowerCase() : '';

            if (title.includes(query) || desc.includes(query)) {
                card.style.display = 'block';
                count++;
            } else {
                card.style.display = 'none';
            }
        });

        // Toggle "No items found" message
        let noResultsMsg = document.getElementById('noResultsMsg');
        if (count === 0) {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('p');
                noResultsMsg.id = 'noResultsMsg';
                noResultsMsg.textContent = 'No matching products found.';
                noResultsMsg.style.cssText = 'text-align: center; font-weight: bold; color: #888; width: 100%; grid-column: 1/-1;';
                galleryGrid.appendChild(noResultsMsg);
            }
        } else if (noResultsMsg) {
            noResultsMsg.remove();
        }
    });
}