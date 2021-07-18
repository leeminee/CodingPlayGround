'use strict';
// 💡 1. String concatenation
console.log('my'+' cat');
console.log('1'+2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 💡 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversation
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for ( let i=0; i <= 10 ; i++){
    if(i % 2 != 0){
        continue;
    }
    console.log(`Q1. ${i}`);
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i = 0 ; i <= 10; i++) {
    if(i > 8) break;
    console.log(`Q2. ${i}`);
}