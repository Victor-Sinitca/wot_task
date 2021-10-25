const errorMessage = "Упс"
module.exports = function pipe(functions) {
    return function (x) {
        let length = functions.length
        let index=0
        while (length--) {
            if (typeof functions[index] === "function") {
             x = functions[index](x)
            } else throw errorMessage
            index++
        } return x
    }
}
