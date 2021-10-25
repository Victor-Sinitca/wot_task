module.exports = function range(from, to, step) {
    from = +from
    to = +to

    if (from !== 0 && !from) return []
    if (to !== 0 && !to) {
        if(from <= 0) return []
        to = from
        from = 0
    }

    if (step === undefined) {
        step= from < to? 1 : -1
    } else {
        step = !step? 0 : +step
    }


    if (from > to) {
        if (!isFinite(step)) return [from]
        if (step > 0) return []
    } else if (from < to) {
        if (step < 0) return []
        if (!isFinite(step)) return [from]
    }


    let length = Math.max(Math.ceil((to - from) / (step || 1)), 0)
    const returnArray = Array(length);
    let index = 0
    while (length--) {
        returnArray[index++] = from
        from += step
    }
    return returnArray
}


