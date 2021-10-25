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
}

//прямой обход в глубину с рекурсией
export const preorderTraversalRec = (date) => {
    let preorder = []
    function searchNodes(node) {
        if (node.tagName) preorder.push(node.tagName)
        if (node.children) {
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
        if (node.children) {
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
            if (node.children.length) {
                for (let i = 0; i < node.children.length; i++) {
                    queue.put(node.children[i]);
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
        if (node.children) {
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
        if (node.children) {
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
    let node = date;
    while (node) {
        if (node.tagName) preorder.push(node.tagName)
        if (node.children) {
            for (let i = node.children.length - 1; i >= 0; i--)
                stack.push(node.children[i]);
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
    let node = date;
    while (node) {
        if (node.children.length > 0) {
            if (lastDeleteChild && node.lastElementChild === lastDeleteChild) {
                lastDeleteChild = stack.pop()
                postOrder.push(lastDeleteChild.tagName)
            } else {
                for (let i = node.children.length - 1; i >= 0; i--)
                    stack.push(node.children[i]);
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
        if (!node.children.length) {
            continue;
        }
        for (let i = 0; i < node.children.length; i++) {
            levelOrder.push(node.children[i].tagName);
            queue.put(node.children[i]);
        }
    }
    return levelOrder.join(`,`)
}
