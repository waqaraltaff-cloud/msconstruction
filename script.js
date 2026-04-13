// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// FAQ Accordion - Fixed version
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    const button = item.querySelector('.faq-question');
    if (!button) return;

    button.addEventListener('click', () => {
        // Close all other FAQs
        faqItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove('open');
            }
        });
        // Toggle current FAQ
        item.classList.toggle('open');
    });
});

// Contact form handler
const form = document.getElementById('contact-form');
const statusDiv = document.getElementById('form-status');

if (form && statusDiv) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name')?.trim();
        const phone = formData.get('phone')?.trim();
        const message = formData.get('message')?.trim();

        if (!name || !phone || !message) {
            statusDiv.textContent = 'Please fill in all required fields.';
            return;
        }

        statusDiv.textContent = 'Thank you! We will get back to you within 24 hours.';
        form.reset();
    });
}

// Set current year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
