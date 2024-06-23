// 38. Напишите функцию, которая принимает строку и возвращает новую строку, где все гласные
// заменены на '*'.

const str = 'hello'
const vowels = ['a', 'o', 'e', 'i', 'u']
newStr = ''

//1
const getNewStr = () => {
    for (let i = 0; i < str.length; i++) {
        // if (vowels.includes(str[i])) newStr += '*'
        // else newStr += str[i]
        vowels.includes(str[i]) ? newStr += '*' : newStr += str[i]
    }
    return newStr
}
console.log(getNewStr());

//2
const getNewStr2 = () => str.split('').map(el => vowels.includes(el) ? '*' : el).join('')
console.log(getNewStr2());