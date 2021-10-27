const keyValid = (key) => {
    const reg = /^[a-zA-Z0-9]+$/
    const set = new Set(key)
    return typeof key === "string" && key.length === 10 && reg.test(key)
        && key.length === set.size
}
const codeValid = (code) => {
    code = +code
    return isFinite(code);
}
const keyError="error key"
function crypt() {
    const encode = (code, key) => {
        if(!keyValid(key))  throw keyError
        if (codeValid(code)) {
            let codeString = '' + code
            let secret = ''
            for (let el of codeString) {
                secret += key[+el]
            }
            return secret
        }
    }
    const decode = (secret, key) => {
        if(!keyValid(key))  throw keyError
        if(typeof secret === "string"){
            let code=""
            for (let el of secret) {
                code += key.indexOf(el)
            }
            return code
        }
    }
    return {encode, decode}
}
module.exports=crypt()


