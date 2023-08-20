import flatpickr from 'flatpickr';
require('flatpickr/dist/themes/dark.css');
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '300px',
});

const btnStartEl = document.querySelector('button[data-start]'); // Отримуємо елемент <button>
const startButtons = document.querySelectorAll('button[data-start]'); // Отримуємо посилання на всі елементи <button> для стилізації
const fields = document.querySelectorAll('.field'); // Отримуємо посилання на всі елементи за класом <field>
const inputElement = document.getElementById('datetime-picker'); // Отримуємо посилання на елемент <input> за його ідентифікатором
const labels = document.querySelectorAll('.label'); // Отри
const values = document.querySelectorAll('.value'); // Отри
const daysEl = document.querySelector('span[data-days]'); // Отри
const hoursEl = document.querySelector('span[data-hours]'); // Отри
const minutesEl = document.querySelector('span[data-minutes]'); // Отри
const secondsEl = document.querySelector('span[data-seconds]'); // Отри

const intervalTime = 1000;
let timeLine = null;
btnStartEl.disabled = true;
btnStartEl.style.backgroundColor = 'white';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    timeLine = selectedDates[0] - currentDate;
    if (timeLine <= 0) {
      Notiflix.Notify.failure(
        'Ви вибрали дату в минулому, будь-ласка, оберіть дату в майбутньому.',
        {
          position: 'center-center',
          width: '600px',
          timeout: '3500',
          fontSize: '17px',
        }
      );

      btnStartEl.disabled = true;
    } else {
      btnStartEl.disabled = false;
      btnStartEl.style.backgroundColor = '#4CAF50';
    }
  },
};

flatpickr('#datetime-picker', options);

btnStartEl.addEventListener('click', handlerStart);

function handlerStart() {
  btnStartEl.disabled = true;
  const intervalID = setInterval(() => {
    if (timeLine >= 0) {
      addDate(convertMs(timeLine));
      timeLine -= intervalTime;
    } else {
      clearInterval(intervalID);
      Notiflix.Notify.success('Акція закінчилась. Дякуємо за участь', {
        position: 'center-center',
        width: '400px',
        timeout: '15000',
        fontSize: '20px',
      });
    }
  }, intervalTime);
}

function addDate(date = {}) {
  const { days, hours, minutes, seconds } = date;
  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

// СТИЛІЗАЦІЯ КАУНТДАУНУ

startButtons.forEach(button => {
  button.style.padding = '10px 20px';
  button.style.backgroundColor = 'rgba(23,60,97,.06)';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';
  button.style.fontSize = '16px';

  // Додаємо анімацію при натисканні кнопки
  button.addEventListener('mousedown', () => {
    button.style.transform = 'scale(0.8)';
  });

  button.addEventListener('mouseup', () => {
    button.style.transform = 'scale(1)';
    button.style.backgroundColor = 'rgba(23,60,97,.06)';
  });
});

// Додаємо стилі до елементу <input>
inputElement.style.margin = '10px';
inputElement.style.padding = '10px';
inputElement.style.border = '1px solid #ccc';
inputElement.style.borderRadius = '5px';
inputElement.style.fontSize = '16px';

// Додаємо стилі до кожного елементу "field"
fields.forEach(field => {
  field.style.display = 'inline-block';
  field.style.margin = '10px';
  field.style.padding = '10px';
  field.style.border = '1px solid #ccc';
  field.style.borderRadius = '5px';
  field.style.textAlign = 'center';
  field.style.backgroundColor = 'rgba(23,60,97,.06)';
});

// Додаємо стилі до класу "value"
values.forEach(value => {
  value.style.fontSize = '24px';
});
secondsEl.style.color = 'red';

// Додаємо стилі до класу "label"
labels.forEach(label => {
  label.style.fontSize = '24px';
  label.style.color = 'rgba(23,61,97,.09)';
});
