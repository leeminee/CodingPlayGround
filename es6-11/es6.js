'use strict';
 
/**
 * Shorthand property names
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 * 객체생성시 key 와 value 의 이름이 같다면 생략가능하다.
 */

const ellie1= {
    name: 'Ellie',
    age: '18',
};

const name = 'Ellie';
const age = '18';

const ellie2 = {
    name: name,
    age: age,
};

const ellie3 = {
    name,
    age,
};

console.log(ellie1,ellie2,ellie3);

/**
 * Destructuring Assignment
 * Object의 key와 value에 접근하기위한 간편한 방법
 */

const student = {
    name : 'Wendy',
    level: 1
};

{
    const name = student.name;
    const level = student.level;
    console.log(name, level);
}

{
    const {name, level} = student;
    console.log(name, level);

    const {name: studentName, level: studentLevel} = student;
    console.log(studentName, studentLevel);
}

// array
const animals = ['🐶', '😸'];

{
    const first = animals[0];
    const second = animals[1];
    console.log(first,second);
}

{
    const [first, second] = animals;
    console.log(first, second);
}

/**
 * Spread Syntax
 * 값 복사
 * ...을 사용해서 값을 복사할 수 있다.
 */

{
    const obj1 = {key: 'key1'};
    const obj2 = {key: 'key2'};
    const array = [obj1, obj2];

    // array copy
    const arrayCopy = [...array];
    console.log(array, arrayCopy);

    const arrayCopy2 = [...array, {key: 'key3'}];
    obj1.key = 'newKey';
    console.log(array, arrayCopy, arrayCopy2);

    // object copy
    const obj3 = {...obj1};
    console.log(obj3);

    // array concatenation
    const fruits1 = ['🍑','🍓'];
    const fruits2 = ['🍌','🥝'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);

    // object merge
    const dog1 = {dog1: '🐕'};
    const dog2 = {dog2: '🐶'};
    const dog = {...dog1, ...dog2};
    console.log(dog);
}

// Default parameters
{
    {
        function printMessage(message) {
            if (message == null) {
                message = 'default message';
            }
            console.log(message);
        }

        printMessage('hello');
        printMessage();
    }

    {
        function printMessage(message = 'default message') {
            console.log(message);
        }

        printMessage('hello');
        printMessage();
    }
}

// Ternary Operator
{
    const isCat = true;
    // 💩
    {
        let component;
        if(isCat) {
            component = '😸';
        } else {
            component = '🐶';
        }
        console.log(component);
    }

    // ✨
    {
        const component = isCat ? '😸' : '🐶';
        console.log(component);
    }
}

// Template Literals
{
    const weather = '⛅';
    const temperature = '16℃';

    //💩
    console.log('Today weather is ' + weather + ' and temparature is ' + temperature);

    //✨
    console.log(`Today weather is ${weather} and temperature is ${temperature}`);
}

