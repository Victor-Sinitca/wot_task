const errorMessage = "Упс"
module.exports = function pipe(functions) {
    return function (x) {
        for(let func of functions){
            if (typeof func === "function") {
                x = func(x)
            } else throw errorMessage
        }
        return x
    }
}
