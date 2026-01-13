// Mobile Sidebar Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const mobileServicesBtn = document.getElementById('mobile-services-btn');
const mobileServicesMenu = document.getElementById('mobile-services-menu');
const header = document.querySelector('.header');

// Open sidebar
menuBtn?.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    sidebarOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close sidebar
function closeSidebar() {
    mobileMenu.classList.add('hidden');
    sidebarOverlay?.classList.remove('active');
    document.body.style.overflow = '';
    mobileServicesMenu?.classList.add('hidden');
    mobileServicesBtn?.classList.remove('active');
}

closeMenuBtn?.addEventListener('click', closeSidebar);
sidebarOverlay?.addEventListener('click', closeSidebar);

// Mobile Services Dropdown Toggle
mobileServicesBtn?.addEventListener('click', () => {
    mobileServicesMenu.classList.toggle('hidden');
    mobileServicesBtn.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileMenu?.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', closeSidebar)
);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor =>
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    })
);

// Header scroll effect
window.addEventListener('scroll', () =>
    header?.classList.toggle('scrolled', window.pageYOffset > 50)
);

// Close sidebar on escape key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !mobileMenu?.classList.contains('hidden')) {
        closeSidebar();
    }
});
