const partial = require('./partial')
const partial2 = require('./spam')
const add = (x, y) => x + y
const eq = (x) => x
const volume = (x, y, z) => x * y * z
const errorMessage = "Упс"
describe("add", () => {
    it("1", () => {
        const result = 5
        const add2 = partial(add, 2)
        expect(add2(3)).toEqual(result)
    })
    it("vol_10", () => {
        const result = 200
        const vol_10 = partial(volume, 10)
        expect(vol_10(5, 4)).toEqual(result)
    })
    it("vol_10_base", () => {
        const result = 1000
        const vol_10_base = partial(volume, 10, 10)
        expect(vol_10_base(10)).toEqual(result)
    })

})

