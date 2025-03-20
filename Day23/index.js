class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    // Insert a new node at the end of the list.
    append(data){
        if(this.head === null){
            this.head = new Node(data);
            return;
        }
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        current.next = new Node(data);
    }

    printList(){
        let current = this.head;
        let listValues = '';
        while(current !== null){
            listValues += current.data +" ";
            current = current.next;
        }
        console.log(listValues);
    }

}

const list = new LinkedList();
list.append(10);
list.append(20);

list.printList();