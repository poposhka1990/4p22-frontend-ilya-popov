'use strict'

// hoisting - всплытие вверх области видимости

sayHello();
sayHello2();

function sayHello() {
    console.log('Hello From Declaration');
}

const sayHello2 = function () {
    console.log('Hello From Expression');
}

const sayHello3 = () => {
    console.log('Hello From Lambda Expresion');
}

sayHello3();

console.log(x)
var x = '3';

function printX() {
    console.log(x);

    var x = '5'
}

printX();

// Closures // способность функции запоминать переменные из контексат где она была создана



