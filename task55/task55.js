// 55. Напишите функцию, которая принимает число n и возвращает двумерный массив,
// представляющий треугольник чисел Флойд до n строк. Например, для n = 5 результат
// должен быть:
// [
// [1],
// [2, 3],
// [4, 5, 6],
// [7, 8, 9, 10],
// [11, 12, 13, 14, 15]
// ]

const getNewArr = (n, row = 1, count = 1, output = []) => {
    let newRow = [];
    
    if (row > n) return output;
    for (let i = 0; i < row; i++) {
        newRow.push(count);
        count++;
    }
    output.push(newRow);
    
    return getNewArr(n, row + 1, count, output);
}

console.log(getNewArr(5));