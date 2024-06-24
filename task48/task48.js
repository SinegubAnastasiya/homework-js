// 48. Напишите функцию, которая принимает массив чисел и возвращает новый массив,
// содержащий все простые числа.

const arr = [2, 3, 9, 13, 11, 20, 25, 31]

const getNewSimpleArr = () => arr.filter(el => {
    for (let i = 2; i < el; i++) {
        if (el % i === 0) return false
    }
    return el
})
console.log(getNewSimpleArr());