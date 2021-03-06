"use strict";
// π‘ 1. Function declaration
function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}

log("Minee");

// π‘ 2. Parameters
// premitive parameters : passed by value
// object parameters : passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// π‘ 3. Default parameters (added in ES6)
function showMessage(message, from = "unkonwn") {
  console.log(`${message} by ${from}`);
}

showMessage("Hi!");

//π‘ 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (let arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}

printAll("dream", "coding", "ellie");

// π‘ 5. Local scope
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);
  // function printAnother() {
  //     console.log(message);
  //     let childMessage = 'hello';
  // }
  // console.log(childMessage);
}
printMessage();

// Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  // μ΄λ κ² μΈμλ‘ ν¨μλ₯Ό λ°μ λ΄λΆμμ μ€ννλ κ²μ μ½λ°±ν¨μλΌκ³  νλ€
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log("I love you tooβ€");
};

// named function
// better debugging in debugger's stack traces
const printNo = function print() {
  console.log("No!");
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// β¨Arrow function
// always anonymous
const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // Arrow function μμ μ΄λ κ² λΈλ­μ μ¬μ©ν κ²½μ°μλ λ°λμ return κ°μ μ¨ μ£Όμ΄μΌν¨.
  // do someting more
  return a * b;
};

// IIFE : Immediately Invoked Function Expression
// ν¨μλ₯Ό λ°λ‘ νΈμΆνκ³  μΆμλ μλμ κ°μ΄ μ¬μ©νλ€.
(function hello() {
  console.log("IIFE");
})();

// Fun quiz timeπ
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
const calculate = (command, a, b) => {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default:
      return console.log(
        "you have to input add or substract or divide or multiply or remainder."
      );
  }
};
console.log(calculate("remainder", 3, 4));
