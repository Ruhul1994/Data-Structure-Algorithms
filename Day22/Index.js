/**
 * linked list
 * 1. singly linked list
 */

// node class
class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

// linked list class

class LinkedList{
    constructor(){
        this.head = null;
    }
    

    // insert first node
    insertNewNode(data){
        this.head = new Node(data, this.head);
    }
}