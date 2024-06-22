// 0. Напишите функцию, которая принимает массив строк и возвращает массив тех строк,
// которые начинаются с буквы 'A'.

const arr = ['Array', 'world', 'App', 'limit']
const newArr = []

//1
const getNewArr = () => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == 'A') newArr.push(arr[i])
    }
    return newArr
}

console.log(getNewArr());

//2
const getNewArr2 = () => arr.filter(el => el[0] == 'A')

console.log(getNewArr2());