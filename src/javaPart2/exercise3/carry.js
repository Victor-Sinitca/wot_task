const errorMessage = "Упс"
module.exports = function (func) {
    if (typeof func !== "function") throw errorMessage
    let arr = []
    function rec(...arg) {
        arr = arr.concat(arg)
        if(arr.length < func.length ){
            return rec
        } else return func(...arr)
    }
    return  rec
}
