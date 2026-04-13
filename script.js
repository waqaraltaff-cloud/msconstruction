const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('.faq-item').forEach((item) => {
  const button = item.querySelector('.faq-question');
  if (!button) return;
  button.addEventListener('click', () => {
    const open = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach((openItem) => openItem.classList.remove('open'));
    if (!open) item.classList.add('open');
  });
});

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
if (form && status) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const message = String(data.get('message') || '').trim();
    if (!name || !phone || !message) {
      status.textContent = 'Please fill in all required fields.';
      return;
    }
    status.textContent = 'Thank you! We\'ll get back to you within 24 hours.';
    form.reset();
  });
}

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
