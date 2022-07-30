import throttle from 'lodash.throttle';

const info = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    email: document.querySelector('.feedback-form input[type=email]'),
}
const input = info.form.elements;
const STORAGE_KEY = 'feedback-form-state';
const savedData = localStorage.getItem(STORAGE_KEY);
const inputData = {};

info.form.addEventListener('submit', onFormSubmit);
info.email.addEventListener('input', throttle(onInput, 500));
info.textarea.addEventListener('input', throttle(onInput, 500));

if (savedData) {
    const inputData = JSON.parse(savedData);
    info.email.value = inputData.email;
    info.textarea.value = inputData.message;
}

function onInput(event) {
    inputData.email = input.email.value;
    inputData.message = input.message.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputData));
}
function onFormSubmit(event) {
    event.preventDefault();
    inputData.email = input.email.value;
    inputData.message = input.message.value;
    if (input.email.value === '' || input.message.value === '') {
        alert('Please fill up empty fields');
    } else {
    console.log(inputData);
    info.form.reset();
    localStorage.removeItem(STORAGE_KEY);
    }
}

