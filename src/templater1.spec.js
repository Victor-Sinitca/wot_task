const Templater = require('./templater1')
const errorMessage = `Nested content is not allowed`
describe('Templater', () => {
    it('create instance', () => {
        expect(typeof Templater).toBe('function')
        expect(() => {
            Templater()
        }).not.toThrow()
    })
    it('has proper methods', () => {
        const template = Templater()
        expect(typeof template.div).toBe('function')
        expect(typeof template.span).toBe('function')
        expect(typeof template.p).toBe('function')
        expect(typeof template.br).toBe('function')
        expect(typeof template.toString).toBe('function')
    })

    it('create with error', () => {
        const nan = NaN
        const Null = null
        const number = 5

        expect(Templater().span(nan).toString()).toBe('<span></span>')
        expect(Templater().span(NaN).toString()).toBe('<span></span>')
        expect(Templater().span(undefined).toString()).toBe('<span></span>')
        expect(Templater().span(Null).toString()).toBe('<span></span>')
        expect(Templater().span(null).toString()).toBe('<span></span>')
        expect(Templater().span(number).toString()).toBe('<span>5</span>')
        expect(Templater().span(152).toString()).toBe('<span>152</span>')
        expect(Templater().span(`152`).toString()).toBe('<span>152</span>')
        expect(Templater().span(true).toString()).toBe('<span>true</span>')

        expect(Templater().br().toString()).toBe('<br>')

        // if you need to add attributes to br
       /* expect(Templater().br({id:45}).toString()).toBe('<br id="45">')*/
        expect(() => {Templater().br({id:45})}).toThrow(errorMessage)


        expect(() => {Templater().br('some content')}).toThrow(errorMessage)
        expect(() => {Templater().br(`11`,{id:45})}).toThrow(errorMessage)
        expect(() => {Templater().br({id:45},`11`)}).toThrow(errorMessage)
        expect(() => {Templater().br(undefined)}).toThrow(errorMessage)
        expect(() => {Templater().br(nan)}).toThrow(errorMessage)
        expect(() => {Templater().br(NaN)}).toThrow(errorMessage)
        expect(() => {Templater().br(Null)}).toThrow(errorMessage)
        expect(() => {Templater().br(null)}).toThrow(errorMessage)
        expect(() => {Templater().br(number)}).toThrow(errorMessage)
        expect(() => {Templater().br(152)}).toThrow(errorMessage)
        expect(() => {Templater().br(152).toString()}).toThrow(errorMessage)
        expect(() => {Templater().div(
            Templater().span(152), Templater().p(152), Templater().br(152)
        )}).toThrow(errorMessage)
    })


    it('create empty span', () => {
        const template = Templater()
        template.span()
        expect(template.toString()).toBe('<span></span>')
    })
    it('create empty div', () => {
        const template = Templater()
        template.div()
        expect(template.toString()).toBe('<div></div>')
    })
    it('create empty p', () => {
        const template = Templater()
        template.p()
        expect(template.toString()).toBe('<p></p>')
    })
    it('create empty br', () => {
        const template = Templater()
        template.br()
        expect(template.toString()).toBe('<br>')
    })

    it('create empty toString', () => {
        const template = Templater()
        expect(template.toString()).toBe('')
    })
    it('has proper methods and value', () => {
        const template = Templater()
        template.span(`hello`)
        expect(template.toString()).toBe('<span>hello</span>')
    })
    it('has proper methods and any values', () => {
        const template = Templater()
        const template2 = Templater()
        template.span(`hello`)
        template.div(`div`)
        template.p(`p`)
        template.br()
        template2.div(template, {id:`123`})
        expect(template.toString()).toBe('<span>hello</span><div>div</div><p>p</p><br>')
        expect(template2.toString()).toBe('<div id="123"><span>hello</span><div>div</div><p>p</p><br></div>')
    })

    it('renders html', () => {
        expect(Templater().span().toString()).toBe('<span></span>')
        expect(Templater().br().toString()).toBe('<br>')
        expect(Templater().span(`span`).div(`div`).p(`p`).toString())
            .toBe('<span>span</span><div>div</div><p>p</p>')

    })
    it('renders error', () => {
        expect(() => {
            Templater().br('some content')
        }).toThrow()
        expect(() => {
            Templater().span(`span`).br('some content')
        }).toThrow()
        expect(() => {
            Templater().br('some content').span(`span`)
        }).toThrow(errorMessage)
    })

    it('supports nesting, chaining', () => {
        expect(
            Templater().span('Hello').span('World').toString()
        ).toBe('<span>Hello</span><span>World</span>')

        expect(
            Templater().p(
                Templater().span('nested'),
                Templater().span('span')
            ).toString()
        ).toBe('<p><span>nested</span><span>span</span></p>')

        expect(
            Templater().p(
                {id:`345`},152,`152`,null,undefined,NaN,
                Templater().span('nested',{id:456}),
                Templater().span('span')
            ).toString()
        ).toBe('<p>152152<span id="456">nested</span><span>span</span></p>')




        expect(() => {
            Templater().br('some content')
        }).toThrow()
    })
    it('tags has attributes', () => {
        expect(
            Templater().div('Yeah!', {id: "header", class: "awesome"}).toString()
        ).toBe('<div class="awesome" id="header">Yeah!</div>')
    })
    it('tags has attributes11', () => {
        expect(
            Templater().div( {id: "header", class: "awesome"}).toString()
        ).toBe('<div class="awesome" id="header"></div>')
    })


    it('12121', () => {
        const template = Templater().div(
            Templater().p('Hello'),
            Templater().p('World'),
            Templater().br(),
            Templater().br(),
            {id: "header", class: "awesome"}
        )
        expect(template.toString()).toBe('<div class="awesome" id="header"><p>Hello</p><p>World</p><br><br></div>')
    })
    it('21', () => {
        const template = Templater().div(
            Templater().p('Hello'),
            Templater().p('World').div(`div`).toString(),
            Templater().br(),
            Templater().br(),
        ).p(`p`)
        expect(template.toString()).toBe('<div><p>Hello</p><p>World</p><div>div</div><br><br></div><p>p</p>')
    })
    it('3', () => {
        expect(Templater().toString()).toBe('')
    })
})
