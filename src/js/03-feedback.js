import throttle from 'lodash/throttle';

const FB_LOKALSTORAGE_KAY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');



// збереження даних форми у локальне сховище з затримкою 500
const saveFormLocalStorage = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(FB_LOKALSTORAGE_KAY, JSON.stringify(formState));
}, 500);

// введення  даних  в форму
form.addEventListener('input', saveFormLocalStorage);

//  відновлення даних форми з локального сховища
const restoreFormFromLocalStorage = () => {
  const savedState = localStorage.getItem(FB_LOKALSTORAGE_KAY);
  if (savedState) {
    const formState = JSON.parse(savedState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
};

// відновлення даних форми при завантаженні сторінки
restoreFormFromLocalStorage();


// сабміт, очищення
form.addEventListener('submit', sabmitClear);

function sabmitClear (event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const message = event.currentTarget.elements.message.value;

  if (email === '' || message === '') {
    alert('Всі поля повинні бути заповнені!');
    return;
  }
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);
  form.reset();
  localStorage.removeItem(FB_LOKALSTORAGE_KAY);
}

