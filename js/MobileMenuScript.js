// Мобильное меню
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.body;

menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

// Закрытие меню при клике на ссылку
const mobileLinks = document.querySelectorAll('.mobile-nav a, .phone-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.style.overflow = '';
    });
});

// Закрытие меню при клике вне его области
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target) && mobileMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.style.overflow = '';
    }
});