const pow = require('./pow')
const pow2 = require('./pow2')
const pow1 = require('./pow1')

describe("pow",()=>{
    it("0",()=>{
        const result =1
        expect(pow(2,0)).toEqual(result)
    })
    it("1",()=>{
        const result =2
        expect(pow(2,1)).toEqual(result)
    })
    it("2",()=>{
        const result =4
        expect(pow(2,2)).toEqual(result)
    })
})
describe("pow2",()=>{
    it("0",()=>{
        const result =1
        expect(pow2(2,0)).toEqual(result)
    })
    it("1",()=>{
        const result =2
        expect(pow2(2,1)).toEqual(result)
    })
    it("2",()=>{
        const result =4
        expect(pow2(2,2)).toEqual(result)
    })
})

describe("pow1",()=>{
    it("0",()=>{
        const result =1
        expect(pow1(2,0)).toEqual(result)
    })
    it("2",()=>{
        const result =4
        expect(pow1(2,2)).toEqual(result)
    })
    it("1",()=>{
        const result =2
        expect(pow1(2,1)).toEqual(result)
    })
})
