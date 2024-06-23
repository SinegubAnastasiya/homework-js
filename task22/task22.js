// 22. Напишите функцию, которая принимает два числа и возвращает наименьшее общее
// кратное этих чисел.

const findNOK = (a, b) => {
    const maxNum = Math.max(a, b);
    let arr = [];

    for (let i = 1; i <= maxNum; i++) {
        if (i % a == 0 && i % b == 0) arr.push(i)
    }
    return Math.min(...arr)
}
console.log(findNOK(6, 8));