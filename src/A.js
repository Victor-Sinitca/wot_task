function solve(input) {
    let output = ``
    let count = 1
    let arr = input.replace(/\s+/g, '').split(`,`)
    arr.sort(function (a, b) {
        return +a - +b;
    })
    arr = arr.filter((item, index, array) => {
        return !(index + 1 < array.length && item === array[index + 1])&&(+item !== 0);
    })
    for (let i = 0; i < arr.length; i++) {
        while (i + count < arr.length && +arr[i] === +arr[i + count] - count) {
            count++
        }
        if (count > 1) {
            if (i === 0) {
                output = arr[i] + `-` + arr[i + count - 1]
            } else {
                output = output + `,` + arr[i] + `-` + arr[i + count - 1]
            }
            i = i + count - 1
        } else if (i === 0) {
            output = arr[i]
        } else {
            output = output + `,` + arr[i]
        }
        count = 1
    }
    return output
}
const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8')
console.log(solve(input))
