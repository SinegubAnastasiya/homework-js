// 34. Напишите функцию, которая принимает массив строк и возвращает массив тех строк,
// которые содержат подстроку 'abc'.

const arr = ['school', 'strabca', 'hello', 'abcfd']

//1
const findStrWithLetters = () => arr.filter(el => el.includes('abc'))
console.log(findStrWithLetters());

//2
const findStrWithLetters2 = () => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('abc')) newArr.push(arr[i])
    }
    return newArr
}
console.log(findStrWithLetters2());

