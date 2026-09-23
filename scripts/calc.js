// Базовая цена за услугу
const servicePrices = {
    tracking: 5000,    // отслеживание
    routes: 7000     // планирование маршрутов
};

// Множитель по виду транспорта
const transportMultiplier = {
    passenger: 1.0,
    truck: 1.3,
    bus: 1.2,
    special: 1.5
};

// Множитель по количеству машин
const countMultiplier = {
    small: 1.0,      // до 10
    medium: 1.4,      // 10-100
    large: 2.0,      // 100-500
    xlarge: 3.0       // 500+
};

// Находим элементы
const transportEl = document.getElementById('transport');
const countEl = document.getElementById('count');
const serviceEl = document.getElementById('service');
const calcBtn = document.getElementById('calcBtn');
const resultBox = document.getElementById('result');
const priceEl = document.getElementById('price');
const form = document.getElementById('calcForm');

// Кнопка "Рассчитать"
calcBtn.addEventListener('click', () => {
    const service = serviceEl.value;
    const transport = transportEl.value;
    const count = countEl.value;

    // Считаем цену
    let price = servicePrices[service];
    price *= transportMultiplier[transport];
    price *= countMultiplier[count];

    // Округляем до сотен
    price = Math.round(price / 100) * 100;

    // Форматируем с пробелами: 12500 → 12 500
    priceEl.textContent = price.toLocaleString('ru-RU');

    // Показываем блок с результатом
    resultBox.style.display = 'block';
});

// Кнопка "Подтвердить" — отправляем форму
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Заявка отправлена! Мы свяжемся с вами.');
    // Здесь позже можно отправить данные на сервер
});