'use strict';
// Object-oriendted programming
// class: template (λΆμ΄λΉ΅)
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// π‘ 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// π‘ 2. Getter and setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// π‘ 3. Fields (public, private)
// Too Soon!
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); 
console.log(experiment.privateField); 

// π‘ 4. Static properties and methods
// Too soon!
// κ°μ²΄ λ° λ€μ΄μ€λ λ°μ΄ν°μ μκ΄μμ΄ κ³΅ν΅μ μΌλ‘ ν΄λμ€μμ μ¬μ©ν  μ μλ κ²μ΄λΌλ©΄ 
// staticμ μ¬μ©νμ¬ λ©λͺ¨λ¦¬μ μ¬μ©λμ μ€μ΄μ.
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// π‘ 5. Inheritance (μμ)
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('πΊ')
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}
const rectangle = new Rectangle(20,20,'blue');
const triangle = new Triangle(20,20,'red');
rectangle.draw();
triangle.draw();
console.log(rectangle.getArea());
console.log(triangle.getArea());

// π‘ 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle);  // false
console.log(triangle instanceof Triangle);   // true
console.log(triangle instanceof Shape);      // true
console.log(triangle instanceof Object);     // true
console.log(triangle.toString());
