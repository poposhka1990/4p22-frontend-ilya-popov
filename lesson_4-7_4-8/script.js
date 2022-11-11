'use strict'

// // hoisting - всплытие вверх области видимости

// sayHello();
// sayHello2();

// function sayHello() {
//     console.log('Hello From Declaration');
// }

// const sayHello2 = function () {
//     console.log('Hello From Expression');
// }

// const sayHello3 = () => {
//     console.log('Hello From Lambda Expresion');
// }

// sayHello3();

// console.log(x)
// var x = '3';

// function printX() {
//     console.log(x);

//     var x = '5'
// }

// printX();

// // Closures // способность функции запоминать переменные из контексат где она была создана


// // Objects

// const person = {
//     firstName: 'Andrew',
//     lastName: 'Gulin'
// }

// const employee = {
//     lastName: 'GulinEmployee',
//     id: 2344234,
//     taxNumber: '122231231231232',
//     personalInfo: {
//         passportNumber: 12233233,
//         telNmuber: 893563456546,
//         taxNumber: '84887589849',
//     }
// }

// // const person2 = person; // bad practice

// // console.log(person2 === person);

// // person2.firstName = 'Andrey';

// // console.log(person.firstName);  // changed name in both persons

// const person2 = Object.assign({}, person, employee);

// // second way

// const person3 = {};
// Object.assign(person3, person);

// console.log(person.firstName);
// console.log(person2.firstName); // different names

// // third way of copying objects

// const person4 = Object.assign({}, person, employee);

// // spread

// const person5 = { ...person, ...employee };

// // JSON - JavaScript Object Notation

// const stringJson = JSON.stringify(employee);

// const employee2 = { ...employee };

// const employee3 = JSON.parse(stringJson);

// // employee2.personalInfo.passportNumber = 0;

// // console.log(employee.personalInfo.passportNumber)
// // console.log(employee2.personalInfo.passportNumber)

// // Массивы


// const arr = [];
// const arr2 = ['Appple', 'Banana', 'Pearson'];

// const objectList = [
//     {
//         firstName: 'Petr',
//         lastName: 'Cech',
//         birthDate: '20.05.1987'
//     },
//     {
//         firstName: 'Branislav',
//         lastName: 'Ivanovic'
//     },
//     {
//         firstName: 'John',
//         lastName: 'Terry'
//     },
//     {
//         firstName: 'Ricardo',
//         lastName: 'Carvalho'
//     },
//     {
//         firstName: 'Ashley',
//         lastName: 'Cole'
//     },
//     {
//         firstName: 'Michael',
//         lastName: 'Essein'
//     }
// ];

// const element = objectList[3];
// const element2 = objectList[objectList.length];

// console.log(element.firstName);

// // перебор массива

// for (let i = 0; i < objectList.length; i++) {
//     console.log(objectList[i].firstName);
// }

// const numberList = [1, 2, 3, 4, '5', 6, 7, 8, 9, 10];
// let sum = 0;

// for (let i = 0; i < numberList.length; i++) {
//     sum += numberList[i];
// }

// objectList.forEach((item) => {
//     console.log(item.firstName)
// });

// objectList.forEach((element, index) => {
//     console.log(`${index + 1}, ${element.firstName}`);
// });

// for (let i = 0; i < objectList.length; i++) {
//     console.log('Iteration', i);
//     if (i >= 4) {
//         return;
//     }
// }

// // array methods
// // push - добавление в конец

// objectList.push({
//     firstName: 'Frank',
//     lastName: 'Lampard'
// });

// arr2.push('Papaya');

// // pop - удаление с конца массива

// objectList.pop();
// const lastElem = arr2.pop();

// // unshift - добавить в начало

// arr2.unshift('Papaya');

// // shift - удалить с начала массива

// const firstElem = arr2.shift();

// // indexOf - какой индекс у элемента

// const index = arr2.indexOf('Banana')

// // findIndex - найти индекс элемента

// const index2 = objectList.findIndex((item) => {
//     return item.firstName === 'Petr';
// });

// // find - поиск в массиве

// const elem = objectList.find((item) => {
//     return item.lastName === 'Terry';
// })

// // splice - удаляет с какого индекса и кол-во - меняте массив
// arr2.splice(1, 2);

// // slice - не меняет массив, возвращает копию, часть массива два включительно и три не включительно
// // индекс начала и индекс конца
// const arr3 = arr2.slice(2, 3);

// // методы объектов

// const person6 = {
//     firstName: 'Ilya',
//     lastName: 'Gulin'
// }

// console.log(Object.keys(person6));

// console.log(Object.values(person6));

// console.log(Object.entries(person6));

// Object.entries(person6).forEach((entry) => {
//     console.log(`Ключ: ${entry[0]}, Значение: ${value}`);
// });

// 4.5-4.6

const arr = ['ads', '2', 'trgrg'];
const obj = {
    field1: 'assad',
    field2: 'asdasd',
    field3: 'asdsdsd',
};

function deleteFromArray(array = [], index = 0) {
    return array.filter((item, innnerIndex) => {
        return index !== innnerIndex;
    });
}

const chelseaSquad = [
    {
        firstName: 'Kepa',
        lastName: 'Arrizabalaga'
    },
    {
        firstName: 'Reece',
        lastName: 'James'
    },
    {
        firstName: 'Cesar',
        lastName: 'Azpilicueta'
    },
];

const changedArray = deleteFromArray(chelseaSquad, 1);

const filteredArray = chelseaSquad.filter((item) => {
    return item.lastName[0] === 'A';
});

console.log(changedArray);

// особенность стрелочных функций

function deleteFromArray(array = [], index = 0) {
    return array.filter(item, innnerIndex) => index !== innnerIndex;
};

const changedArray2 = chelseaSquad.map((item) => {
    return  {
        name: item.firstName,
        surname: item.lastName
    }
});

const changedArray3 = chelseaSquad.concat.map((item, index) => {
    return {
        ...item,
        id: index
    };
});

const reducedArray = chelseaSquad.reduce((accumulator, item, index, array) => {
    let resString = `${item.firstName} ${item.lastName}`;

    if (index === array.length - 1) {
        resString += ', ';
    }

    accumulator += resString;
    
    return accumulator;
}, '');

const arrNumbers = [
    {
        x: 5,
        y: 10
    },
    {
        x: 15,
        y: 20
    },
    {
        x: 39,
        y: 27
    }
];

// (x0 + y0) * (x1 + y1) * (x2 + y2)

const result = arrNumbers.reduce((acc, item, index, array) => {
    acc *= (item.x + item.y);

    return acc;
}, 1);

console.log(result);

const fruits = ['banana', 'apple', 'apple']

const result2 = fruits.reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] : ;

    return acc;
}, {});

console.log(result);

const set = new Set();

set.add('apple ');
set.add('apple ');
set.add('banana ');

console.log(set);

set.clear();

set.delete(set.size);

for (let entry of set) {
    console.log(entry);
}

const map = new Map();
map.set('Ключ', 'Значение');

console.log(map.size);
console.log(map.get('Ключ'));
console.log(map.has('Ключ2'));
map.delete('Ключ');

for (let [key, value] of map) {
    console.log(`${key} ${value}`);
}

// рекурсия

function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

const obj = {
    filed1: '',
    filed2: '',
    filed3: '',
    field4: {
        filed1: '',
        filed2: '',
        filed3: '',
        field4: {
            field
        }
    }
}

// 5! = 5 * 4 * 3 * 2 * 1
// 5! = 5 * 4!
// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1