// === PEDRO & ANDI — JS v2 ===

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    const animatable = document.querySelectorAll(
        '.person-card, .bebe-card, .mundo-card, .tl-item, .frase, .intro-text, .intro-photo, .viaje-hero, .viaje-card, .lugar-card, .bebes-extra'
    );
    animatable.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = `opacity 0.7s ease ${i % 6 * 0.08}s, transform 0.7s ease ${i % 6 * 0.08}s`;
        observer.observe(el);
    });

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightbox) {
        document.querySelectorAll('.viaje-card img, .bebe-extra-img, .bebe-photo img, .intro-photo img, .viaje-hero img').forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
            });
        });
        lightbox.addEventListener('click', () => {
            lightbox.classList.remove('active');
            lightboxImg.src = '';
        });
    }
});

const style = document.createElement('style');
style.textContent = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);
