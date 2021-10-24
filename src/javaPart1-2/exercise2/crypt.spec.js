const crypt = require('./crypt')

describe("crypt",()=>{
    it("1",()=>{
        const code="1254"
        const key="AsFrgW25R9"
        const secret="sFWg"
        expect(crypt.encode(code,key)).toEqual(secret)
        expect(crypt.decode(secret,key)).toEqual(code)
    })
})
