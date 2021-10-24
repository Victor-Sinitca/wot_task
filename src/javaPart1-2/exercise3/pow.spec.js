const pow = require('./pow')
const pow2 = require('./pow2')

describe("pow",()=>{
    it("1",()=>{
        const result =4
        expect(pow(2,2)).toEqual(result)
    })
})
describe("pow2",()=>{
    it("1",()=>{
        const result =4
        expect(pow2(2,2)).toEqual(result)
    })
})
