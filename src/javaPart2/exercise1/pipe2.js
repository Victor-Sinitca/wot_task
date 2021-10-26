const errorMessage = "Упс"
module.exports = function pipe(functions) {
    return function (x) {
        x = functions.reduce(function(x,value){
            if(typeof value === "function"){
                return value(x)
            }else throw errorMessage
        },x)
        return x
    }
}
