'use strict';

function pirntA() {  // 비동기방식
    setTimeout(() => {
      console.log("AAA");
    }, 2000);
  }
  
  function pirntB() {  // 비동기방식
    setTimeout(() => {
      console.log("BBB");
    }, 1000);
  }
  
  function printHello() {  // 동기방식
    console.log("Hello");
  }
  
  function printHi() {  // 동기방식
    console.log("Hi");
  }
  
  pirntA();
  pirntB();
  printHello();
  printHi();