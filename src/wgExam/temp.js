

function Templater () {
    this.html = ''
    this.getAttributesFromParams= function(attributesConf) {
        if (typeof attributesConf === 'object' && attributesConf !== null && !(attributesConf instanceof Templater)) {
            return Object.keys(attributesConf).sort().map(key => `${key}="${attributesConf[key]}"`).join(' ')
        }

        return ''
    }

    this.parsArgs = function (args = []) {
        const attributes = this.getAttributesFromParams(args[args.length - 1])
        let contentParams = args
        if (attributes) {
            contentParams.pop()
        }
        const content = contentParams.map(p => {
            if (p instanceof Templater) return p.html

            return p
        }).join('')

        return {
            content,
            attributes
        }
    }

    this.div= function(...args) {
        const { content, attributes } = this.parsArgs(args)
        this.html += attributes ? `<div ${attributes}>${content}</div>` : `<div>${content}</div>`

        return this
    }

    this.span= function(...args) {
        const { content, attributes } = this.parsArgs(args)
        this.html += attributes ? `<span ${attributes}>${content}</span>` : `<span>${content}</span>`

        return this
    }

    this.br= function(...args) {
        const { attributes, content } = this.parsArgs(args)

        if (content) throw new Error(`Nested content is not allowed`)

        this.html += attributes ? `<br ${attributes}>` : `<br>`

        return this
    }

    this.p= function(...args) {
        const { content, attributes } = this.parsArgs(args)
        this.html += attributes ? `<p ${attributes}>${content}</p>` : `<p>${content}</p>`

        return this
    }

    this.toString= function() {
        return this.html
    }
}
 module.exports = function () {
     return new Templater()
 }
