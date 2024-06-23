// 23. Напишите функцию, которая принимает строку и возвращает количество слов в этой
// строке.

const str = 'hello, my world'

const countWords = () => str.split(' ').length

console.log(countWords());