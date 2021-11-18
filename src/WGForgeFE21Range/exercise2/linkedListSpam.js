const errorMessage = "Incorrect position"
const errorMessage1 = "The list is empty"

class LinkedList {
    #head = null
    #tail = null
    add(item, position) {
        /*if (!position && +position !==0 ) {
            if (this.#tail) {
                this.#tail.next = {
                    value: item,
                    next: null,
                }
                this.#tail = this.#tail?.next
            } else {
                this.#tail = {
                    value: item,
                    next: null,
                }
                this.#head = this.#tail
            }
        } else if (typeof +position === "number") {
            position = +position
            if (position < 0) throw errorMessage
            let pointer = this.#head

            if (position === 0) {
                this.#head = {
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
        }else throw errorMessage*/
        throw errorMessage
    }

    get(position) {
        /*if (typeof +position === "number" && position !== null && !isNaN(position)) {
            position = +position
            if (position < 0) throw errorMessage
            let pointer = this.#head
            if (position === 0) {
                return pointer
            } else {
                while (position - 1) {
                    if (!pointer && position - 1 > 0) throw errorMessage
                    position--
                    pointer = pointer?.next
                }
                if (pointer === null) throw errorMessage
                if (pointer?.next === null) throw errorMessage
                return pointer?.next
            }
        } else throw errorMessage*/
        throw errorMessage
    }

    remove(position) {
/*        if (this.#head === null) throw errorMessage
        if (typeof +position === "number" && position !== null && !isNaN(position)) {
            position = +position
            if (position < 0) throw errorMessage
            let pointer = this.#head
            if (position === 0) {
                this.#head = this.#head?.next
                if(this.#head === null) this.#tail = null
            }else {
                while (position - 1) {
                    if (!pointer && position - 1 > 0) throw errorMessage
                    position--
                    pointer = pointer?.next
                }
                if (pointer === null) throw errorMessage
                if (pointer?.next === null) throw errorMessage

                if(pointer?.next.next){
                    pointer.next = pointer.next.next
                }else{
                    pointer.next = null
                    this.#tail = pointer
                }
            }
        }else throw errorMessage*/
        throw errorMessage1
    }

    [Symbol.iterator]() {
        let pointer = this.#head
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
}


module.exports = LinkedList