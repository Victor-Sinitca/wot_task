module.exports =function (base, exp) {
    let returnValue=1
    for (let i=0; i<exp; i++){
        returnValue *= base
    }
    return returnValue
}
