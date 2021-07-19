class stackArray {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    
    push(value) {
        this.items[this.tailIndex] = value;
        this.tailIndex++;
    }

    pop() {
        const item = this.items[this.tailIndex - 1];
        delete this.items[this.tailIndex - 1];
        this.tailIndex--;
        return item;
    }

    peek() {
        return this.items[this.tailIndex - 1];
    }

    length() {
        return this.tailIndex - this.headIndex;
    }

    isEmpty() {
        return this.tailIndex === this.headIndex; //phép so sánh: chỉ có đúng hoặc sai --> jsL boolean:  true/false
    }
}

var stack = new stackArray();

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

stack.pop()



console.log(stack.peek())
console.log(stack.isEmpty())


console.log(stack)