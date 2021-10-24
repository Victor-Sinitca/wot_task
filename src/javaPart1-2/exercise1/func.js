module.exports = function (from, to = 0, step = 1) {

    if (to === 0) {
        to = from
        from = 0
    }
    return Array.apply(null,{
        length: Math.abs((to-from))/step}).map((e,i)=>(from +i*step))
    }
