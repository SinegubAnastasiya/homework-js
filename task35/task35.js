// 35. Напишите функцию, которая принимает массив строк и возвращает новый массив, где все
// строки переведены в верхний регистр.
const arr = ['string', 'hello', 'school', 'happy']

const getUpperLetters = () => arr.map(el => el.toUpperCase())
console.log(getUpperLetters());