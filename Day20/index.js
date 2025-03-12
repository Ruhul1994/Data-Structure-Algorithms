// create a stack
// create a class
// create a new object
// create a push,pop,
// create a peek method


class Stack{
    constructor(){
        this.database={};
        this.current=0;
    };

    added(value){
        this.current++;
        this.database[this.current]= value;
        return this.database;
    };

    pop(){
        let deleted = this.database[this.current];
        delete this.database[this.current];
        this.current--;
        return deleted;
    }
    pick(){
        return this.database[this.current]; 
    }
}

let stack = new Stack();

 stack.added(9);
 stack.added(10);
 stack.added(56);
 stack.added(20);
console.log( stack.pop())
console.log( stack.pop())
console.log('the pick number is: '+stack.pick())
