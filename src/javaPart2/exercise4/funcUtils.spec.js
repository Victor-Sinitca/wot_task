const FuncUtils = require('./funcUtils')
function getAge() {
    return this.age
}
function getAge2() {
    return this.age*2
}
function getSum(a,b,c) {
    return a+b+c + this.age
}
const person={
    name:"John",
    age:42
}
const man={
    name:"Dima",
    age:18
}

const errorMessage = "Упс"


describe("bind", () => {
    it("1", () => {
        const result1 =42
        const result12 =84
        const result2 =18
        const tr=true
        const bindGetAge1=FuncUtils.bind(getAge,person)
        const bindGetAge12=FuncUtils.bind(getAge2,person)
        const bindGetAge2=FuncUtils.bind(getAge,man)
        expect(bindGetAge1()).toEqual(result1)
        /*expect(bindGetAge1() === bindGetAge12()).toEqual(tr)*/
        expect(bindGetAge12()).toEqual(result12)
        expect(bindGetAge2()).toEqual(result2)
        expect(bindGetAge1()).toEqual(result1)
    })

})
describe("call", () => {
    it("1", () => {
        const result = 48
        const result1 = 51
        expect(FuncUtils.call(getSum,person,1,2,3)).toEqual(result)
        expect(FuncUtils.call(getSum,person,3,3,3)).toEqual(result1)
    })

})
describe("apply", () => {
    it("1", () => {
        const result = 54
        expect(FuncUtils.apply(getSum,person,[3,2,7])).toEqual(result)
    })

})

