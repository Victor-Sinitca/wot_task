const Templater = require('./templater')


test('create instance', () => {
    expect(typeof Templater).toBe('function')
    expect(() => {
        Templater()
    }).not.toThrow()
})
test('has proper methods', () => {
    const template = Templater()
    expect(typeof template.div).toBe('function')
    expect(typeof template.br).toBe('function')
})
test('renders html', () => {
    expect(Templater().span().toString()).toBe('<span></span>')
    expect(Templater().br().toString()).toBe('<br>')
})
test('supports nesting, chaining', () => {
    expect(
        Templater().span('Hello').span('World').toString()
    ).toBe('<span>Hello</span><span>World</span>')
    expect(
        Templater().p(
            Templater().span('nested'),
            Templater().span('span')
        ).toString()
    ).toBe('<p><span>nested</span><span>span</span></p>')
    expect(() => {
        Templater().br('some content')
    }).toThrow()
})
test('tags has attributes', () => {
    expect(
        Templater().div('Yeah!', {id: "header", class: "awesome"}).toString()
    ).toBe('<div class="awesome" id="header">Yeah!</div>')
})




const array = [
    {id: 123,name: `wwww`},
    {id: 123,name: `wwww`},
    {id: 123,name: `wwww`},
    {id: 123,name: `wwww`}
]

const axios = require('axios');
test('read array', async () => {

    const date = axios.get("http://api.vozim.by/?r=aping/ratesJson").then(({data})=>data)

    expect(Templater().div('Yeah!', {id: "header", class: "awesome"}).toString()
    ).toBe('<div class="awesome" id="header">Yeah!</div>')
})
