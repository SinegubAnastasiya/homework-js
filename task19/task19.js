// 19. Напишите функцию, которая принимает массив чисел и возвращает новый массив, где
// каждый элемент увеличен на один.

const arr = [1, 5, 8, 10, 12]

const getElemPlusOne = () => arr.map(el => el + 1)
console.log(getElemPlusOne());