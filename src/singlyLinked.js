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
        };
    };
    
    // delete a node with given data from list
    deleteNode(data) {
        if (!this.head) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
        }
        let current = this.head;
        let prev = null;
        while (current && current.data !== data) {
            prev = current;
            current = current.next;
        }
        if (current && current.data === data) {
            prev.next = current.next;
        }
    }

    // find middle of linkedlist

    findMiddle(){
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data;
    }

    // search for node with  given data
    
    findNode(data) {
        let current = this.head;
        while (current) {
            if (current.data === data){
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // print values of all nodes 
    printValues() {
        let current = this.head
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}