// 28. Напишите функцию, которая принимает строку и возвращает новую строку, где все буквы
// переведены в противоположный регистр.

const str = 'Hello, WOrLd'

//1
const getNewStr = () => {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        str[i] == str[i].toLowerCase() ? newStr += str[i].toUpperCase() : newStr += str[i].toLowerCase()
    }
    return newStr
}
console.log(getNewStr());

//2
const getNewStr2 = () => str.split('').map(el => el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()).join('')
console.log(getNewStr2());