class stackArray{
    constructor(){
    this.items=[];  
    }

    push(value){
    this.items.push(value);
    
    }

    pop() {
   if(this.items.length === 0) {
       console.log('this is empty')
        } else{
       this.items.pop();
        }    
    }


    peek() {
    return this.items[this.items.length -1];
    }

    isEmpty() {
    return this.items.length === 0;
    }

    length() {
        return this.items.length;
    }
}

var stack = new stackArray();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

stack.pop();
stack.pop();

console.log(stack.peek());

console.log(stack.items.length);

console.log(stack.isEmpty())

console.log(stack);