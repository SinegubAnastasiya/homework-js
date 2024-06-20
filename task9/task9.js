// 9. Напишите функцию, которая принимает число и возвращает true, если число является
// простым, и false в противном случае.

const checkNumber = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false
        return true
    }
    if (n === 2) return true
}

console.log(checkNumber(6));