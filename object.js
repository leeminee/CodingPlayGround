'use strict';

/** 🌱Objects
 *  One of the JavaScript's data types.
 *  a collection of related data and/or functionality.
 *  Nearly all objects in JavaScript are instances of Object
 *  Object = {key : value};
 */

// 💡 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 20};
print(ellie);

// 아래는 가능하지만 되도록 사용하지말자.
ellie.hasJob = true;
console.log(ellie.hasJob);
delete ellie.hasJob;
console.log(ellie.hasJob);

// 💡 2. Computed properties (계산된 properties)
// key should be always string
// 코딩을 할때 값을 모르는, 예를들어 사용자 입력으로 들어올 경우 사용한다.
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie,'name');
printValue(ellie,'age');

// 💡 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = new Person('ellie', 30);
console.log(person4);

// 💡 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 💡 5. in operator: property existence check (key in obj);
// 해당하는 obj 안에 key가 있는지 없는지 확인하는 것.
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 💡 6. for..in vs for..of
// for (key in obj)
for (const key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1,2,4,5];
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
for(const value of array) {
    console.log(value);
}

// 💡 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age:20};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (const key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);