// 54. Напишите функцию, которая принимает строку и возвращает новую строку, где
// повторяющиеся символы заменены на один символ. Например, для строки "aaabbbcc"
// результат должен быть "abc".

const str = 'aaabbbcc'
let newStr = ''

const getNewStr = () => {
    for (let i = 0; i < str.length; i++) {
        if (!newStr.includes(str[i])) newStr += str[i]
    }
    return newStr
}

console.log(getNewStr());