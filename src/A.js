function solve(input) {
    let output = ``
    let count = 1
    let inputArray = input.replace(/\s+/g, '').split(`,`)
    inputArray.sort(function (a, b) {
        return +a - +b;
    })
    inputArray = inputArray.filter((item, index, array) => {
        return !(index + 1 < array.length && item === array[index + 1])&&(+item !== 0);
    })
    for (let i = 0; i < inputArray.length; i++) {
        while (i + count < inputArray.length && +inputArray[i] === +inputArray[i + count] - count) {
            count++
        }
        if (count > 1) {
            if (i === 0) {
                output = inputArray[i] + `-` + inputArray[i + count - 1]
            } else {
                output = output + `,` + inputArray[i] + `-` + inputArray[i + count - 1]
            }
            i = i + count - 1
        } else if (i === 0) {
            output = inputArray[i]
        } else {
            output = output + `,` + inputArray[i]
        }
        count = 1
    }
    return output
}
const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8')
console.log(solve(input))
