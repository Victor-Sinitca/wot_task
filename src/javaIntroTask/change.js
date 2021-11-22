const string = ["s", "t", "r", "i", "n", "g"]
//2^32 -1
const maxSafeLengthArray = 4294967295
Array.prototype["change"] = function (...arg) {
    const array=[...this]
    if (arg.length === 0) {
        return array
    }
    arg.forEach((value) => {
        const argument = value
        for (let index in argument) {
            if (argument.hasOwnProperty(index) && Number.isInteger(+index) && +index >= 0 && +index <= maxSafeLengthArray) {
                array[+index] = argument[index]
            }
        }
    })
    return array
}
console.log(string)
console.log(string.change())
console.log(string.change({1: "4", 6: "8", "-10": {name: "Dmitri -10"},"11": {name: "Dmitri 10"}}))
const changeString = string.change(["2222", "3333"])
console.log(changeString)
console.log(string.change({1:1, 5:5}, {10:10, 15:15}))