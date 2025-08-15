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

document.addEventListener('DOMContentLoaded', function () {
    // Настройки для Intersection Observer
    const options = {
        root: null, // Используем viewport как область отслеживания
        rootMargin: '0px', // Без отступов
        threshold: 1 // Срабатывает, когда 10% элемента видно
    };

    // Создаем observer
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target); // Прекращаем наблюдение после анимации
            }
        });
    }, options);

    // Находим все элементы для анимации
    const elements = document.querySelectorAll('.animate-on-scroll');

    // Начинаем наблюдение за каждым элементом
    elements.forEach(element => {
        observer.observe(element);
    });
});