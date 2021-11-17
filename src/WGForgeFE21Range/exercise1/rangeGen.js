/* global BigInt */
module.exports = function* range(from, to, step) {
   if(typeof from === "string") from = +from
   if(typeof to === "string") to = +to



    if (to !== 0 && !to && to !== BigInt(0)) {
        to = from
        if(typeof from === "bigint"){
            from = BigInt(0)
        }else{
            from = 0
        }

    }

    if (step === undefined) {

        step = from < to ? 1 : -1
    } else {
        step = !step ? 0 : +step
    }
    if(typeof from === "bigint" || typeof to === "bigint"){
        step=BigInt(step)
        to=BigInt(to)
        from=BigInt(from)
    }

    if (from > to) {
        if (step > 0) return []
    } else if (from < to) {
        if (step < 0) return []

    }


    if (from < to) {
        for (let i = from; i < to; i = i + step) {
            yield i
        }
    } else if(from > to) {
        for (let i = from; i > to; i = i + step) {
            yield i
        }
    }else yield []

   /* let length = Math.max(Math.ceil((to - from) / (step || 1)), 0)
    while (length--) {
        yield from
        from = from + step
       /!* from = Math.round((from + step) * 1000) / 1000*!/
    }*/
    /* yield "какого черта! )"*/

}


