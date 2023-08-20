// Отримання рандомного hex-кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const bodyProperties = document.querySelector('body');
stopButton.disabled = true; // відключаємо кнопку Стоп з підгрузки сторінки, так як вона зразу активна.

let timerId = null;

// Стилі кнопок
bodyProperties.style.display = 'flex';
bodyProperties.style.flexDirection = 'column';
bodyProperties.style.alignItems = 'center';
bodyProperties.style.gap = '20px';
startButton.style.padding = '40px';
startButton.style.textTransform = 'uppercase';
startButton.style.width = '150px';
startButton.style.fontSize = '20px';
stopButton.style.padding = '40px';
stopButton.style.textTransform = 'uppercase';
stopButton.style.width = '150px';
stopButton.style.fontSize = '20px';

// функція для отримання рандомного кольору в боді
function changeBackgroundColor() {
  const newColor = getRandomHexColor();
  bodyProperties.style.backgroundColor = newColor;
}

startButton.addEventListener('click', () => {
  stopButton.disabled = false; // вмикаємо кнопку Стоп
  startButton.disabled = true; // відключаємо кнопку Старт
  timerId = setInterval(() => {
    changeBackgroundColor();
  }, 1000);
  console.log(`Почав таймер у ID: ${timerId}`);
});

stopButton.addEventListener('click', () => {
  startButton.disabled = false; // вмикаємо кнопку Старт
  stopButton.disabled = true; // відключаємо кнопку Стоп
  clearInterval(timerId);
  console.log(`Зупинив таймер у ID: ${timerId}`);
});
