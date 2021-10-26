const carry = require('./carry')


const pointer = (x, y,z) =>[x,y,z]
const carried=carry(pointer)

const errorMessage = "Упс"

describe("add", () => {
    it("1", () => {
        const result = [1,2,3]
        expect(carried(1)(2)(3)).toEqual(result)
    })
    it("2", () => {
        const result = [1,2,3]
        expect(carried(1,2)(3)).toEqual(result)
    })
    it("3", () => {
        const result = [1,2,3]
        expect(carried(1)(2,3)).toEqual(result)
    })

})

