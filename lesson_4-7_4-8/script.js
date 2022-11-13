// 'use strict';

// // setTimeout - выполняет callback после паузы 1х
// // setInterval - cвыполняет allback через промежуток времени

// setTimeout(() => {
//     console.log('Hello, world! Timeout');
// }, 1000);

// setInterval(() => {
//     console.log('Hello, world! Interval');
// }, 1000);

// //1000 - 1 sec approximately

// function makeTimeoutFunction() {
//     let i = 0;

//     return () => {
//         i++;
//         console.log(`Вызвано ${i} раз`);
//     }
// }

// function stopInterval() {

// }

// const timeoutFunction = makeTimeoutFunction();
// const interval = setInterval(timeoutFunction, 1000);

// setTimeout(() => {
//     clearInterval(interval)
// }, 3000);

// setTimeout(clearInterval, 3000);

// // Promise



// async function asyncFunction() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Promise result');
//         }, 1000);
//     });
    
//     // promise.then((result) => {
//     //     console.log('Promise ended sucessfully', result);
//     // }).catch(() => {
//     //     console.log('Promise has failed');
//     // }).finally(() => {
//     //     console.log('Promise has ended');
//     // });

//     const result = await promise;
//     console.log(result);

//     // if reject

//     let result1 = null;

//     try {
//         const result = await promise;
//         console.log(result);
//     } catch (e) {
//         console.log(e);
//         result1 = e;
//     } finally {
//         console.log('finally');
//     }

//     console.log(result1);
// }

// asyncFunction();

// fetch

// fetch('https://reqres.in/api/users')
//     .then((response) => {
//         return response.json();
//     }).then(() => {
//         console.log((result);
//     }).catch((e) => {
//         console.log(e);
//     });

// async function fetchData() {
//     let result = null;

//     try {
//         const response = await fetch('https://reqres.in/api/users');
//         const result = await response.json();
//     } catch (e) {
//     console.log(result);
//     }
// };

// fetchData();

// // события браузера

// const container = document.getElementById('container')
// const container2 = document.querySelectorAll('container')

// container.addEventListener('', (event) => {
//     console.log('click');
// })

const body = document.querySelector('body');

console.log(body);

const div = document.createElement('div');
div.style.width = '100px';
div.style.height = '100px';
div.style.backgroundColor = 'red';
div.id = 'some-div';

body.appendChild(div);

const div2 = document.getElementById('some-div');

const someElement = document.createElement('span');
someElement.textContent = 'Hello, world!';

div2.appendChild('div2')

console.log(div2);


//

class Person {
    _firstName = ''; // private line
    lastName = '';
    age = '';

    constructor(firstName = '', lastName = '', age = '') {
        this._firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get firstName() {
        return this._firstName;
    }

    set age(age) {
        this.age = age;
    }

    get age(age) {
        return `${this._age} лет`;
    }

    sayHi() {
        console.log('hello!');
    }

    writeFullName() {
        return `${this._firstName} ${this.lastName}`
    }

    
}

const person = new Person();

const person2 = person;
person2._firstName = 'Alexander';

person.age = 50;

console.log(person);






