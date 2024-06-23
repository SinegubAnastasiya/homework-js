// 33. Напишите функцию, которая принимает массив чисел и возвращает новый массив, где
// каждый элемент умножен на его индекс.

const arr = [5, 1, 2, -3, 8]

//1
const getNewArr = () => arr.map((el, index) => el * index)
console.log(getNewArr());

const getNewArr2 = () => {
    newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * i)
    }
    return newArr
}
console.log(getNewArr2());

