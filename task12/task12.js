// 12. Напишите функцию, которая принимает массив чисел и возвращает произведение всех
// элементов.
const arr = [2, 5, 3, 4]

const getProizv = () => arr.reduce((proizv, el) => proizv *= el, 1)

console.log(getProizv());