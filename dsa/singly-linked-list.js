/**
 * Data from linked lists can be scattered across different cells throughout the 
 * computer's memory. The dispersed data are known as `nodes`. 
 */

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    // insert at head
    unshift(val) {
        const node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = this.head
        } else {
            // this.head still maintains its pointer and so on
            // so, setting node.next = this.head and this.head = node
            // just shifts everything including any existing nodes' pointers
            node.next = this.head
            this.head = node
        }
        this.length++
        return this
    }

    // remove head
    shift() {
        if (!this.head) return undefined
        this.head = this.head.next
        this.length--

        if (this.length === 0) {
            this.tail = null
        }
        return this.head
    }

    insertAt(index, val) {
        if (index < 0 || index > this.length) return undefined
        if (index === 0) return this.unshift(val)
        if (index === this.length) return this.push(val)
        
        const node = new Node(val)
        const prev = this.getIndex(index - 1)
        const temp = prev.next
        prev.next = node
        node.next = temp
        this.length++
        return true
    }

    // add to end of list
    push(val) {
        const node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = this.head
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
        return this
    }

    // remove last item in list
    pop() {
        if (!this.head) {
            return undefined
        }

        let current = this.head
        let newTail = current
        while (current.next) {
            newTail = current
            current = current.next // this moves through the list
        }
        this.tail = newTail
        this.tail.next = null
        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    getValue(val) {
        if (!this.head) return undefined
        if (this.head.val === val) return this.head
        if (this.tail.val === val) return this.tail
        let current = this.head
        while(current.next) {
            if (current.val === val) {
                return current
            }
            current = current.next
        }
    }

    getIndex(index) {
        if (index < 0 || index >= this.length) return undefined
        let current = this.head
        let currentIndex = 0
        while (currentIndex !== index) {
            current = current.next
            currentIndex++
        }
        return current
    }
    
    removeAt(index) {
        if (index < 0 || index > this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length) return this.pop()
        
        const prev = this.getIndex(index - 1)
        const removed = prev.next
        prev.next = removed.next
        this.length--
        return true
    }

    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next
        let prev = null
        for(let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }
}

const val1 = 'val1'
const val2 = 'val2'
const val3 = 'val3'
const val4 = 'val4'
const list = new SinglyLinkedList()
list.push(val1)
list.push(val2)
list.push(val3)
// list.unshift('prepend-head')
// list.unshift('prepend-head-AGAIN')
// list.pop() // remove val3
// list.shift() // remove prepend-head-AGAIN
list.push(val4)
// list.insertAt(0, 'val5')
// list.removeAt(2)
// list.removeAt(0)

console.log(list.reverse())

