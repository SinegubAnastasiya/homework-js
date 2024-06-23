// 29. Напишите функцию, которая принимает массив чисел и возвращает максимальное
// значение.

const arr = [5, 23, 544, 43, 452]
let max = 0

//1
const findMax = () => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i] 
    }
    return max
}

console.log(findMax());

//2
const findMax2 = () => Math.max(...arr)
console.log(findMax2());