function pow(base, exp) {
    if(exp === 0) return 1
    if (exp === 1) {
        return base;
    } else {
        return base * pow(base, exp - 1);
    }
}
module.exports=pow
