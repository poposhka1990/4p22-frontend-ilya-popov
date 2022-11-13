'use script'

const formEl = document.getElementById('registrationForm');
const emailEl = formEl.elements.email;
const emailErrorEl = formEl.querySelector('label[for="email"] > .box-form__email_error');
const passwordEl = formEl.elements.password;
const passwordErrorEl = formEl.querySelector('label[for="password"] > .box-form__password_error');
const passwordRepeatEl = formEl.elements.passwordRepeat;
const passwordRepeatErrorEl = formEl.querySelector('label[for="password-check"] > .box-form__password-repeat_error');

let email = null;
let password = null;
let passwordRepeat = null;

emailEl.addEventListener('input', (e) => {
    email = e.target.value;
});

passwordEl.addEventListener('input', (e) => {
    password = e.target.value;
})

passwordRepeatEl.addEventListener('input', (e) => {
    passwordRepeat = e.target.value;
})

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    let isFormInvalid = false;

    if (!email) {
        emailErrorEl.textContent = 'Поле обязательно для заполнения';
        emailEl.classList.add("box-form__input_error");
        isFormInvalid = true;
    } else if (!validateEmail(email)) {
        emailErrorEl.textContent = 'Email введён некорректно';
        emailEl.classList.add("box-form__input_error");
        isFormInvalid = true;
    }

    if (!password) {
        passwordErrorEl.textContent = 'Поле обязательно для заполнения';
        passwordEl.classList.add("box-form__input_error");
        isFormInvalid = true;
    } else if (password.length < 8) {
        passwordErrorEl.textContent = 'Пароль должен содержать не менее 8 символов';
        passwordEl.classList.add("box-form__input_error");
        isFormInvalid = true;
    }

    if (!passwordRepeat || passwordRepeat !== password) {
        passwordRepeatErrorEl.textContent = 'Пароли не совпадают';
        passwordRepeatEl.classList.add("box-form__input_error");
        isFormInvalid = true;
    }

    if (isFormInvalid) {
        return;
    }
 });

function validateEmail(email) {    
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
    return re.test(String(email).toLowerCase());
}
