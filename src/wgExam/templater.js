const errorMessage = `Nested content is not allowed`

function createAttributes(input) {
    let attributes = []
    const index = input.length - 1
    if (!(input[index] instanceof Templater)
        && typeof input[index] === "object"
        && input[index] !== null) {
        for (let key in input[index]) {
            if (input[index].hasOwnProperty(key)
                && typeof key === "string"
                && (typeof input[index][key] === "string"
                    || typeof input[index][key] === "number"
                    || typeof input[key] === "boolean"))
                attributes.push(` ${key}="${input[index][key]}"`)
        }
    }
    attributes.sort()
    return attributes.join(``) || ``
}


function createHtmlElement(input, element = `div`) {
    let nestedValue = ``
    for (let i = 0; i < input.length; i++) {
        if (input[i] instanceof Templater) {
            nestedValue += input[i].toString()
        } else if (typeof input[i] === `string`) {
            nestedValue += input[i]
        } else if (typeof input[i] === "number" && !isNaN(input[i])) {
            nestedValue += input[i]
        } else if (typeof input[i] === "boolean") {
            // if need to add a nested value as a boolean
            nestedValue += input[i]
        }
    }
    return `<${element}${createAttributes(input)}>${nestedValue}</${element}>`
}

class Templater {
    _string = ``
    div(...input) {
        this._string = this._string + createHtmlElement(input, `div`)
        return this
    }
    span(...input) {
        this._string = this._string + createHtmlElement(input, `span`)
        return this
    }
    p(...input) {
        this._string = this._string + createHtmlElement(input, `p`)
        return this
    }
    br(...input) {
        if (input.length === 0) {
            this._string = this._string + `<br>`
            return this
        }else if (input.length === 1
            && typeof input[0] === "object"
            && !(input[0] instanceof Templater)
            && input[0] !== null){
            this._string = this._string + `<br${createAttributes(input)}>`
            return this
        } else{
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

