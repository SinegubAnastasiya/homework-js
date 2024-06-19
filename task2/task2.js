// 2. Напишите функцию, которая принимает строку и возвращает количество гласных в этой
// строке.

const str = 'worlddfdeee'
const vowels = ['a', 'o', 'e', 'i', 'u']
let count = 0

const countVowels = () => {
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) count ++
    }
    return count
}

console.log(countVowels());