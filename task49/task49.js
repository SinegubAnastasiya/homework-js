// 49. Напишите функцию, которая принимает строку и возвращает новую строку, где каждое
// слово начинается с заглавной буквы.

const str = 'first letter of the word'

const getNewStr = () => str.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
console.log(getNewStr());