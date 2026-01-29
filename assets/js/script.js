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
    link.addEventListener('click', (e) => {
        // Only close if it's not a dropdown button
        if (!link.classList.contains('mobile-dropdown-btn')) {
            closeSidebar();
        }
    })
);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#!') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        header?.classList.add('scrolled');
    } else {
        header?.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Close sidebar on escape key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !mobileMenu?.classList.contains('hidden')) {
        closeSidebar();
    }
});

// Prevent body scroll when mobile menu is open
if (mobileMenu) {
    const preventScroll = (e) => {
        if (!mobileMenu.classList.contains('hidden')) {
            e.preventDefault();
        }
    };

    document.addEventListener('touchmove', preventScroll, { passive: false });
}

// Initialize AOS (Animate On Scroll) if available
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
}
