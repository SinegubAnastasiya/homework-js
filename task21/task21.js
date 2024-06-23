// 21. Напишите функцию, которая принимает два числа и возвращает наибольшее общее
// делимое этих чисел.

const getNOD = (a, b) => {
    while (a != 0 && b != 0) {
        if (a > b) a = a % b
        else b = b % a
    }
    return a + b
}

console.log(getNOD(36, 10));