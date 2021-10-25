const pipe = require('./pipe')

const add = (y) => (x) => x + y
const sub = (y) => (x) => x - y
const mul = (y) => (x) => x * y
const div = (y) => (x) => x / y

describe("pipe", () => {
    it("1", () => {
        const result= 74
        const solve=pipe([add(100),mul(3),div(4),sub(1)])
        expect(solve(0)).toEqual(result)
        /*expect(add(100)(mul(3)(div(4)(sub(1)(0))))).toEqual(result)*/
        /*expect(sub(1)(div(4)(mul(3)(add(100)(0))))).toEqual(result)*/

    })
})


/*
describe("pow2",()=>{
    it("1",()=>{
        const result =4
        expect(pow2(2,2)).toEqual(result)
    })
})
*/
