// 6. Напишите функцию, которая принимает массив чисел и возвращает среднее значение всех
// элементов.

const numArr = [4, 4, 6, 10]
let avg = 0

const findAvg = () => numArr.reduce((avg, el) => avg += el, 0) / numArr.length

console.log(findAvg());