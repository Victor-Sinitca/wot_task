const errorMessage = `Nested content is not allowed`
const exampleHtmlElements = [
    {
        htmlEl: ``,
        htmlAttributes: [],
        nestedValue: []
    }
]

class Templater {
    htmlElements = []
    div(...input) {
        this.htmlElements.push(createHtmlElement(input, `div`))
        return this
    }
    span(...input) {
        this.htmlElements.push(createHtmlElement(input, `span`))
        return this
    }
    p(...input) {
        this.htmlElements.push(createHtmlElement(input, `p`))
        return this
    }
    br(...input) {
        if (input.length === 0) {
            this.htmlElements.push({htmlEl: `br`, htmlAttributes: [], nestedValue: []})
            return this
        }

        // if you need to add attributes to br
       /* else if (input.length === 1
            && typeof input[0] === "object"
            && !(input[0] instanceof Templater)
            && input[0] !== null) {
            this.htmlElements.push({htmlEl: `br`, htmlAttributes: createAttributes(input), nestedValue: []})
            return this
        }*/
        else {
            throw  errorMessage
        }
    }
    toString() {
        let stringOut = ``
        this.htmlElements.forEach((value, index, array) => {
            if (value.htmlEl === `br`) {
                stringOut += `<br${returnAttributesToString(value.htmlAttributes)}>`
            } else if (value.htmlEl === `p` || value.htmlEl === `span` || value.htmlEl === `div`) {
                stringOut += `<${value.htmlEl}${returnAttributesToString(value.htmlAttributes)}>${returnNestedValueToString(value.nestedValue)}</${value.htmlEl}>`
            }
        })
        return stringOut

    }
}

module.exports = function () {
    return new Templater()
}

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
                attributes.push({key: key, value: input[index][key]})
        }
    }

    attributes.sort(function (a, b) {
        if (a.key > b.key) {
            return 1; }
        if (a.key < b.key) {
            return -1; }
        return 0;

    })
    return attributes
}

function createHtmlElement(input, element = `div`) {
    let nestedValue = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] instanceof Templater) {
            const array = JSON.parse(JSON.stringify(input[i].htmlElements))
            nestedValue = nestedValue.concat(array)
            /*nestedValue.push(array)*/
        } else if (typeof input[i] === `string`) {
            nestedValue.push(input[i])
        } else if (typeof input[i] === "number" && !isNaN(input[i])) {
            nestedValue.push(`` + input[i])
        } else if (typeof input[i] === "boolean") {
            // if need to add a nested value as a boolean
            nestedValue.push(`` + input[i])
        }
    }

    return {
        htmlEl: element,
        htmlAttributes: createAttributes(input),
        nestedValue: nestedValue
    }
}

function returnAttributesToString(attributes) {
    let returnAttributes = ``
    attributes.forEach((value, index, array) => {
        returnAttributes += ` ${value.key}="${value.value}"`
    })
    return returnAttributes
}

function returnNestedValueToString(nestedValue) {
    let returnNestedValue = ``
    nestedValue.forEach((value) => {
        if(typeof value === "string"){
            returnNestedValue += value
        } else if (Array.isArray(value)) {
            returnNestedValue += returnNestedValueToString(value)
        } else if (typeof value === "object" && value !== null) {
            if (value.htmlEl === `br`) {
                returnNestedValue += `<br${returnAttributesToString(value.htmlAttributes)}>`
            } else if (value.htmlEl === `p` || value.htmlEl === `span` || value.htmlEl === `div`) {
                returnNestedValue += `<${value.htmlEl}${returnAttributesToString(value.htmlAttributes)}>${returnNestedValueToString(value.nestedValue)}</${value.htmlEl}>`
            }
        }
    })
    return returnNestedValue
}
