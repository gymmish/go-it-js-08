import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.js-feedback-form'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

const STORAGE_KEY = 'feedback-form-state';

function onFormSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput() {
  const formData = {
    message: `${refs.form.elements.message.value}`,
    email: `${refs.form.elements.email.value}`,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function saveForm() {
  const sevedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (sevedData !== null) {
    refs.form.elements.email.value = sevedData.email;
    refs.form.elements.message.value = sevedData.message;
  }
}
saveForm();
