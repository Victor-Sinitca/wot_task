function pow (base, exp) {
    let returnValue=1
    while(exp){
        returnValue *= base
        exp--
    }
    return returnValue
}
module.exports = pow
