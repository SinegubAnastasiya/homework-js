// 45. Напишите функцию, которая принимает массив чисел и возвращает новый массив, где все
// элементы, кратные 3, заменены на 'Fizz', а кратные 5 - на 'Buzz'. Элементы, кратные и 3 и 5,
// заменяются на 'FizzBuzz'.

const arr = [2, 3, 6, 15, 10, 8, 30]
let newArr = []

const changeArr = () => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 == 0 && arr[i] % 5 == 0) newArr.push('FizzBuzz')
        else if (arr[i] % 3 == 0) newArr.push('Fizz')
        else if (arr[i] % 5 == 0) newArr.push('Buzz')
        else newArr.push(arr[i])
    }
    return newArr
}
console.log(changeArr());