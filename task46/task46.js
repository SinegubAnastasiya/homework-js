// 46. Напишите функцию, которая принимает массив чисел и возвращает новый массив, где
// каждый элемент возведен в степень, равную его индексу.

const arr = [2, 5, 10, 1, 2, 3]

const getNewArr = () => arr.map((el, index) => el ** index)
console.log(getNewArr());