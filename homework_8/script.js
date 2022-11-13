'use strict'

const resultEl = document.getElementById('result');
const formEl = document.getElementById('calculator');
const firstNumberEl = formEl.elements.firstNumber; 
const secondNumberEl = formEl.elements.secondNumber; 
const operatorEl = formEl.elements.operator;

let firstNumber = null;
let secondNumber = null;
let operator = null;

firstNumberEl.addEventListener('input', (e) => {
    firstNumber = e.target.value;
});

secondNumberEl.addEventListener('input', (e) => {
    secondNumber = e.target.value;
});

operatorEl.addEventListener('input', (e) => {
    operator = e.target.value;
});

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!firstNumber && firstNumber !== 0) {
        alert('Первое число не указано'); 
        return;  
    } else if (!secondNumber && secondNumber !== 0) {
        alert('Второе число не указано'); 
        return;  
    } else if (!operator) {
        alert('Не введен знак'); 
        return; 
    } else if (!['+', '-', '*', '/'].includes(operator)) {
        alert('Программа не поддерживает такую операцию'); 
        return;  
    } else if (operator === '/' && +secondNumber === 0) {
        alert('Операция некорректна'); 
        return;
    }
    
    switch (operator) {
        case '+': 
            resultEl.textContent = `Результат: ${+firstNumber + +secondNumber}`
            break;
        case '-': 
            resultEl.textContent = `Результат: ${+firstNumber - +secondNumber}`
            break;
        case '*': 
            resultEl.textContent = `Результат: ${+firstNumber * +secondNumber}`
            break;
        case '/': 
            resultEl.textContent = `Результат: ${+firstNumber / +secondNumber}`
            break;
        default:
            break;
    }
});
