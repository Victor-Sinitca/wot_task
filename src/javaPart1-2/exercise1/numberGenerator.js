function argumentValidation(arg) {
    if (typeof arg === "number" &&  !isNaN(arg)) {
        return true
       /* if (arg === Math.round(arg)) {
            return true
        } else throw "invalid function argument"*/
    } else throw "The function requires numeric arguments"
}


module.exports = function range(...arg) {
    if (arg.length) {
        if (arg.length === 1) {
            let endValue = +arg[0]
            if (argumentValidation(endValue) && endValue > 0) {
                const returnArray = []
                for (let i = 0; i < endValue; i++) {
                    returnArray.push(i)
                }
                return returnArray
            }
        } else if (arg.length === 2) {
            let startValue = +arg[0]
            let endValue = +arg[1]
            if (argumentValidation(startValue) && argumentValidation(endValue)) {
                const returnArray = []
                if(startValue>endValue){
                    for (let i = startValue; i > endValue; i--) {
                        returnArray.push(Math.round(i))
                    }
                    return returnArray
                }else if (startValue<endValue){
                    for (let i = startValue; i < endValue; i++) {
                        returnArray.push(i)
                    }
                    return returnArray
                }else throw "Arguments must not be equal"
            }
        } else {
            let startValue = +arg[0]
            let endValue = +arg[1]
            let step=+arg[2]
            if( typeof startValue === "number" && !isNaN(startValue)
                && typeof endValue === "number" && !isNaN(endValue)
                && typeof step === "number" && !isNaN(step)){
                if(step <=0) throw "Arguments  step not correct"
                const returnArray = []
                if(startValue>endValue){
                    for (let i = startValue; i > endValue; i-=step) {
                        returnArray.push(i)
                    }
                    return returnArray
                }else if (startValue<endValue){
                    for (let i = startValue; i < endValue; i+=step) {
                        returnArray.push(i)
                    }
                    return returnArray
                }else throw "Arguments must not be equal"
            }else  throw "invalid function argument"
        }
    } else throw "The function needs arguments to work"
}


