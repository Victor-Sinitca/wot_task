const Func = require('./funcUtils')

const errorMessage = "Упс"
function Function() {
}

Function.prototype.bind = function (func, obj) {
    return function () {
        throw errorMessage
    }
}
Function.prototype.call = function (func, obj) {
    throw errorMessage
}
Function.prototype.apply = function (func, obj, arr) {
    throw errorMessage
}
module.exports = new Function()


const man = {
    age: 20,
    name: "Dima"
}

function examp(a, d, f, g) {
    return a + d + f + g + this.age
}

let age = examp.bind(man)
let age1=age(1,2,3,4)
let age3 = Func.bind(examp,man,1,2,3)
console.log(Func)

console.log(Func.bind(examp,man,1,2,3,4)())
console.log(age3(4))
console.log(age(1,2,3,4))
console.log(age1)

