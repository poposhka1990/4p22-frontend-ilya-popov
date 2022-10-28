'use strict'

console.log('Hello, world!', 1);

for (let i = 0; i < 10; i++) {
    console.log('Hello, world!', i + 1);
}

let isLoopContinues = true;
let i = 0;

while (isLoopContinues) {
    i = Math.random();
    console.log(i)

    if (i > 0.5) {
        isLoopContinues = false;
    }
}

do {
    i = Math.random();
    console.log(i)

    if (i > 0.5) {
        isLoopContinues = false;
    } else {
        isLoopContinues = true;
    }
} while (isLoopContinues);

while (isLoopContinues) {
    i = Math.round
    Math.ceil
    Math.floor
    Math.trunc

    if (i === 9) {
        isLoopContinues = false;
    }
}

// res = a * b + k

// Function declaration

function sayHelloToUser(firstName = '', lastName = '') {
    const someVariable = 39;
    console.log(`Привет, ${firstName} ${lastName}`);
}

sayHelloToUser('Иван', 'Петров');
sayHelloToUser('Elon', 'Musk');

// Function expression

const sayHello2 = function() {
    console.log('Hello world!');
}

// Function expresstion (lambda - стрелочная функция)

const sayHello3 = () => {
    console.log('Hello world!');
}

// IIFE - Immediately Invoked Function Expression
(function(name) {
    console.log('Hello form IFE', name)
})();

sayHello3();

// функциональная область видимости - устарела

var someVariable2 = 'hello';

function sayHello4() {
    var someVariable2 = 'Hello';
}

if (true) {
    var someVariable2 = 'Hello';
}

// блочная область видимости

// возвращаемое 

function sayHello5() {
    console.log('Hello world!');
}

function getSum(a, b) {
    return a + b;
}

const sum = getSum(4, 5);

const random = Math.random();
