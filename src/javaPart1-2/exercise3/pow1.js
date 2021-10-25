function pow(base, exp) {
    if (exp === 1) {
        return exp;
    } else {
        return exp * pow(exp, exp - 1);
    }
}
module.exports=pow
