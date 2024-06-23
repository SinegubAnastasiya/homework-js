// 40. Напишите функцию, которая принимает число и возвращает массив всех делителей этого
// числа.

const num = 48;
const arr = []

const getArrOfDivs = () => {
    for (let i = 0; i < num; i++) {
        if (num % i == 0) arr.push(i)
    }
    return arr
}
console.log(getArrOfDivs());