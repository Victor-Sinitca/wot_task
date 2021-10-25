module.exports = function range(from, to, step) {
    if (from !== 0 && !from) return []
    if (to !== 0 && !to && from <= 0) return []

    if (to !== 0 && !to) {
        to = from
        from = 0
    }

    let length = Math.max(Math.ceil((to - from) / (step || 1)), 0)
    let returnArray = Array(length);
    let index = 0
    if (from > to) {
        if (!step) step = -1
        if (step > 0) return []
        for (let i = from; i > to; i += step) {
            returnArray[index] = i
            index++
            if (index >= leng) break
        }
    } else if (from < to) {
        if (!step) step = 1
        if (step < 0) return []
        for (let i = from; i < to; i += step) {
            returnArray[index] = i
            index++
            if (index >= leng) break
        }
    }
    /*returnArray.length = index*/
    return returnArray

}


