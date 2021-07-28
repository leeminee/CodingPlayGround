'use strict';

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id); 
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    } 

    getRoles(id) {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                if(id === 'ellie') {
                    resolve({name: 'ellie', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }

    async getUserWithRole(user, password) {
        const id = await this.loginUser(user, password);
        const role = await this.getRoles(id);
        return role;
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
.getUserWithRole(id, password)
.then(console.log) // 성공하면 3초
.catch(console.log); // loginUser에서 실패시 2초, getRoles에서 실패시 3초

