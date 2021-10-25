import {answer} from "./sand";


describe('node', () => {
    it('1', () => {
        expect(answer).toBe(true)
    })
    it('2', () => {
        expect(typeof {name:"Lena"}).toBe("object")
    })
    it('3', () => {
        expect(typeof [0,1]).toBe("object")
    })
    it('4', () => {
        expect(typeof null).toBe("object")
    })
    it('5', () => {
        expect(String([1, [21,22],3])).toBe("1,21,22,3")
    })
    it('6', () => {
        expect(String([1, [21,22,23,24,[251,252,253],26],3,4,5,[61,62,63]]).split(`,`))
            .toStrictEqual(["1", "21", "22", "23", "24", "251", "252", "253", "26", "3", "4", "5", "61", "62", "63"])
    })
    it('7', () => {
        expect(String([1, [{name:`Olga`},22],3])).toBe("1,[object Object],22,3")
    })
    it('8', () => {
        const bigNumber = 5
        const str="0x11"
        expect(bigNumber.toLocaleString("ar-SA")).toBe("٥")
        expect(+str).toBe(17)
    })
})
