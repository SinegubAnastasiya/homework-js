// 39. Напишите функцию, которая принимает массив строк и возвращает массив, где строки
// отсортированы в обратном алфавитном порядке.

const arr = ['string', 'hello', 'world', 'happy']

const getSortedArr = () => arr.map(el => el.split('').sort().reverse().join(''))
console.log(getSortedArr());