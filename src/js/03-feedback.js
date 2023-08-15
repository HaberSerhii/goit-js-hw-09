import throttle from 'lodash.throttle';
console.log(throttle); // Перевірка підключення

const userEmail = document.querySelector('input[name="email"]');
const userMessage = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');

const saveFormData = () => {
  const formData = {
    email: userEmail.value,
    message: userMessage.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const fillFormFromStorage = () => {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const formData = JSON.parse(storedData);
    userEmail.value = formData.email;
    userMessage.value = formData.message;
  }
};

const clearAll = () => {
  console.log('Данні з форми:', {
    email: userEmail.value,
    message: userMessage.value,
  });
  localStorage.removeItem('feedback-form-state');
  userEmail.value = '';
  userMessage.value = '';
};

userEmail.addEventListener('input', throttle(saveFormData, 500));
userMessage.addEventListener('input', throttle(saveFormData, 500));
window.addEventListener('load', fillFormFromStorage);
form.addEventListener('submit', event => {
  event.preventDefault();
  clearAll();
});
