const errorMessage = `Nested content is not allowed`

function anuF(input,element) {
    let inputString = ``
    let attributes = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] instanceof Templater) {
            inputString += input[i].toString()
        } else if (typeof input[i] === `string`) {
            inputString += input[i]
        } else if (typeof input[i] === "number" && !isNaN(input[i])) {
            inputString += input[i]
        }else if (typeof input[i] === "boolean") {
            inputString += input[i]
        }
    }
    if (!(input[input.length - 1] instanceof Templater)
        && typeof input[input.length - 1] === "object"
        && input[input.length - 1] !== null) {
        for (let key in input[input.length - 1]) {
            if (input[input.length - 1].hasOwnProperty(key)
                && typeof key === "string"
                && (typeof input[input.length - 1][key] === "string"
                    || typeof input[input.length - 1][key] === "number"
                    || typeof input[key] === "boolean"))
                attributes.push(` ${key}="${input[input.length - 1][key]}"`)
        }
    }
    attributes.sort()
    const attributesStr = attributes.join(``)
    return `<${element}${attributesStr}>${inputString}</${element}>`
    /*return {inputString, attributesStr}*/
}

class Templater {
    _string = ``

    div(...input) {
        /*let value = anuF(input)*/
        this._string = this._string + anuF(input,`div`)
        /*this._string = this._string + `<div${value.attributesStr}>${value.inputString}</div>`*/
        return this
    }

    span(...input) {
        /*let value = anuF(input)*/
        this._string = this._string + anuF(input,`span`)
        /*this._string = this._string + `<span${value.attributesStr}>${value.inputString}</span>`*/
        return this
    }

    p(...input) {
        /*let value = anuF(input)*/
        this._string = this._string + anuF(input,`p`)
        /*this._string = this._string + `<p${value.attributesStr}>${value.inputString}</p>`*/
        return this
    }

    br(input) {
        if (input === undefined) {
            this._string = this._string + `<br>`
            return this
        } else if (typeof input === "object"
            && input !== null) {
            const attributes = []
            for (let key in input) {
                if (input.hasOwnProperty(key)
                    && typeof key === "string"
                    && (typeof input[key] === "string"
                        || typeof input[key] === "number"
                        || typeof input[key] === "boolean"))
                    attributes.push(` ${key}="${input[key]}"`)
            }
            attributes.sort()
            const attributesStr = attributes.join(``)
            this._string = this._string + `<br${attributesStr}>`
            return this
        } else {
            throw  errorMessage
        }
    }

    toString() {
        return this._string
    }
}

module.exports = function () {
    return new Templater()
}

