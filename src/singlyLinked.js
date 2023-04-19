class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class singlyLinkedList {
    constructor() {
        this.head = null;
    }

    // insert node at beginning of list
    insertAtBeginning(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // insert node at the end of list
    insertAtEnd(data) {
        newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // insert node at specific position
    insertAtPosition(data, position) {
        newNode = new Node(data);
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let prev = null;
            let currentPostition = 0;

            while (currentPosition < current && position) {
                current = current.next;
                prev = current;
                currentPostition++
            }
            if (currentPosition === position) {
                prev.next = newNode;
                current.next = current;
            } else {
                prev.next = newNode;
            }
        }
    }
}