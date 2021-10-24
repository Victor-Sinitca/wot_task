
const error="Уупс!"
module.exports = function range(from, to, step) {

    if (from !==0 && !from) return []
    if (to !== 0 && !to && from <= 0) return []

    if (to !== 0 && !to) {
        to = from
        from = 0
    }
    const returnArray = []

    if (from > to) {

        if(!step ) step =-1
        if(step >0) return []
        /*if(Math.abs(from-to)/Math.abs(step) >1000) throw error;*/
        for (let i = from; i > to; i += step) {
            returnArray.push(i)
        }
    } else if (from < to) {
        if(!step ) step =1
        if(step < 0) return []
        //10000000000    false
        //1000000000     true
        if(Math.abs(to-from)/Math.abs(step) >3999999999) return [];
        for (let i = from; i < to; i += step) {
            returnArray.push(i)
        }
    }
    return returnArray

}


