// 10. Напишите функцию, которая принимает массив чисел и возвращает новый массив,
// содержащий только четные числа.
const arr = [1, 5, 2, 4, 8, 9, 10, 12]

const getEvenNums = () => arr.filter((el) => el % 2 == 0)

console.log(getEvenNums());