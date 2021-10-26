module.exports = {
    bind(func, obj) {
        let funcBind = Date.now().toString()
        obj[funcBind] = func
        const result = obj[funcBind]()
        delete obj[funcBind]
        return function () {
            return result
        }
    },
    call(context) {
        let funcBind = Date.now().toString()
        const newObj = arguments[1]
        newObj[funcBind] = arguments[0]
        const arg = []
        for (let i = 0; i < arguments.length; i++) {
            if (i > 1) arg.push('arguments[' + arguments[i] + ']')
        }
        const result = eval('newObj[funcBind](' + arg + ')');
        delete newObj[funcBind]
        return result
    },
    apply(context) {
        let funcBind = Date.now().toString()
        const newObj = arguments[1]
        newObj[funcBind] = arguments[0]
        const arg = arguments[2]
        const result = eval('newObj[funcBind](' + arg + ')');
        delete newObj[funcBind]
        return result
    }
}
