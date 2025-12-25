// Notification Toast System
const icons = {
    success: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
  </svg>`,
    error: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
  </svg>`,
    info: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>`
};

function showNotification(title, message, type = 'success', duration = 5000) {
    document.querySelector('.notification-toast')?.remove();

    const toast = document.createElement('div');
    toast.className = `notification-toast ${type}`;
    toast.innerHTML = `
    <div class="notification-content">
      <div class="notification-icon">${icons[type] || icons.info}</div>
      <div class="notification-text">
        <div class="notification-title">${title}</div>
        <div class="notification-message">${message}</div>
      </div>
    </div>
    <button class="notification-close" aria-label="Close">
      ${icons.error}
    </button>
  `;

    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));

    const close = () => toast.classList.remove('show') || setTimeout(() => toast.remove(), 400);
    toast.querySelector('.notification-close').onclick = close;
    duration && setTimeout(close, duration);
}

// Contact form handler
document.addEventListener('submit', e => {
    const form = e.target.closest('.contact-form');
    if (!form) return;

    e.preventDefault();
    showNotification('Message sent!', "We'll get back to you as soon as possible.");
    form.reset();
});
