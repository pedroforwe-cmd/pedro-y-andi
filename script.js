// === PEDRO & ANDI — JS ===

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    const animatable = document.querySelectorAll(
        '.person-card, .bebe-card, .mundo-card, .tl-item, .frase, .intro-text, .intro-quote'
    );
    animatable.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = `opacity 0.7s ease ${i % 6 * 0.08}s, transform 0.7s ease ${i % 6 * 0.08}s`;
        observer.observe(el);
    });
});

const style = document.createElement('style');
style.textContent = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);
