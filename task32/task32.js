// 32. Напишите функцию, которая принимает массив чисел и возвращает индекс первого
// отрицательного числа.

const arr = [5, 10, 6, 732, -1]

const getIndexOfNegativeNum = () => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) return i
    }
}

console.log(getIndexOfNegativeNum());