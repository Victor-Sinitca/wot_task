


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

const MyObject2 = {
    bind(func, obj) {
        let funcBind = Date.now().toString()
        obj[funcBind] = func
        const result = obj[funcBind]()
        delete obj[funcBind]
        return function () {
            return result
        }
    },
    call(func, obj) {
        let funcBind = Date.now().toString()
        obj[funcBind] = arguments[0]
        const arg = []
        for (let i = 0; i < arguments.length; i++) {
            if (i > 1) arg.push('arguments[' + i + ']')
        }
        const result = eval('obj[funcBind](' + arg + ')');
        delete obj[funcBind]
        return result
    },
    apply(func, obj, arr) {
        let funcBind = Date.now().toString()
        obj[funcBind] = arguments[0]
        const arg = []
        arr = arr || []
        for (let i = 0; i < arr.length; i++) {
            arg.push('arr[' + i + ']')
        }
        const result = eval('obj[funcBind](' + arg + ')');
        delete obj[funcBind]
        return result
    }
}


function MyFunction (){}
MyFunction.prototype.bind = function (func, obj) {
    let funcBind = Date.now().toString()
    obj[funcBind] = func
    const result = obj[funcBind]()
    delete obj[funcBind]
    return function () {
        return result
    }
}
MyFunction.prototype.call = function (func, obj) {
    let funcBind = Date.now().toString()
    obj[funcBind] = func
    const arg = []
    for (let i = 0; i < arguments.length; i++) {
        if (i > 1) arg.push('arguments[' + i + ']')
    }
    const result = eval('obj[funcBind](' + arg.toString() + ')');
    delete obj[funcBind]
    return result
}
MyFunction.prototype.apply = function (func, obj, arr) {
    let funcBind = Date.now().toString()
    obj[funcBind] = func
    const arg = []
    arr = arr || []
    for (let i = 0; i < arr.length; i++) {
        arg.push('arr[' + i + ']')
    }
    const result = eval('obj[funcBind](' + arg.toString() + ')');
    delete obj[funcBind]
    return result
}



Function.prototype.bind = Function.prototype.bind || function(to){
    // Make an array of our arguments, starting from second argument
    var	partial	= Array.prototype.splice.call(arguments, 1),
        // We'll need the original function.
        fn	= this;
    var bound = function (){
        // Join the already applied arguments to the now called ones (after converting to an array again).
        var args = partial.concat(Array.prototype.splice.call(arguments, 0));
        // If not being called as a constructor
        if (!(this instanceof bound)){
            // return the result of the function called bound to target and partially applied.
            return fn.apply(to, args);
        }
        // If being called as a constructor, apply the function bound to self.
        fn.apply(this, args);
    }
    // Attach the prototype of the function to our newly created function.
    bound.prototype = fn.prototype;
    return bound;
};
Function.prototype.bind = function (func, obj) {
    let myThis=this
    const arg = []
    if(typeof func !== 'function'){
        throw new Error('Упс');
    }
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
        return myThis.apply(func,this instanceof index ? this : obj,arg.concat(bindArgs))
    }
    index.prototype = this.prototype;
    fBound.prototype = new index();
    return fBound;
}
