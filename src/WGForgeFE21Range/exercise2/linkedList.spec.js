const LinkedList = require('./linkedList')

function getAllList(list) {
    const array = []
    for (let i of list) {
        array.push(i)
    }
    return array
}

const errorMessage = "Incorrect position"
const errorMessage1 = "The list is empty"
describe("func1", () => {
    it('1', () => {
        const exp = [0, 1, 2, 3]
        const ret0={"next": {"next": {"next": {"next": null, "value": 3}, "value": 2}, "value": 1}, "value": 0}
        const ret3={"next": null, "value": 3}
        const ret2={"next": {"next": null, "value": 3}, "value": 2}
        const list = new LinkedList()
        list.add(0)
        list.add(1)
        list.add(2)
        list.add(3)
        expect(getAllList(list)).toEqual(exp)
        expect(()=> {list.get(-1)}).toThrow(errorMessage)
        expect(list.get(0)).toEqual(ret0)
        expect(list.get(2)).toEqual(ret2)
        expect(list.get(3)).toEqual(ret3)

        expect(()=> {list.get(4)}).toThrow(errorMessage)
    })
    it('2', () => {
        const exp = [3, 0, 1, 2, 3]
        const list = new LinkedList()
        list.add(0)
        list.add(1)
        list.add(2)
        list.add(3)
        list.add(3, 0)
        expect(getAllList(list)).toEqual(exp)
    })
    it('3', () => {
        const exp = [0, 3, 1, 2, 3]
        const list = new LinkedList()
        list.add(0)
        list.add(1)
        list.add(2)
        list.add(3)
        list.add(3, 1)
        expect(getAllList(list)).toEqual(exp)
    })
    it('4', () => {
        const exp = [0, 1, 2, 4, 3]
        const list = new LinkedList()
        list.add(0)
        list.add(1)
        list.add(2)
        list.add(3)
        list.add(4, 3)
        expect(getAllList(list)).toEqual(exp)
    })
    it('5', () => {
        const exp = [0, 1, 2, 3, 4]
        const list = new LinkedList()
        list.add(0)
        list.add(1)
        list.add(2)
        list.add(3)
        list.add(4, 4)
        expect(getAllList(list)).toEqual(exp)
    })
    it('6', () => {
        const exp = [0, 1, 2, 3, 4]
        const list = new LinkedList()
        list.add(0)
        list.add(1)
        list.add(2)
        list.add(3)
        expect(() => {
            list.add(4, -1)
        }).toThrow(errorMessage)
    })
    it('7', () => {
        const exp = [0, 1, 2, 3, 4]
        const list = new LinkedList()
        list.add(0)
        list.add(1)
        list.add(2)
        list.add(3)
        expect(() => { list.add(4, 5)}).toThrow(errorMessage)
    })
    it('8', () => {
        const list = new LinkedList()
        expect(() => {
            list.add(4, 1)
        }).toThrow(errorMessage)
    })
    it('9', () => {
        const list = new LinkedList()
        expect(()=> {list.remove(0)}).toThrow(errorMessage1)
        expect(()=> {list.remove(-1)}).toThrow(errorMessage1)
        expect(()=> {list.remove(1)}).toThrow(errorMessage1)
        list.add(0)
        list.add(1)
        list.add(2)
        expect(getAllList(list)).toEqual([0, 1, 2])
        list.remove(0)
        expect(getAllList(list)).toEqual([1, 2])
        list.add(4,0)
        expect(getAllList(list)).toEqual([4,1,2])
        list.add(4,)
        expect(getAllList(list)).toEqual([4,1,2,4])
        list.remove(3)
        expect(getAllList(list)).toEqual([4,1,2])
        list.add(5,)
        expect(getAllList(list)).toEqual([4,1,2,5])
        expect(()=> {list.remove(-1)}).toThrow(errorMessage)
        expect(()=> {list.remove(4)}).toThrow(errorMessage)
        expect(getAllList(list)).toEqual([4,1,2,5])


       /* expect(() => {
            list.add(4, 1)
        }).toThrow(errorMessage)*/
    })
    it('10', () => {
        const list = new LinkedList()
        list.add(5,0)
        expect(getAllList(list)).toEqual([5])
        list.add(4,0)
        expect(getAllList(list)).toEqual([4,5])
        list.remove(1)
        expect(getAllList(list)).toEqual([4])
        list.remove(0)
        expect(getAllList(list)).toEqual([])
        list.add(5,)
        list.add(6,)
        list.add(7,)
        list.remove(0)
        expect(getAllList(list)).toEqual([6,7])
        expect(list.get(0)).toEqual({value:6, next:{value:7, next:null}})
    })
    it('11', () => {
        const list = new LinkedList()
        list.add(5)
        expect(()=> {list.add(5,null)}).toThrow(errorMessage)
        expect(()=> {list.add(5,NaN)}).toThrow(errorMessage)
        expect(()=> {list.add(5, {})}).toThrow(errorMessage)
        expect(()=> {list.add(5, [])}).toThrow(errorMessage)
        expect(()=> {list.add(5, undefined)}).toThrow(errorMessage)
        expect(()=> {list.add(5, getAllList)}).toThrow(errorMessage)
        expect(()=> {list.add(5, "u8")}).toThrow(errorMessage)
        list.add(1, "1")
        expect(getAllList(list)).toEqual([5,1])
    })

    it('12', () => {
        const list = new LinkedList()
        list.add(1)
        list.add(2)
        list.remove(0)
        list.remove(0)
        expect(getAllList(list)).toEqual([])
        expect(()=> {list.remove(0)}).toThrow(errorMessage1)

    })

    it('13', () => {
        const list = new LinkedList(1,2,3,4,5)

        list.add(1)
        list.add(2)
        list.remove(0)
        list.remove(0)
        expect(getAllList(list)).toEqual([3,4,5,1,2])
        expect(()=> {list.remove(5)}).toThrow(errorMessage)

    })
})

