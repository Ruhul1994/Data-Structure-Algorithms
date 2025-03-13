/**
 * queue data structure.
 * create a class.
 * take a constrictor.
 * create a this.array.
 * added unshift method.
 * added the shift method.
 * peek method.
 * create new array.
 */

class DataQueue {
    constructor() {
        this.array = [];
    }

    enqueue(value) {
        this.array.push(value);  // Add to the end
        return this.array;
    }

    dequeue() {
        return this.array.shift();  // Remove from the front
    }

    peek() {
        return this.array[0];  // Return first element
    }

    isEmpty() {
        return this.array.length === 0;  // Check if empty
    }
}

// Example usage:
let newQueue = new DataQueue();

console.log(newQueue.enqueue(12));  // [12]
console.log(newQueue.enqueue(2));   // [12, 2]
console.log(newQueue.enqueue(120)); // [12, 2, 120]
console.log(newQueue.enqueue(102)); // [12, 2, 120, 102]
console.log(newQueue.enqueue(112)); // [12, 2, 120, 102, 112]
console.log(newQueue.peek());       // 12 (front element)
console.log(newQueue.dequeue());    // 12 (removes first element)
console.log(newQueue.peek());       // 2 (next front element)
console.log(newQueue.isEmpty());    // false
