document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {
        name: String(formData.get('name') || ''), // Явное преобразование в string
        phone: String(formData.get('phone') || ''),
        message: String(formData.get('message') || '')
    };

    const text = `📞 Новая заявка с сайта:%0A%0A👤 Имя: ${encodeURIComponent(data.name)}%0A📱 Телефон: ${encodeURIComponent(data.phone)}%0A📝 Сообщение: ${encodeURIComponent(data.message)}`;

    const telegramUsername = '@Medea_3';
    const telegramUrl = `https://t.me/${telegramUsername}?text=${text}`;

    window.open(telegramUrl, '_blank');
});