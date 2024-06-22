// 17. Напишите функцию, которая принимает массив чисел и возвращает новый массив,
// содержащий только уникальные значения.

const arr = [2, 5, 2, 7, 9, 7]
const newArr = []

const getUniqueNums = () => {
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) newArr.push(arr[i])
    }
    return newArr
}

console.log(getUniqueNums());