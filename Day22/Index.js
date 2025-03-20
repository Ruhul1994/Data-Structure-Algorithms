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
        this.size = 0;
    }
    

    // insert first node
    insertNewNode(data){
        this.head = new Node(data, this.head);
    }

}

const ll = new LinkedList();
ll.insertNewNode(100);
ll.insertNewNode(200);

console.log(ll)