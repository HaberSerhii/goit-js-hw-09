import Notiflix from 'notiflix';

//  Задали налаштування для модальних вікон.
Notiflix.Notify.init({
  clickToClose: true,
  position: 'center-center',
  width: '600px',
  timeout: '10000',
  fontSize: '17px',
});

// Отримуємо необхідні елементи.
const formEl = document.querySelector('.form');
const formInputs = document.querySelectorAll('input');
const formLabels = document.querySelectorAll('label');
const formButton = document.querySelectorAll('button');

formEl.addEventListener('submit', handlerForm);

function handlerForm(evt) {
  evt.preventDefault();
  let promDelay = Number(evt.target.elements.delay.value);
  const promStep = Number(evt.target.elements.step.value);
  const promAmount = Number(evt.target.elements.amount.value);
  for (let i = 1; i <= promAmount; i += 1) {
    createPromise(i, promDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Успішний тест №${position} на ${delay} мс`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Помилка у тесті №${position} на ${delay} мс`);
      });
    promDelay += promStep;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// СТИЛІ
// ---------------------------
// Стиль усієї форми.
formEl.style.backgroundColor = 'teal';
formEl.style.padding = '20px';
formEl.style.borderRadius = '8px';
formEl.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.1)';
formEl.style.display = 'flex';
formEl.style.flexDirection = 'row';
formEl.style.justifyContent = 'space-evenly';
formEl.style.alignItems = 'center';

// Стиль <Label>.
formLabels.forEach(label => {
  label.style.fontSize = '17px';
  label.style.color = 'white';
  label.style.margin = '10px 0px';
  label.style.display = 'flex';
  label.style.flexDirection = 'column';
  label.style.alignItems = 'center';
});

// Стиль <Input>.
formInputs.forEach(formInput => {
  formInput.style.margin = '10px';
  formInput.style.padding = '10px';
  formInput.style.border = '1px solid #ccc';
  formInput.style.borderRadius = '5px';
  formInput.style.fontSize = '16px';
});

// Стиль <Button>.
formButton.forEach(button => {
  button.style.padding = '10px 20px';
  button.style.backgroundColor = '#007bff';
  button.style.color = '#ffffff';
  button.style.border = 'none';
  button.style.borderRadius = '4px';
  button.style.cursor = 'pointer';
  button.style.marginTop = '20px';
  button.style.fontSize = '16px';
  button.style.transition = 'background-color 0.3s ease';

  // Додаємо анімацію при натисканні або ховері кнопки
  button.addEventListener('mousedown', () => {
    button.style.transform = 'scale(0.8)';
  });

  button.addEventListener('mouseup', () => {
    button.style.transform = 'scale(1)';
  });

  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#0056b3';
  });

  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#007bff';
  });
});
