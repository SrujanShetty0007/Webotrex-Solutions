// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileServicesBtn = document.getElementById('mobile-services-btn');
const mobileServicesMenu = document.getElementById('mobile-services-menu');
const header = document.querySelector('.header');

menuBtn.addEventListener('click', () =>
    mobileMenu.classList.toggle('hidden')
);

// Mobile Services Dropdown Toggle
mobileServicesBtn?.addEventListener('click', () => {
    mobileServicesMenu.classList.toggle('hidden');
    mobileServicesBtn.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileServicesMenu?.classList.add('hidden');
        mobileServicesBtn?.classList.remove('active');
    })
);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor =>
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document
            .querySelector(anchor.getAttribute('href'))
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    })
);

// Header scroll effect
window.addEventListener('scroll', () =>
    header.classList.toggle('scrolled', window.pageYOffset > 50)
);
