// 50. Напишите функцию, которая принимает массив чисел и возвращает объект, где ключи - это
// числа, а значения - их квадраты.

const arr = [2, 5, 10, 3, 6]
let obj = {}

const getNewObj = () => {
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = arr[i] ** 2
    }
    return obj
}
console.log(getNewObj());