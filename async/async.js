// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
        // do network request in 10 secs...
        return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
// : async 가 붙은 함수 안에서만 사용이 가능
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000); // delay가 끝날때까지 기다렸다가 사과를 return 한다.
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

// 콜백지옥
// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }

// 불필요하게 시간낭비
// async function pickFruits() {
//     const apple = await getApple(); // 1초 소요
//     const banana = await getBanana(); // 위의 작업이 끝나면 1초 또 소요
//     return `${apple} + ${banana}`;
// }

// 병렬적으로 수행가능
async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise; 
    const banana = await bananaPromise; 
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);

// async와 await은 Promise를 좀더 간편하게 쓸 수 있다.
// Promise 에는 all, race 같은 유용한 API가 있다.