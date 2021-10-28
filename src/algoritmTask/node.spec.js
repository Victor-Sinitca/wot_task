import {
    levelOrderTraversalRec,
    postOrderTraversalRec, levelOrderTraversalNoRec,
    preorderTraversalRec,
    preorderTraversalNoRec, postOrderTraversalNoRec, allOrderTraversalsRec, Queue, levelOrderTraversalRec1
} from "./treeTraversal1";
const {TextEncoder, TextDecoder} = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
const jsdom = require("jsdom");
const {JSDOM} = jsdom;

const dom = new JSDOM(`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
        <div>
            <h1>
                <span>
                
                </span>        
            </h1>
            <h2>
                <a>
                
                </a>        
            </h2>
            <h3>
                <b>
                
                </b>          
            </h3>    
        </div>
        <label>
        
        </label>   
    </body>
</html>
`);
describe('node', () => {
    it('preorder traversal', () => {
        expect(preorderTraversalRec(dom.window.document)).toBe('HTML,HEAD,META,TITLE,BODY,DIV,H1,SPAN,H2,A,H3,B,LABEL')
    })
    it('post order traversal', () => {
        expect(postOrderTraversalRec(dom.window.document)).toBe('META,TITLE,HEAD,SPAN,H1,A,H2,B,H3,DIV,LABEL,BODY,HTML')
    })
    it('level order traversal', () => {
        expect(levelOrderTraversalRec(dom.window.document)).toBe('HTML,HEAD,BODY,META,TITLE,DIV,LABEL,H1,H2,H3,SPAN,A,B')
    })
    it('level order traversalRec1', () => {
        expect(levelOrderTraversalRec1(dom.window.document)).toBe('HTML,HEAD,BODY,META,TITLE,DIV,LABEL,H1,H2,H3,SPAN,A,B')
    })
    it('preorder traversal1', () => {
        expect(allOrderTraversalsRec(dom.window.document).preorder).toBe('HTML,HEAD,META,TITLE,BODY,DIV,H1,SPAN,H2,A,H3,B,LABEL')
    })
    it('post order traversal1', () => {
        expect(allOrderTraversalsRec(dom.window.document).postOrder).toBe('META,TITLE,HEAD,SPAN,H1,A,H2,B,H3,DIV,LABEL,BODY,HTML')
    })
    it('level order traversal1', () => {
        expect(allOrderTraversalsRec(dom.window.document).levelOrder).toBe('HTML,HEAD,BODY,META,TITLE,DIV,LABEL,H1,H2,H3,SPAN,A,B')
    })
    it('preorder traversal no rec', () => {
        expect(preorderTraversalNoRec(dom.window.document)).toBe('HTML,HEAD,META,TITLE,BODY,DIV,H1,SPAN,H2,A,H3,B,LABEL')
    })
    it('post order traversal no rec', () => {
        expect(postOrderTraversalNoRec(dom.window.document)).toBe('META,TITLE,HEAD,SPAN,H1,A,H2,B,H3,DIV,LABEL,BODY,HTML')
    })
    it('level order traversal no rec', () => {
        expect(levelOrderTraversalNoRec(dom.window.document)).toBe('HTML,HEAD,BODY,META,TITLE,DIV,LABEL,H1,H2,H3,SPAN,A,B')
    })
    it('queue1', () => {
        const queue1= new Queue()
        const queue2= new Queue(...[1,2,3,4,5])
        expect(queue2.length).toBe(5)
        expect(queue2.takeAll()).toStrictEqual([1, 2, 3, 4,5])
        expect(queue1.length).toBe(0)
        queue1.put(1)
        expect(queue1.length).toBe(1)
        queue1.put(2)
        expect(queue1.length).toBe(2)
        queue1.put(3)
        queue1.put(4)
        expect(queue1.takeAll()).toStrictEqual([1, 2, 3, 4])
        expect(queue1.length).toBe(4)
        expect(queue1.take()).toBe(1)
        expect(queue1.length).toBe(3)
        expect(queue1.take()).toBe(2)
        expect(queue1.take()).toBe(3)
        expect(queue1.take()).toBe(4)
        expect(queue1.take()).toBe(null)
        queue1.put(1)
        queue1.put(2)
        queue1.put(3)
        expect(queue1.takeAll()).toStrictEqual([1, 2, 3])
        expect(queue1.take()).toBe(1)
        expect(queue1.take()).toBe(2)
        expect(queue1.take()).toBe(3)
    })
})
