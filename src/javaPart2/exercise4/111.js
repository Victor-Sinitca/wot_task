/*const MyObj={
    bind (func, obj) {
        const myObj=this
        let myF = func
        const arg = []
        for (let i = 0; i < arguments.length; i++) {
            if (i > 1) arg.push(arguments[i])
        }
        let index = function () {
        }
        let fBound = function () {
            let bindArgs = []
            for (let i = 0; i < arguments.length; i++) {
                bindArgs.push(arguments[i])
            }
            return myObj.apply(myF,this instanceof index ? this : obj,arg.concat(bindArgs))
        }
        index.prototype = this.prototype;
        fBound.prototype = new index();
        return fBound;
    },
    call  (func, obj) {
        obj.func = func
        const arg = []
        for (let i = 0; i < arguments.length; i++) {
            if (i > 1) arg.push('arguments[' + i + ']')
        }
        if (obj.func.length > arg.length) {
            while (obj.func.length > arg.length) {
                arg.push(undefined)
            }
        }
        const result = eval('obj.func(' + arg + ')');
        delete obj.func
        return result
    },
    apply  (func, obj, arr) {
        obj.func = func
        const arg = []
        arr = arr || []
        for (let i = 0; i < arr.length; i++) {
            arg.push('arr[' + i + ']')
        }
        const result = eval('obj.func(' + arg + ')');
        delete obj.func
        return result
    }
}
module.exports = MyObj*/
function Function() {
}
Function.prototype.bind = function (func, obj) {
    let myThis=this
    const arg = []
    if(typeof func !== 'function'){
        throw new Error('Упс');
    }
    for (let i = 0; i < arguments.length; i++) {
        if (i > 1) arg.push(arguments[i])
    }
    let fBound = function () {
        let bindArgs = []
        for (let i = 0; i < arguments.length; i++) {
            bindArgs.push(arguments[i])
        }
        let newArg=arg.concat(bindArgs)
        if (!(this instanceof fBound)){
            return myThis.apply(func,obj, newArg);
        }
        myThis.apply(func,this, newArg);
    }
    fBound.prototype = func.prototype;
    return fBound;
}
Function.prototype.call = function (func, obj) {
    if(typeof func !== 'function'){
        throw new Error('Упс');
    }
    obj.func = func
    const arg = []
    for (let i = 0; i < arguments.length; i++) {
        if (i > 1) arg.push('arguments[' + i + ']')
    }
    const result = eval('obj.func(' + arg + ')');
    delete obj.func
    return result
}
Function.prototype.apply = function (func, obj, arr) {
    if(typeof func !== 'function'){
        throw new Error('Упс');
    }
    obj.func = func
    const arg = []
    arr = arr || []
    for (let i = 0; i < arr.length; i++) {
        arg.push('arr[' + i + ']')
    }
    const result = eval('obj.func(' + arg + ')');
    delete obj.func
    return result
}
module.exports = new  Function()
