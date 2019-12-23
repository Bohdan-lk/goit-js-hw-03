'use strict';
const countTotalSalary = function (employees) {
    let sumPayment = 0;

    for (let sum of Object.values(employees)) {
        sumPayment = sumPayment + sum
    }
    return sumPayment;

};

    console.log(countTotalSalary({})); // 0

console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    }),
); // 330

console.log(
    countTotalSalary({
        kiwi: 200,
        lux: 50,
        chelsy: 150,
    }),
); // 400