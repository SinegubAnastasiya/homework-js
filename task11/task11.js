// 11. Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.

const arr = [1, 4, 6, 2, 5]

const getSum = () => arr.reduce((sum, el) => sum += el, 0)

console.log(getSum());