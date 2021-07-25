'use strict';


// JavaScript is synchronous(동기적이다.).
// hoisting이 된 이후부터 코드블럭이 순서대로 실행된다.
// * hoisting: var, function 이런 선언들이 제일 위로 올라가는 것을 hoisting 이라 한다.
console.log('1'); // 동기
setTimeout(() => console.log('2'),1000); // 비동기
console.log('3'); // 동기

// Synchronous callback (동기콜백)
function printImmediately(print) {
    print();
}

// Asynchronous callback (비동기콜백)
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printImmediately(() => console.log('hello')); // 동기
printWithDelay(() => console.log('async callback'),2000); // 비동기

// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    } 

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password, 
    user => {
        userStorage.getRoles(user, 
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
        }, error => {
            console.log(error);
        })
}, error => {
    console.log(error);
});

/** 콜백체인 문제점
 *  - 읽기가 너무 힘듬. (가독성이 떨어짐)
 *  - 디버깅하고 문제 분석 및 유지보수가 어려움.
 * */ 
