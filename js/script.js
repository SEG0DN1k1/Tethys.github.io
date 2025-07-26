// Плавный скролл для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Кнопка "Наверх" (новый код)
document.addEventListener('DOMContentLoaded', function () {
    const backToTop = document.querySelector('.back-to-top');
    const headerSection = document.querySelector('.header');

    if (backToTop && headerSection) {
        function checkScroll() {
            // Получаем позицию нижней границы видео-секции
            const headerBottom = headerSection.offsetTop + headerSection.offsetHeight;

            // Если прокрутили ниже видео - показываем кнопку
            if (window.scrollY > headerBottom) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        }

        // Проверяем при загрузке
        checkScroll();

        // Проверяем при прокрутке
        window.addEventListener('scroll', checkScroll);
    }
});