



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


function bind() {
    let method = this;
    let args = Array.prototype.slice.call(arguments, 1);

    return function bound() {
        let _args = args.concat(Array.prototype.slice.call(arguments));
        if (!(this instanceof bound))
            return method.apply(thisArg, _args);

        let __args = [];
        for (let i = 0, len = _args.length; i < len; i++)
            __args.push('_args[' + i + ']');

        return eval('new method(' + __args.join(',') + ')');
    };
}
