// 47. Напишите функцию, которая принимает строку и возвращает новую строку, где все
// символы идут в обратном порядке.

const str = 'string'

const getReversedString = () => str.split('').reverse().join('')
console.log(getReversedString());