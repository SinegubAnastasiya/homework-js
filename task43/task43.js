// 43. Напишите функцию, которая принимает массив чисел и возвращает новый массив, где все
// элементы отсортированы по убыванию.

const arr = [2, 1, 5, -3, 45, 20]

//1
const getNewArr = () => arr.sort((a, b) => b - a)
console.log(getNewArr());

//2
const getNewArr2 = () => arr.sort((a, b) => a - b).reverse()
console.log(getNewArr2());