// 13. Напишите функцию, которая принимает строку и возвращает true, если строка является
// палиндромом, и false в противном случае.

const str = 'haha'

const checkStr = () => str.split('').reverse().join('') == str ? 'палиндром' : 'не палиндром'

console.log(checkStr());