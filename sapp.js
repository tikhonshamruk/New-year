const carouselInner = document.querySelector('.carousel-inner');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
console.log(btnPrev)
let position = 0; // Текущая позиция карусели
const totalItems = 6; // Количество элементов в карусели

const updatePosition = () => {
    const width = window.innerWidth;
    const moveDistance = (2073 - (width - 82)) / totalItems; // Теперь мы делим на totalItems
    carouselInner.style.transform = `translateX(-${position * moveDistance}px)`;
};

btnNext.addEventListener('click', () => {
    if (position < totalItems - 1) { // Изменено, чтобы соответствовать количеству элементов
        position++;
        updatePosition();
    }
});

btnPrev.addEventListener('click', () => {
    if (position > 0) {
        position--;
        updatePosition();
    }
});

// Обновляем позицию при изменении размера окна
window.addEventListener('resize', updatePosition);


function countdown() {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYearTime = new Date(nextYear, 0, 1); // 1 января следующего года
    const totalSeconds = Math.floor((newYearTime - now) / 1000);

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);  // Исправлено
    const minutes = Math.floor((totalSeconds % 3600) / 60);          // Исправлено
    const seconds = totalSeconds % 60;

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // Запускаем таймер каждые 1000 миллисекунд (1 секунда)
    setTimeout(countdown, 1000);
}

// Запускаем первый запуск функции countdown
countdown();