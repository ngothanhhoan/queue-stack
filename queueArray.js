class queueObject {
    constructor() {
        this.items = [];
        
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        this.items.shift();
    }

    peek() {
        return this.items[this.headIndex];
    }

    length() {
        return this.tailIndex - this.headIndex;
    }

    isEmpty() {
        return this.tailIndex === this.headIndex; //trả về true/false -- true
    }
}

var queue = new queueObject();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.dequeue();

// console.log(queue.peek())
// console.log(queue.length())
// console.log(queue.isEmpty())

console.log(queue)