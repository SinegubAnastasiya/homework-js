// 16. Напишите функцию, которая принимает число и возвращает сумму его цифр.
const num = 1234
const str = num.toString().split('')

const getSumOfNums = () => str.reduce((sum, el) => sum += +el, 0)

console.log(getSumOfNums());