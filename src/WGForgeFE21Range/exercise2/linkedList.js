const errorMessage = "Incorrect position"
const errorMessage1 = "The list is empty"

function errorEmptyList(head) {
    if (head === null) throw new Error(errorMessage1)
}

function errorPointerInEndList(pointer) {
    if (pointer.next === null) throw new Error(errorMessage)
}

function isPositionValid(position) {
    return (typeof +position === "number" && !isNaN(+position) && position != null && !Array.isArray(position) && +position >= 0)
}

function setPointer(position, pointer) {
    while (position - 1) {
        if (!pointer) throw new Error(errorMessage)
        position--
        pointer = pointer?.next
    }
    return pointer
}

class LinkedList {
    head = null;
    tail = null;

    //добавил конструктор для инициализации списка
    /*constructor(...data) {
        if (data) {
            data.forEach(value => {
                this.add(value)
            })
        }
    }*/

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
                this.tail = this.tail.next

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
            if (isPositionValid(date[1])) {
                let pointer = this.head
                if (position) {
                    // нахождение указателя на элемент перед позицией вставки
                    pointer = setPointer(position, pointer)
                   /* while (position - 1) {
                        if (!pointer) throw new Error(errorMessage)
                        position--
                        pointer = pointer.next
                    }*/
                    pointer.next = {
                        value: date[0],
                        next: pointer.next,
                    }
                } else {
                    //если позиция вставки 0 (head)
                    this.head = {
                        value: date[0],
                        next: pointer,
                    }
                }
            } else throw new Error(errorMessage)
        } else throw new Error(errorMessage)
    }

    get(position) {
        if (isPositionValid(position)) {
            position = +position
            let pointer = this.head
            if (position) {
                // нахождение указателя на элемент перед позицией возврата
                pointer = setPointer(position, pointer)
                errorPointerInEndList(pointer)
                return {
                    value: pointer.next.value,
                    next: pointer.next.next
                }
            } else {
                //вернуть первый элемент
                return {
                    value: pointer.value,
                    next: pointer.next
                }
            }
        } else throw errorMessage
    }

    remove(position) {
        errorEmptyList(this.head)
        if (isPositionValid(position)) {
            position = +position
            let pointer = this.head
            if (position) {
                // нахождение указателя на элемент перед позицией удаления
                pointer = setPointer(position, pointer)
                errorPointerInEndList(pointer)
                if (pointer.next.next) {
                    //удаление среднего элемента
                    pointer.next = pointer.next.next
                } else {
                    //удаление последнего элемента
                    pointer.next = null
                    this.tail = pointer
                }
            } else {
                //удаление первого элемента
                this._head = this.head.next
                if (this.head === null) this.tail = null
            }
        } else throw new Error(errorMessage)
    }
}

LinkedList.prototype[Symbol.iterator] = function () {
    let pointer = this.head
    return {
        next() {
            if (!!pointer) {
                const value = pointer.value
                pointer = pointer.next
                return {
                    value: value,
                    done: false,
                };
            } else {
                return {
                    value: undefined,
                    done: true
                };
            }
        }
    }
}

module.exports = LinkedList