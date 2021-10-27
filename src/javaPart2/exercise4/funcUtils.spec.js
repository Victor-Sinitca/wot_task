const FuncUtils = require('./funcUtils')
/*import FuncUtils from './funcUtils'*/

function getAge() {
    return this.age
}

function getAge2(a, b) {
    return this.age * a + b
}

function getSum(a, b, c) {
    return a + b + c + this.age
}

function getDif(a, b, c) {
    return -a - b - c + this.age
}

const person = {
    name: "John",
    age: 42
}
const man = {
    name: "Dima",
    age: 18
}

const errorMessage = "Упс"


describe("bind", () => {
    it("1", () => {
        const result1 = 42
        const result12 = 85
        const result2 = 18
        const result3 = 37
        const result4 = 38
        const result31 = 41
        const result41 = 42
        const bindGetAge1 = FuncUtils.bind(getAge, person)
        const bindGetAge12 = FuncUtils.bind(getAge2, person, 2)
        const bindGetAge2 = FuncUtils.bind(getAge, man)
        const bindGetAge14 = FuncUtils.bind(getAge2, man)
        const bindGetAge13 = FuncUtils.bind(getAge2, man)
        expect(bindGetAge1()).toEqual(result1)
        expect(bindGetAge12(1)).toEqual(result12)
        expect(bindGetAge2()).toEqual(result2)
        expect(bindGetAge13(2, 1)).toEqual(result3)
        expect(bindGetAge14(2, 2)).toEqual(result4)
        expect(bindGetAge13(2, 5)).toEqual(result31)
        expect(bindGetAge14(2, 6)).toEqual(result41)

    })
    it("2", () => {
        const result1 = 20
        let bindGetAge = FuncUtils.bind(getAge2, man)
        bindGetAge = bindGetAge(1, 2)
        expect(bindGetAge).toEqual(result1)
    })
    it("3", () => {
        const result1 = 20
        const result2 = 38
        let bindGetAge = FuncUtils.bind(getAge2, man)
        let bindGetAge2 = FuncUtils.bind(getAge2, man, 2)
        bindGetAge = bindGetAge(1, 2)
        bindGetAge2 = bindGetAge2(2)
        expect(bindGetAge).toEqual(result1)
        expect(bindGetAge2).toEqual(result2)
    })
})
describe("call", () => {
    it("1", () => {
        const result = 48
        const result1 = 27
        expect(FuncUtils.call(getSum, person, 1, 2, 3)).toEqual(result)
        expect(FuncUtils.call(getSum, man, 3, 3, 3)).toEqual(result1)
    })

})
describe("apply", () => {
    it("1", () => {
        const result = 48
        const result1 = 27
        const result2 = 36
        const result12 = 9
        expect(FuncUtils.apply(getSum, person, [1, 2, 3])).toEqual(result)
        expect(FuncUtils.apply(getSum, man, [3, 3, 3])).toEqual(result1)
        expect(FuncUtils.apply(getDif, person, [1, 2, 3])).toEqual(result2)
        expect(FuncUtils.apply(getDif, man, [3, 3, 3])).toEqual(result12)
    })

})

