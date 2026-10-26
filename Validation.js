/**
 * validation.js - Client-Side Form Validation
 * Handles validation for both Enquiry and Contact Us forms.
 */

document.addEventListener('DOMContentLoaded', () => {
    const enquiryForm = document.querySelector('.enquiry-form');
    const contactForm = document.querySelector('.contact-form');

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', validateEnquiryForm);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', validateContactForm);
    }
});

/**
 * Validates the Product Customization Enquiry Form
 */
function validateEnquiryForm(event) {
    let isValid = true;
    const errors = [];

    const name = document.getElementById('customer-name');
    const email = document.getElementById('customer-email');
    const phone = document.getElementById('phone-number');
    const quantity = document.getElementById('quantity');

    // Name Validation
    if (!name || name.value.trim().length < 2) {
        isValid = false;
        errors.push("Please enter a valid full name (at least 2 characters).");
        highlightField(name, true);
    } else {
        highlightField(name, false);
    }

    // Email Validation
    if (!email || !isValidEmail(email.value.trim())) {
        isValid = false;
        errors.push("Please enter a valid email address.");
        highlightField(email, true);
    } else {
        highlightField(email, false);
    }

    // SA Phone Validation (Optional check if filled)
    if (phone && phone.value.trim() !== '') {
        const phoneRegex = /^(\+27|0)[6-8][0-9]{8}$/;
        if (!phoneRegex.test(phone.value.trim().replace(/\s+/g, ''))) {
            isValid = false;
            errors.push("Please enter a valid South African phone number (e.g., 0821234567).");
            highlightField(phone, true);
        } else {
            highlightField(phone, false);
        }
    }

    // Quantity Validation
    if (quantity && (parseInt(quantity.value) < 1 || isNaN(quantity.value))) {
        isValid = false;
        errors.push("Quantity must be at least 1.");
        highlightField(quantity, true);
    } else {
        highlightField(quantity, false);
    }

    if (!isValid) {
        event.preventDefault();
        alert("Form Errors:\n\n- " + errors.join("\n- "));
    } else {
        event.preventDefault(); // Prevent full page reload for demo
        alert("Thank you! Your custom product enquiry has been submitted successfully.");
        event.target.reset();
    }
}

/**
 * Validates the Contact Us Form
 */
function validateContactForm(event) {
    let isValid = true;
    const errors = [];

    const name = document.getElementById('contact-name');
    const email = document.getElementById('contact-email');
    const message = document.getElementById('message');

    if (!name || name.value.trim().length < 2) {
        isValid = false;
        errors.push("Please enter your name.");
        highlightField(name, true);
    } else {
        highlightField(name, false);
    }

    if (!email || !isValidEmail(email.value.trim())) {
        isValid = false;
        errors.push("Please enter a valid email address.");
        highlightField(email, true);
    } else {
        highlightField(email, false);
    }

    if (!message || message.value.trim().length < 10) {
        isValid = false;
        errors.push("Message must be at least 10 characters long.");
        highlightField(message, true);
    } else {
        highlightField(message, false);
    }

    if (!isValid) {
        event.preventDefault();
        alert("Form Errors:\n\n- " + errors.join("\n- "));
    } else {
        event.preventDefault();
        alert("Message sent! Our support team will respond shortly.");
        event.target.reset();
    }
}

/**
 * Helper: Email regex validation
 */
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Helper: Highlights border red on error
 */
function highlightField(element, isError) {
    if (!element) return;
    if (isError) {
        element.style.borderColor = '#e74c3c';
    } else {
        element.style.borderColor = '#2ecc71';
    }
}