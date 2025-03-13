/**
 * que data structure.
 * create a class.
 * take a constrictor.
 * create a this.array.
 * added unshift method.
 * added the shift method.
 * peek method.
 * create new array.
 */

class DataQueue {
    constructor(value) {
        this.array = [value];
    }

    add(value) {
        this.array.unshift(value);
        return this.array;
    }

    peek() {
        return this.array[0];
    }

    delete() {
        return this.array.shift();
    }
}

let newQueue = new DataQueue(10);

console.log(newQueue.add(12));
console.log(newQueue.add(2));
console.log(newQueue.add(120));
console.log(newQueue.add(102));
console.log(newQueue.add(112));
console.log(newQueue.peek());
console.log(newQueue.delete());
console.log(newQueue.peek());
