function caring (func, arg){
    let length = arg.length
    function car() {

    }
    for(let i = 0; i<length; i++){

    }

}

module.exports = function () {
    return{
        bind(func, obj) {
            let funcBind = Date.now().toString()
            obj[funcBind]=func
            const result=obj[funcBind]()
            delete  obj[funcBind]
            return function () {
                return result
            }
        },
        call() {
            let funcBind = Date.now().toString()
            const newObj = arguments[1]
            newObj[funcBind]=arguments[0]
            const arg=[]
            for(let i=0; i<arguments.length; i++){
                if(i>1) arg.push(arguments[i])
            }
            const result = newObj[funcBind](...arg)


            delete  newObj[funcBind]
            return result
        },
        apply() {
            let funcBind = Date.now().toString()
            const newObj = arguments[1]
            newObj[funcBind]=arguments[0]
            const arg=arguments[2]


            const result = newObj[funcBind](...arg)


            delete  newObj[funcBind]
            return result
        }
}
}()

