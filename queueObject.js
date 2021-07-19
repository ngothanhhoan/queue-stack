class queueObject {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    enqueue(value) {
        this.items[this.tailIndex] = value;
        this.tailIndex++;
    }

    dequeue() {
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
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
console.log(queue.peek())
console.log(queue.length())
console.log(queue.isEmpty())

console.log(queue)