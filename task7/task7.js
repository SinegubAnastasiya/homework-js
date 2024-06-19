// 7. Напишите функцию, которая принимает массив строк и возвращает массив только тех
// строк, которые содержат больше пяти символов.

const strArr = ['hi', 'hello', 'university', 'school']

const findStr = () => strArr.filter(el => el.length > 5)

console.log(findStr());