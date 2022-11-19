'use strict'

function fibo() {
    let a = 0;
    let b = 1;
    let counter = 0;

    return () => {
        if (counter === 0) {
            counter++;
            return 0;
        }

        if (counter === 1) {
            counter++;
            return 1;
        }
        let result = a + b
        a = b
        b = result;
        return result;
    };
}

const resultF = fibo();

console.log(resultF());
console.log(resultF());
console.log(resultF());
console.log(resultF());
console.log(resultF());
console.log(resultF());
console.log(resultF());
console.log(resultF());

const resultSecondOption = (() => {

    let a = 0;
    let b = 1;
    let counter = 0;

    return () => {
        if (counter === 0) {
            counter++;
            return 0;
        }

        if (counter === 1) {
            counter++;
            return 1;
        }
        let result = a + b
        a = b
        b = result;
        return result;
    };
})();
console.log('-------------------------------')
console.log('second option')
console.log('-------------------------------')
console.log(resultSecondOption());
console.log(resultSecondOption());
console.log(resultSecondOption());
console.log(resultSecondOption());
console.log(resultSecondOption());
console.log(resultSecondOption());
console.log(resultSecondOption());
console.log(resultSecondOption());