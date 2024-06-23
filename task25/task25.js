// 25. Напишите функцию, которая принимает число и возвращает массив всех чисел от 1 до
// этого числа.
let arr = []

const getArrOfNumbers = (num) => {
    for (let i = 1; i <= num; i++) {
        arr.push(i)
    }
    return arr
}

console.log(getArrOfNumbers(5));