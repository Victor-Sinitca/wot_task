const errorMessage = "Incorrect position"
const errorMessage1 = "The list is empty"

function errorEmptyList(head) {
    if (head === null) throw new Error(errorMessage1)
}

function errorPointerInEndList(pointer) {
    if (pointer.next === null) throw new Error(errorMessage)
}

function errorPointerOutsideList(pointer) {
    if (!pointer) throw new Error(errorMessage)
}

function isPositionValid(position) {
    return (typeof +position === "number" && !isNaN(+position) && position != null && !Array.isArray(position) && +position >= 0)
}

function setPointer(position, pointer) {
    while (position - 1) {
        if (!pointer) break
        pointer = pointer.next
        position--
    }
    return pointer
}

class LinkedList {
    _head = null;
    _tail = null;
    //добавил конструктор для возможности инициализации списка
    constructor(...data) {
        if (data.length) {
            data.forEach(value => {
                this.add(value)
            })
        }
    }

    add(...data) {
        if (data.length === 0) throw new Error("Нет значения для добавления")
        // если нет позиции для вставки
        if (data.length === 1) {
            //если список не пустой
            if (this._tail) {
                this._tail.next = {
                    value: data[0],
                    next: null,
                }
                this._tail = this._tail.next
            } else {
                // если список был пустой
                this._tail = {
                    value: data[0],
                    next: null,
                }
                this._head = this._tail
            }
            // если есть позиция для вставки
        } else if (data.length === 2) {
            let position = +data[1]
            // проверка на валидность значения позиции вставки
            if (isPositionValid(data[1])) {
                let pointer = this._head
                if (position) {
                    // нахождение указателя на элемент перед позицией вставки
                    pointer = setPointer(position, pointer)
                    errorPointerOutsideList(pointer)
                    pointer.next = {
                        value: data[0],
                        next: pointer.next,
                    }
                } else {
                    //если позиция вставки 0 (head)
                    this._head = {
                        value: data[0],
                        next: pointer,
                    }
                }
            } else throw new Error(errorMessage)
            // если передано более двух аргументов
        } else throw new Error("Передано более двух аргументов")
    }

    get(position) {
        if (isPositionValid(position)) {
            position = +position
            let pointer = this._head
            if (position) {
                // нахождение указателя на элемент перед позицией возврата
                pointer = setPointer(position, pointer)
                errorPointerOutsideList(pointer)
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
        errorEmptyList(this._head)
        if (isPositionValid(position)) {
            position = +position
            let pointer = this._head
            if (position) {
                // нахождение указателя на элемент перед позицией удаления
                pointer = setPointer(position, pointer)
                errorPointerOutsideList(pointer)
                errorPointerInEndList(pointer)
                if (pointer.next.next) {
                    //удаление среднего элемента
                    pointer.next = pointer.next.next
                } else {
                    //удаление последнего элемента
                    pointer.next = null
                    this._tail = pointer
                }
            } else {
                //удаление первого элемента
                this._head = this._head.next
                if (!this._head) this._tail = null
            }
        } else throw new Error(errorMessage)
    }
}

LinkedList.prototype[Symbol.iterator] = function () {
    let pointer = this._head
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
