/* global BigInt */
module.exports = function* range(from, to, step) {
    /* return yield undefined*/

    if (typeof from === "string") from = +from
    if (typeof to === "string") to = +to
    if (typeof step === "string") to = +step

    if (to !== 0 && !to && to !== BigInt(0)) {
        to = from
        from = 0
    }

    if (step === undefined) {
        step = from < to ? 1 : -1
    } else {
        step = !step ? 0 : step
    }
    /*if (typeof from === "bigint" || typeof to === "bigint" || typeof step === "bigint") {
        return
        /!*step = BigInt(step)
        to = BigInt(to)
        from = BigInt(from)*!/
    }*/

    if (from > to) {
        if (step > 0) return
    } else if (from < to) {
        if (step < 0) return

    }
    if (from === to) return

    /*
        if (from < to) {
            if (step === 0) {
                yield from
            } else {
                for (let i = from; i < to; i = i + step) {
                    yield i
                }
            }

        } else if (from > to) {
            if (step === 0) {
                yield from
            } else {
                for (let i = from; i > to; i = i + step) {
                    yield i
                }
            }
        } else return []*/


    /* let length = 0
     let step2=1
     if(typeof to === "bigint" || typeof from === "bigint") {
         step2=BigInt(1)
     }*/
    /*if(BigInt((to - from) / (step || 1)) > Number.MAX_SAFE_INTEGER){
        return []
    }*/


    /* if(Math.max(Math.ceil((to - from) / (step || 1)), 0))*/
    /* length = Math.max(Math.ceil((to - from) / (step || 1)), 0)*/

    let length = Math.max(Math.ceil((to - from) / (step || 1)), 0)
    if (length <= 0) return
    if (length < Number.MIN_SAFE_INTEGER) return
    if (length > Number.MAX_SAFE_INTEGER) return
    /* if(!isFinite(length) ) return*/

    /*if(length === 0)  yield from*/
    /* if (length < 1) return*/
    /* */

    if (!isFinite(length) || !isFinite(to) || !isFinite(from) || !isFinite(length)) return

    for(let i = length; i > 0; i-- ){
        yield from
        from = from + step
    }


    /*while (length) {
        /!* if(from < Number.MIN_SAFE_INTEGER)  break*!/

        yield from
        /!* return undefined*!/

        /!* from = from + step*!/
        /!* from = Math.round((from + step) * 1000) / 1000*!/
        /!*if ((from + step) <= Number.MAX_SAFE_INTEGER) {
            from = from + step
        } else if (typeof from !== "bigint" || typeof to !== "bigint" || typeof step !== "bigint") {
            step = BigInt(step)
            to = BigInt(to)
            from = BigInt(from)
            from = from + step
        } else {
            from = from + step
        }*!/


        length = length - 1

        /!* from = Math.round((from + step) * 1000) / 1000*!/
    }*/

    /* yield "какого черта! )"*/

}


