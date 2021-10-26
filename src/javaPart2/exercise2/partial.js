const errorMessage = "Упс"
module.exports = function (...date) {
    if (typeof date[0] !== "function" ) throw errorMessage
    return (...expect) =>  date[0](...date.splice(1).concat(expect))
}
