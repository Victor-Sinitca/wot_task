/* global BigInt */
const range = require('./rangeGen')

function forOfRange(range, ...arg){
    const array=[]
    for(let i of range(...arg)){
        array.push(i)
    }
    return array
}
range(10)
describe("func1", ()=>{
    it('1', () => {
        const exp=[0,1,2,3,4,5,6,7,8,9]
        expect(forOfRange(range,10)).toEqual(exp)
    })
    it('2', () => {
        const exp=[0,-1,-2,-3,-4,-5,-6,-7,-8,-9]
        expect(forOfRange(range,-10)).toEqual(exp)
    })
    it('3', () => {
        const exp=[]
        expect(forOfRange(range,0)).toEqual(exp)
    })
    it('4', () => {
        const exp=[0]
        expect(forOfRange(range,1)).toEqual(exp)
    })
    it('5', () => {
        const exp=[]
        expect(forOfRange(range)).toEqual(exp)
    })
    })



describe("func2", ()=>{
    it('1', () => {
        const exp=[10,11,12,13,14,15,16,17,18,19]
        expect(forOfRange(range,10,20)).toEqual(exp)
    })
    it('2', () => {
        const exp=[20,19,18,17,16,15,14,13,12,11]
        expect(forOfRange(range,20,10)).toEqual(exp)
    })
    it('3', () => {
        const exp=[-5,-4,-3,-2,-1,0,1,2,3,4]
        expect(forOfRange(range,-5,5)).toEqual(exp)
    })
    it('4', () => {
        const exp=[5,4,3,2,1,0,-1,-2,-3,-4]
        expect(forOfRange(range,5,-5)).toEqual(exp)
    })
    it('5', () => {
        const exp=[-2.5,-1.5,-0.5,0.5,1.5]
        expect(forOfRange(range,-2.5,2.5)).toEqual(exp)
    })
    /*it('6', () => {
        const exp=[-2.1,-1.1,-0.1,0.9,1.9]
        expect(forOfRange(range,-2.1,2.9)).toEqual(exp)
    })*/
    it('7', () => {
        const exp=[]
        expect(forOfRange(range,8,8)).toEqual(exp)
    })
    })

describe("func3", ()=> {
    it('1', () => {
        const exp=[1,2,3,4]
        expect(forOfRange(range,1,5,1)).toEqual(exp)
    })
    it('2', () => {
        const exp=[]
        expect(forOfRange(range,5,1,1)).toEqual(exp)
    })
    it('2-1', () => {
        const exp=[5,4,3,2]
        expect(forOfRange(range,5,1,-1)).toEqual(exp)
    })
    it('3', () => {
        const exp=[-5,-3,-1,1]
        expect(forOfRange(range,-5,2,2)).toEqual(exp)
    })
    it('3-1', () => {
        const exp=[]
        expect(forOfRange(range,5,-2,2)).toEqual(exp)
    })
    it('3-2', () => {
        const exp=[5,3,1,-1]
        expect(forOfRange(range,5,-2,-2)).toEqual(exp)
    })
    it('4', () => {
        const exp=[-5,-4,-3,-2,-1]
        expect(forOfRange(range,-5,0,1)).toEqual(exp)
    })
   /* it('5', () => {
        const exp=[-1,-0.7,-0.4,-0.1,0.2,0.5,0.8]
        expect(range2(-1,1,0.3)).toEqual(exp)
    })
    it('6', () => {
        const exp=[1,0.7,0.4,0.1,-0.2,-0.5,-0.8]
        expect(range2(1,-1,-0.3)).toEqual(exp)
    })*/
    it('7', () => {
        const exp=[]
        expect(forOfRange(range,1,1,0.3)).toEqual(exp)
    })
    /*it('8', () => {
        const exp=[-10,-9.7,-9.4,-9.1,-8.8,-8.5,-8.2]
        expect(range2(-10,-8,0.3)).toEqual(exp)
    })*/
    it('9', () => {
        const exp=[-10,]
        expect(forOfRange(range,-10,-8,20)).toEqual(exp)
    })
   /* it('10', () => {
        const exp=[BigInt(10),BigInt(8),BigInt(6),BigInt(4),
            BigInt(2),BigInt(0),BigInt(-2),BigInt(-4),BigInt(-6)]
        const big=BigInt(10)
        expect(range(big,-8,2)).toEqual(exp)
    })*/
   /* it('10-1', () => {
        const exp=[]
        const big=BigInt(10)
        expect(range(big,-8,0.5)).toEqual(exp)
    })*/
    it('11', () => {
        const exp=[0,1,2,3,4]
        expect(forOfRange(range,5,undefined,undefined)).toEqual(exp)
    })
    it('12', () => {
        const exp=[]
        expect(forOfRange(range,5,undefined,0)).toEqual(exp)
    })
    /*it('12-3', () => {
        const exp=[5]
        expect(forOfRange(range,5,7,Infinity)).toEqual(exp)
    })*/
    it('12-4', () => {
        const exp=[]
        expect(forOfRange(range,5,Infinity,null)).toEqual(exp)
    })
    it('13', () => {
        const exp=[]
        expect(forOfRange(range,-5,undefined,null)).toEqual(exp)
    })
    it('14', () => {
        const exp=[20,25,30,35,40,45]
        expect(forOfRange(range,20,50,5)).toEqual(exp)
    })

    it('15', () => {
        const exp=[]
        expect(forOfRange(range,-1,-2,"0")).toEqual(exp)
    })

    /*it('16', () => {
        const exp=[-5]
        expect(forOfRange(range,-5,7,Infinity)).toEqual(exp)
    })*/
   /* it('17', () => {
        const exp=[5]
        expect(forOfRange(range,5,Infinity,Infinity)).toEqual(exp)
    })*/
    /*it('17-1', () => {
        const exp=[]
        expect(forOfRange(range,5,-Infinity,Infinity)).toEqual(exp)
    })
    it('18', () => {
        const exp=[]
        expect(forOfRange(range,Infinity,10,Infinity)).toEqual(exp)
    })
    it('21', () => {
        const exp=[]
        expect(forOfRange(range,Infinity,-Infinity,Infinity)).toEqual(exp)
    })
    it('20-1', () => {
        const exp=[]
        expect(forOfRange(range,-Infinity,Infinity,-Infinity)).toEqual(exp)
    })

    it('19', () => {
        const exp=[]
        expect(forOfRange(range,Infinity,Infinity,Infinity)).toEqual(exp)
    })
    it('20', () => {
        const exp=[-Infinity]
        expect(forOfRange(range,-Infinity,Infinity,Infinity)).toEqual(exp)
    })

    it('21-33', () => {
        const exp=[Infinity]
        expect(forOfRange(range,Infinity,-Infinity,-Infinity)).toEqual(exp)
    })
    it('21-1', () => {
        const exp=[]
        expect(forOfRange(range,Infinity,Infinity)).toEqual(exp)
    })
    it('21-2', () => {
        const exp=[]
        expect(forOfRange(range,-Infinity,-Infinity)).toEqual(exp)
    })*/
/*    it('21-3', () => {
        const exp=[]
        expect(range(-Infinity)).toEqual(exp)
    })*/
    it('22', () => {
        const exp=[]
        expect(forOfRange(range,undefined,undefined,undefined)).toEqual(exp)
    })
    it('23', () => {
        const exp=[]
        expect(forOfRange(range,1,3,0)).toEqual(exp)
    })
    it('24', () => {
        const exp=[]
        expect(forOfRange(range,range(1,3,1))).toEqual(exp)
    })
/*    it('25', () => {
        const exp=[]

        expect(forOfRange(range,429496729)).toEqual(exp)
    })*/
})


