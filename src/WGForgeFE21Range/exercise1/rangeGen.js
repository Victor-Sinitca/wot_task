module.exports = function* range(from, to, step) {
    if (typeof from === "string") from = +from
    if (typeof to === "string") to = +to
    if (typeof step === "string") step = +step

    if (to !== 0 && !to ) {
        to = from
        from = 0
    }
    if (step === undefined) {
        step = from < to ? 1 : -1
    } else {
        step = !step ? 0 : step
    }
    if (from > to) {
        if (step > 0) return
    } else if (from < to) {
        if (step < 0) return
    }
    let length = Math.max(Math.ceil((to - from) / (step || 1)), 0)
    while (length--) {
        yield from
        from = from + step
    }
}


