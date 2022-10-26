'use strict'

const str = 'строка'.toUpperCase();
const str2 = 'СтРока'.toLowerCase();

console.log('Строка'.toUpperCase);

console.log('Строка'.includes('Стр'));
console.log('Строка'.startsWith('Стр'));
console.log('Строка'.endsWith('ока'));

console.log('А роза упала на лапу Азора'.replace('А', 'а'));
console.log('А роза упала на лапу Азора'.replaceAll('А', 'а'));

const strWithGaps = '        строка с пробелами     ';
console.log(str.trim)

const hi = 'Привет!';
console.log(hi[0]);
console.log(hi.length);
console.log(hi.substring(2, 4));

const startsWith = '     Строка      '.trim.toLowerCase().startsWith('стр');
const str4 = 'Строк начинается с "стр": '.concat(startsWith);

//  || - или
//  && - и
//  ! - не

const a = null;
const b = 'Строка';
const c = 0;

const resultOr = a || b || c;
const resultAnd = a && b && c;

const num1 = 5;
const num2 = 5;
const num3 = 6;

const result = num1 == num2;
const result2 = num1 === num2;  // оператор строгого сравнения

const result3 = num1 != num2;
const result4 = num1 !== num2;


console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

if (num1 >= 5) {
    console.log('Число больше или равно 5');
} else {
    console.log('ИНАЧЕ');
}

const age = 39;
const firstName = 'Pawel';
const lastName = 'Macivoda';

if (age > 18 && age < 40) {
    console.log('Ваш возраст от 18 до 40');
}

if (firstName === 'Pawel' || firstName === 'Pavel' && age > 18) {
    console.log('Условие выполнилось');
}

if ((firstName === 'Pawel' || firstName === 'Pavel') && age > 18) {
    console.log('Условие выполнилось');
}

const someVariable = 'Значение 3';

switch (someVariable) {
    case 'Значение 1': console.log('1'); break;
    case 'Значение 2': console.log('2'); break;
    case 'Значение 3': console.log('3'); break;
    default: console.log('default');
}

switch (someVariable) {
    case 'Значение 1': {
        console.log('1')
    } break;
    case 'Значение 2': console.log('2'); break;
    case 'Значение 3': console.log('3'); break;
    default: console.log('default');
}

const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const button = document.getElementById('send');

loginInput.addEventListener('input', (event) => {
    console.log(event.target.value)
});


button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(passwordInput.value);
    console.log(loginInput.value);

    if (loginInput.value === passwordInput.value) {
        console.log('значения совпадают')
    } else {
        console.log('значения не совпадают') 
    }
});


