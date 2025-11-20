// Плавный скролл для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const backToTop = document.querySelector('.back-to-top');
    const SCROLL_THRESHOLD = 50;
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;
        const scrollDelta = Math.abs(currentScroll - lastScroll);

        if (currentScroll <= SCROLL_THRESHOLD) {
            backToTop.classList.remove('active');
            return;
        }
        if (scrollDelta < SCROLL_THRESHOLD) {
            return;
        }
        if (currentScroll > lastScroll + SCROLL_THRESHOLD) {
            backToTop.classList.add('active');
        } else if (currentScroll < lastScroll - SCROLL_THRESHOLD) {
            backToTop.classList.remove('active');
        }
        lastScroll = currentScroll;
    });
});