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
    // Настройки для Intersection Observer
    const options = {
        root: null, // Используем viewport как область отслеживания
        rootMargin: '0px', // Без отступов
        threshold: 0.1 // Срабатывает, когда 10% элемента видно
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

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const backToTop = document.querySelector('.back-to-top');
    const SCROLL_THRESHOLD = 50;
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;
        const scrollDelta = Math.abs(currentScroll - lastScroll);

        if (currentScroll <= 0) {
            // В самом верху страницы - показываем шапку
            header.classList.remove('hide');
            header.classList.add('show');
            backToTop.classList.remove('active');
            return;
        }
        if (scrollDelta < SCROLL_THRESHOLD) {
            return;
        }
        if (currentScroll > lastScroll && !header.classList.contains('hide')) {
            // Скролл вниз - скрываем шапку
            header.classList.remove('show');
            header.classList.add('hide');
            backToTop.classList.remove('active');
        } else if (currentScroll < lastScroll && header.classList.contains('hide')) {
            // Скролл вверх - показываем шапку
            header.classList.remove('hide');
            header.classList.add('show');
            backToTop.classList.add('active');
        }
        lastScroll = currentScroll;
    });
});