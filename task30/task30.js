// 30. Напишите функцию, которая принимает массив чисел и возвращает минимальное
// значение.

const arr = [50, 23, 544, 43, 452]

//1
const findMin = () => {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i] 
    }
    return min
}

console.log(findMin());

//2
const findMin2 = () => Math.min(...arr)
console.log(findMin2());