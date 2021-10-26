



module.exports = {
    bind(func, obj) {
        const newObj=obj
        let funcBind = Symbol("funcBind");
        newObj[funcBind]=func
        /*obj.func = func*/
        return function () {
            return newObj[funcBind]()
        }
    },

    call(func, obj, ...rest) {
        const newObj=obj
        let funcBind = Symbol("funcBind");
        newObj[funcBind]=func
        return newObj[funcBind](...rest)
    },
    apply(func, obj, rest) {
        /*obj.func = func*/
        const newObj=obj
        let funcBind = Symbol("funcBind");
        newObj[funcBind]=func
        return newObj[funcBind](...rest)
    }
}

function f(a,b,c) {
    return[a,b,c]

}


