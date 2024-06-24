// 44. Напишите функцию, которая принимает массив строк и возвращает новый массив, где все
// строки начинаются с заглавной буквы.

const arrStr = ['hello', 'word', 'press']

//1
const getUpperLetter = () => {
    let newArr = []
    for (let i = 0; i < arrStr.length; i++) {
        newArr.push(arrStr[i][0].toUpperCase() + arrStr[i].slice(1))
    }
    return newArr
}

console.log(getUpperLetter());

//2
const getUpperLetter2 = () => arrStr.map(el => el[0].toUpperCase() + el.slice(1))
console.log(getUpperLetter2());