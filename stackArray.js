class stackArray{
    constructor(){
    this.items=[];  
    }

    push(value){
    this.items.push(value);
    
    }

    pop() {
   if(this.items.lenght === 0) {
       console.log('this is empty')
        } else{
       this.items.pop();
        }    
    }


    peek() {
    return this.items[this.items.lenght -1];
    }

    isEmpty() {
    return this.items.lenght === 0;
    }

    lenght() {
        return this.items.lenght;
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