module.exports =function (base, exp) {
    let returnValue=1
    while(exp){
        returnValue *= base
        exp--
    }
    return returnValue
}
