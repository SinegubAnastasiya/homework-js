// 24. Напишите функцию, которая принимает массив строк и возвращает массив, где каждый
// элемент - это первая буква исходного элемента.

const arrStr = ['hello', 'wind', 'school', 'application']
let newArr = []

//1
const getNewArr = () => arrStr.map(el => el[0])
console.log(getNewArr());

//2
const getNewArr2 = () => {
    for (let i = 0; i < arrStr.length; i++) {
        newArr.push(arrStr[i][0])
    }
    return newArr
}
console.log(getNewArr2());