'use strict'

fetch('https://reqres.in/api/users')
    .then(async (res) => {
        const data = await res.json();
        const users = data.data;

        console.log('-----------');
        console.log('Пункт No1:');
        console.log('-----------');

        users.forEach((user) => {
            console.log(user.last_name);
        });

        console.log('-----------');
        console.log('Пункт No2:');
        console.log('-----------');

        users.forEach((user) => {
            if (user.last_name[0] === 'F') {
                console.log(user);
            }
        });

        console.log('-----------');
        console.log('Пункт No3:');
        console.log('-----------');

        const result = users.reduce((prev, user, index) => {
            return prev + `${user.first_name} ${user.last_name} ${users.length - 1 !== index ? ', ' : '.'}`
        }, 'Наша база содержит данные следующих пользователей: ')
        
        console.log(result)

        console.log('-----------');
        console.log('Пункт No4:');
        console.log('-----------');

        for (const key in users[0]) {
            console.log(key + ': ' + users[0][key])
        }
    })
    .catch((res) => {
        alert("Ошибка HTTP: " + res.status);
    })

// const numbers = [1, 2, 3, 4, 5]
// const result = numbers.reduce((prev, curr) => {
//     console.log('prev: ', prev)
//     console.log('curr: ', curr)
//     console.log('-----------');
//     return prev + curr
// }, 0)
// console.log(result)

// const response = await fetch('https://reqres.in/api/users');

// if (response.ok) { // если HTTP-статус в диапазоне 200-299
//   // получаем тело ответа (см. про этот метод ниже)
//   const json = await response.json();
//   console.log('json: ', json);
// } else {
//   alert("Ошибка HTTP: " + response.status);
// }

// function fakeFetch(url) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             const x = 1

//             if (x !== 1) {
//                 resolve('OK')
//             } else {
//                 reject('NOT OKAY')
//             }
//         }, 5000)
//     })
// }

// test.then((x) => {
//     console.log('resolved: ', x)
// }).catch((y) => {
//     console.log('rejected: ', y)
// }).finally(() => {
//     console.log('finally')
// })

// console.log('Hello') 
        

// function FakePromise (callback) {
//     const resolve = () => {}
//     const reject = () => {}
//     // ...
//     callback(resolve, reject)
// }
