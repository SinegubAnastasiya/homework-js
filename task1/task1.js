// 1. Напишите функцию, которая принимает массив чисел и возвращает новый массив с
// удвоенными значениями элементов исходного массива.

const arr = [1, 6, 2, 20, 10];

const getDouble = () => arr.map(el => el * 2)
console.log(getDouble());