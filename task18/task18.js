// 18. Напишите функцию, которая принимает строку и возвращает новую строку, где все
// пробелы заменены на дефисы.

const str = 'hello my world'

//1
const setHyphen = () => str.split(' ').join('-')
console.log(setHyphen());

//2
const setHyphen2 = () => str.replaceAll(' ', '-')
console.log(setHyphen2());