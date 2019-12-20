"use strict";

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const users = Object.keys(user);
for (const el of users) {
    console.log(`${el} -`,user[el])
}

