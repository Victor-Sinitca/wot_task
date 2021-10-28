// реализовал очередь, чтобы не использовать массив для обхода в ширину
export class Queue {
    _head = null
    _tail = null
    _length = 0

    constructor(...data) {
        if (data) {
            data.forEach(value => {
                this.put(value)
            })
        }
    }

    put(date = null) {
        if (!this._head) {
            const element = {
                nextElement: null,
                prevElement: null,
                date: date
            }
            this._head = element
            this._tail = element

        } else {
            const element = {
                nextElement: this._head,
                prevElement: null,
                date: date
            }
            this._head.prevElement = element
            this._head = element
        }
        this._length += 1
    }

    take() {
        if (this._tail) {
            const returnElement = this._tail
            if (this._tail.prevElement) {
                this._tail = this._tail.prevElement
                this._tail.nextElement = null
            } else {
                this._head = null
                this._tail = null
            }
            this._length -= 1
            return returnElement.date
        }
        return null
    }

    get length() {
        return this._length
    }

    takeAll() {
        if (this._tail) {
            const arr = []
            let elem = this._tail
            while (elem) {
                arr.push(elem.date)
                elem = elem.prevElement
            }
            return arr
        }
    }
    takeAllAndClear() {
        if (this._tail) {
            const arr = []
            let elem = this._tail
            while (elem) {
                arr.push(elem.date)
                elem = elem.prevElement
            }
            this._head = null
            this._tail = null
            this._length = 0
            return arr
        }
    }
}

//прямой обход в глубину с рекурсией
export const preorderTraversalRec = (date) => {
    let preorder = []
    function searchNodes(node) {
        if (node.tagName) preorder.push(node.tagName)
        if (node.firstElementChild) {
            let nextNode = node.firstElementChild
            while (nextNode) {
                searchNodes(nextNode)
                nextNode = nextNode.nextElementSibling
            }
        }
    }
    searchNodes(date)
    return preorder.join(`,`)
}
// обратный обход в глубину с рекурсией
export const postOrderTraversalRec = (date) => {
    let postOrder = []
    function searchNodes(node) {
        if (node.firstElementChild) {
            let nextNode = node.firstElementChild
            while (nextNode) {
                searchNodes(nextNode)
                postOrder.push(nextNode.tagName)
                nextNode = nextNode.nextElementSibling
            }
        }
    }
    searchNodes(date)
    return postOrder.join(`,`)
}

//обход в ширину с рекурсией
export const levelOrderTraversalRec = (date) => {
    let levelOrder = []
    let queue = new Queue(date);
    function traversal() {
        if(queue.length){
            let node = queue.take();
            if (node.tagName) levelOrder.push(node.tagName)
            if (node.firstElementChild) {
                let nodeElem=node.firstElementChild
                while (nodeElem){
                    queue.put(nodeElem);
                    nodeElem=nodeElem.nextElementSibling
                }
            }
            traversal()
        }
    }
    traversal()
    return levelOrder.join(`,`)
}

//обход в ширину на основе обхода в глубину с рекурсией
export const levelOrderTraversalRec1 = (date) => {
    let levelOrder = ``
    let mass = []
    let level = 0
    function searchNodes(node) {
        if (node.tagName) {
            if (!mass[level]) {
                mass[level] = []
            }
            mass[level].push(node.tagName)
            level++
        }
        if (node.firstElementChild) {
            let nextNode = node.firstElementChild
            while (nextNode) {
                searchNodes(nextNode)
                nextNode = nextNode.nextElementSibling
            }
        }
        level--
    }
    searchNodes(date)
    mass.forEach((value) => {
        value.forEach((value) => {
                if (levelOrder) levelOrder += `,`
                levelOrder += value
            }
        )
    })
    return levelOrder
}
// увидив закономерность реализовал все обходы за один обход всего дерева.
export const allOrderTraversalsRec = (date) => {
    let levelOrder = ``
    let postOrder = []
    let preorder = []
    let mass = []
    let level = 0
    function searchNodes(node) {
        if (node.tagName) {
            preorder.push(node.tagName)
            if (!mass[level]) {
                mass[level] = []
            }
            mass[level].push(node.tagName)
            level++
        }
        if (node.firstElementChild) {
            let nextNode = node.firstElementChild
            while (nextNode) {
                searchNodes(nextNode)
                postOrder.push(nextNode.tagName)
                nextNode = nextNode.nextElementSibling
            }
        }
        level--
    }
    searchNodes(date)
    mass.forEach((value) => {
        value.forEach((value) => {
                if (levelOrder.length > 0) levelOrder += `,`
                levelOrder += value
            }
        )
    })
    return {
        levelOrder: levelOrder,
        postOrder: postOrder.join(`,`),
        preorder: preorder.join(`,`)
    }
}

// прямой обход в глубину без рекурсии
export const preorderTraversalNoRec = (date) => {
    let preorder = []
    let stack = []
    let stackBuf = []
    let node = date;
    while (node) {
        if (node.tagName) preorder.push(node.tagName)
        if (node.firstElementChild) {
            let nextNode = node.firstElementChild
            while (nextNode) {
                stackBuf.push(nextNode);
                nextNode = nextNode.nextElementSibling
            }
            while (stackBuf.length){
                stack.push(stackBuf.pop())
            }
        }
        node = stack.pop()
    }
    return preorder.join(`,`)
}

// обратный обход в глубину без рекурсии
export const postOrderTraversalNoRec = (date) => {
    let postOrder = []
    let lastDeleteChild = null
    let stack = []
    let stackBuf = []
    let node = date;
    while (node) {
        if (node.firstElementChild) {
            let lastElementChild = node.firstElementChild
            while (lastElementChild){
                if(lastElementChild.nextElementSibling){
                    lastElementChild = lastElementChild.nextElementSibling
                }else break
            }
            if (lastDeleteChild && lastElementChild === lastDeleteChild) {
                lastDeleteChild = stack.pop()
                postOrder.push(lastDeleteChild.tagName)
            } else {
                let nextNode = node.firstElementChild
                while (nextNode) {
                    stackBuf.push(nextNode);
                    nextNode = nextNode.nextElementSibling
                }
                while (stackBuf.length){
                    stack.push(stackBuf.pop())
                }
            }
        } else {
            lastDeleteChild = stack.pop()
            postOrder.push(lastDeleteChild.tagName)
        }
        node = stack[stack.length - 1]
    }
    return postOrder.join(`,`)
}

//  обход в ширину без рекурсии
export const levelOrderTraversalNoRec = (date) => {
    let levelOrder = []
    if (date.tagName) levelOrder.push(date.tagName)
    let queue = new Queue(date);
    while (queue.length) {
        let node = queue.take();
        if (!node.firstElementChild) {
            continue;
        }
        let nextNode = node.firstElementChild
        while(nextNode){
            levelOrder.push(nextNode.tagName);
            queue.put(nextNode);
            nextNode = nextNode.nextElementSibling
        }
    }
    return levelOrder.join(`,`)
}
