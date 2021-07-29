"use strict";

/** Promise
 *  : 자바스크립트 안에 내장되어있는 object
 *  : 비동기적인 것을 수행할때 콜백함수 대신 사용할 수 있다.
 *  state : pending -> fulfilled or rejected
 *  Producer vs Consumer
 */

// 1. Producer
// 💡 when new Promise is create, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    resolve("ellie");
    // reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then(성공), catch(실패), finally(디폴트)
// Promise 가 성공적으로 수행되어 resolve가 수행되었을때 then에서 받게된다.
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });
// getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));
getHen()
  .then(getEgg)
  .catch((error) => {
    return "🍞";
  })
  .then(cook)
  .then(console.log);
