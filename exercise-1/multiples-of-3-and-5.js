let sum = 0

for (let i = 3; i < 1000; i++) {
    if (i % 3 === 0) {
        sum += i
    } else if (i % 5 === 0) {
        sum += i
    }
}

console.log(`The sum is: ${sum}\nHave a great day!`)
    // console.log('The sum is: ' + sum + '\nHave a great day!')