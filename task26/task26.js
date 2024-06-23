// 26. Напишите функцию, которая принимает массив чисел и возвращает новый массив,
// содержащий только положительные числа.

const arr = [-2, 7, 10, -136, 73, 93, -236]

const getPositiveNums = () => arr.filter(el => el > 0)
console.log(getPositiveNums());