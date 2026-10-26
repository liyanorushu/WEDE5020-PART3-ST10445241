/**
 * location.js - Interactive Location Services
 * Handles location information, operating status (Open/Closed), and user geolocation lookup.
 */

document.addEventListener('DOMContentLoaded', () => {
    initBusinessHoursStatus();
    initGeolocationLookup();
});

/**
 * Checks current time and updates business open/closed badge dynamically.
 */
function initBusinessHoursStatus() {
    const infoCard = document.querySelector('.info-card .card-content');
    if (!infoCard) return;

    const statusBadge = document.createElement('p');
    statusBadge.id = 'business-status';
    statusBadge.style.fontWeight = 'bold';

    const now = new Date();
    const day = now.getDay(); // 0 = Sun, 1-5 = Mon-Fri, 6 = Sat
    const hour = now.getHours();

    // Business Hours: Mon-Fri 08:00 - 17:00
    const isOpen = (day >= 1 && day <= 5) && (hour >= 8 && hour < 17);

    if (isOpen) {
        statusBadge.innerHTML = '<strong>Status:</strong> <span style="color: green;">🟢 Open Now</span> (Closes at 17:00)';
    } else {
        statusBadge.innerHTML = '<strong>Status:</strong> <span style="color: red;">🔴 Closed Now</span> (Opens Mon-Fri at 08:00)';
    }

    infoCard.appendChild(statusBadge);
}

/**
 * Provides user with optional location check to verify delivery availability.
 */
function initGeolocationLookup() {
    const mapCard = document.querySelector('.map-card');
    if (!mapCard) return;

    const geoBtn = document.createElement('button');
    geoBtn.textContent = '📍 Check Delivery Distance';
    geoBtn.className = 'btn-submit';
    geoBtn.style.cssText = 'margin-top: 15px; width: auto; font-size: 14px; padding: 8px 15px;';

    const resultMsg = document.createElement('p');
    resultMsg.style.cssText = 'font-size: 14px; margin-top: 10px; font-weight: 500;';

    mapCard.appendChild(geoBtn);
    mapCard.appendChild(resultMsg);

    geoBtn.addEventListener('click', () => {
        if (!navigator.geolocation) {
            resultMsg.textContent = 'Geolocation is not supported by your browser.';
            return;
        }

        resultMsg.textContent = 'Locating...';

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                // Motherwell Gqeberha Approx Coords: -33.8200, 25.5600
                const distance = calculateDistance(lat, lon, -33.8200, 25.5600);

                resultMsg.innerHTML = `You are approx. <strong>${distance.toFixed(1)} km</strong> from our Motherwell workshop. Standard South Africa courier rates apply!`;
            },
            () => {
                resultMsg.textContent = 'Unable to retrieve location. Please check browser permissions.';
            }
        );
    });
}

/**
 * Haversine formula to compute distance between two coordinates in km
 */
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}