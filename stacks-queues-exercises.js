/// Stacks - last in first out data structure

/// Stack Array Implementationo

var stack = [];

stack.push('goggle');
stack.push('instagram');
stack.push('youtube');


/// Stack from scratch

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        var newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
         return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var poppedNode = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        poppedNode.next = null;
        return poppedNode.value;
    }
}

var stack1 = new Stack();

stack1.push(1);
stack1.push(10);
stack1.push(100);
stack1.push(1000);
stack1.push(10000);
console.log(stack1);
console.log(stack1.pop());
console.log(stack1);
console.log(stack1.pop());
console.log(stack1);
console.log(stack1.pop());
console.log(stack1);
console.log(stack1.pop());
console.log(stack1);
console.log(stack1.pop());
console.log(stack1);
console.log(stack1.pop());
console.log(stack1);


/// Queues - first in first out data structure

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(value){
        var newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.first) return null;
        var dequeuedNode = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        dequeuedNode.next = null;
        return dequeuedNode.value;
    }
}

var q1 = new Queue();

q1.enqueue('FIRST');
q1.enqueue('SECOND');
q1.enqueue('THIRD');
q1.enqueue('FOURTH');
q1.enqueue('FIFTH');
console.log(q1);

console.log(q1.dequeue());
console.log(q1);