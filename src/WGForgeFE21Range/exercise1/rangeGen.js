/* global BigInt */
module.exports = function* range(from, to, step) {
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
    if (typeof from === "bigint" || typeof to === "bigint" || typeof step === "bigint") {
        step = BigInt(step)
        to = BigInt(to)
        from = BigInt(from)
    }

    if (from > to) {
        if (step > 0) return []
    } else if (from < to) {
        if (step < 0) return []

    }


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
    } else return []


   /* let length = 0
    let step2=1
    if(typeof to === "bigint" || typeof from === "bigint") {
        step2=BigInt(1)
    }
    if(BigInt((to - from) / (step || step2)) > Number.MAX_SAFE_INTEGER){
        return []
    }
    */


   /* if(Math.max(Math.ceil((to - from) / (step || 1)), 0))*/
   /* length = Math.max(Math.ceil((to - from) / (step || 1)), 0)*/

    /*let length = Math.max(Math.ceil((to - from) / (step || 1)), 0)*/

   /* if (length < 1) return []
    while (length) {
        yield from
        from = from + step
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


