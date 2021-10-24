
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
        //4294967296 false
        //4294967295 true
        if(Math.abs(to-from)/Math.abs(step) >4294967295) return 0;
        for (let i = from; i < to; i += step) {
            if (returnArray.length>3294967293){
                break
            }
            returnArray.push(i)
        }
    }
    return returnArray

}


