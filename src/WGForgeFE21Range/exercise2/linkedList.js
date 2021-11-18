const errorMessage = "Incorrect position"
const errorMessage1 = "The list is empty"

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    add(...date) {
        if (date.length === 0) throw new Error(errorMessage)
        // если нет позиции для вставки
        if (date.length === 1) {
            //если список не пустой
            if (this.tail) {
                this.tail.next = {
                    value: date[0],
                    next: null,
                }
                this.tail = this.tail?.next

            } else {
                // если список был пустой
                this.tail = {
                    value: date[0],
                    next: null,
                }
                this.head = this.tail
            }
        } else if (date.length === 2) {
            let position = +date[1]
            // проверка на валидность значения позиции вставки
            if (typeof position === "number" && !isNaN(position) && date[1] != null && !Array.isArray(date[1])) {
                if (position < 0) throw new Error(errorMessage)
                let pointer = this.head
                if (position === 0) {
                    this.head = {
                        value: date[0],
                        next: pointer,
                    }
                } else {
                    // нахождение указателя на элемент перед
                    while (position - 1) {
                        if (!pointer && position - 1 > 0) throw new Error(errorMessage)
                        position--
                        pointer = pointer?.next
                    }
                    if (pointer === null) throw new Error(errorMessage)
                    pointer.next = {
                        value: date[0],
                        next: pointer.next,
                    }
                }
            } else throw new Error(errorMessage)
        } else throw new Error(errorMessage)
        /* if (!position && +position !== 0) {
             if (this.tail) {
                 this.tail.next = {
                     value: item,
                     next: null,
                 }
                 this.tail = this.tail?.next
             } else {
                 this.tail = {
                     value: item,
                     next: null,
                 }
                 this.head = this.tail
             }
         } else if (typeof +position === "number") {
             position = +position
             if (position < 0) throw errorMessage
             let pointer = this.head
             if (position === 0) {
                 this.head = {
                     value: item,
                     next: pointer,
                 }
             } else {
                 while (position - 1) {
                     if (!pointer && position - 1 > 0) throw errorMessage
                     position--
                     pointer = pointer?.next
                 }
                 if (pointer === null) throw errorMessage
                 pointer.next = {
                     value: item,
                     next: pointer.next,
                 }
             }
         } else throw errorMessage*/
    }

    get(pos) {
        let position = +pos
        if (typeof position === "number" && !isNaN(position) && pos != null && !Array.isArray(pos)) {
            if (position < 0) throw new Error(errorMessage)
            let pointer = this.head
            if (position === 0) {
                return {
                    value: pointer.value,
                    next: pointer.next
                }
                /* return pointer*/
            } else {
                while (position - 1) {
                    if (!pointer && position - 1 > 0) throw new Error(errorMessage)
                    position--
                    pointer = pointer?.next
                }
                if (pointer === null) throw new Error(errorMessage)
                if (pointer?.next === null) throw new Error(errorMessage)
                return {
                    value: pointer?.next.value,
                    next: pointer?.next.next
                }
                /*return pointer?.next*/
            }
        } else throw errorMessage
    }

    remove(pos) {
        if (this.head === null) throw new Error(errorMessage1)
        let position = +pos
        if (typeof position === "number" && !isNaN(position) && pos != null && !Array.isArray(pos)) {
            if (position < 0) throw errorMessage
            let pointer = this.head
            if (position === 0) {
                this.head = this.head?.next
                if (this.head === null) this.tail = null
            } else {
                while (position - 1) {
                    if (!pointer && position - 1 > 0) throw new Error(errorMessage)
                    position--
                    pointer = pointer?.next
                }
                if (pointer === null) throw new Error(errorMessage)
                if (pointer?.next === null) throw new Error(errorMessage)

                if (pointer?.next.next) {
                    pointer.next = pointer.next.next
                } else {
                    pointer.next = null
                    this.tail = pointer
                }
            }
        } else throw new Error(errorMessage)
    }
}

LinkedList.prototype[Symbol.iterator] = function () {
    let pointer = this.head
    return {
        next() {
            if (pointer) {
                const value = pointer?.value
                pointer = pointer.next
                return {
                    value: value,
                    done: false,
                };
            } else {
                return {
                    done: true
                };
            }
        }
    }
}


module.exports = LinkedList