// reverse linked list returning only the new head...
// a > b > c > d => d > c > b > a

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){

        if(!this.head) return undefined;

        let currentNode = this.head;
        let newTail = currentNode;

        while(currentNode.next){
            newTail = currentNode;
            currentNode = currentNode.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return this;
    }
    shift(){

        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if(this.length === 0){
            this.tail = null;
        }

        return currentHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(idx){
        if(idx < 0 || idx >= this.length) return null;
        var counter = 0;
        var currentNode = this.head;
        // console.log(`currentNode: ${JSON.stringify(currentNode)}`);
        while (counter !== idx) {
            // console.log(`counter: ${counter}`);
            // console.log(`currentNode: ${JSON.stringify(currentNode)}`);
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    set(idx, val){
        var targetNode = this.get(idx);
        if(targetNode){
            targetNode.val = val;
            return true;
        }
        return false;
    }
    insert(idx, val){
        var newNode = new Node(val);
        if(idx < 0 || idx > this.length) return null;

        if(idx === this.length) !!this.push(val);
        if(idx === 0) !!this.unshift(val);

        if(idx > 0 && idx < this.length){
            var prevN = this.get(idx-1);
            var nextN = this.get(idx);
            prevN.next = newNode;
            newNode.next = nextN;
            this.length++;
            return true;
        }
    }
    remove(idx){
        if(idx < 0 || idx > this.length) return undefined;
        if(idx === this.length-1) this.pop();
        if(idx === 0) this.shift();
        if(idx > 0 && idx < this.length){
            var prevN = this.get(idx-1);
            var nextN = this.get(idx+1);
            var targetNode = prevN.next;
            prevN.next = nextN;
            this.length--;
            return targetNode;
        }
    }
    reverse(){
        var current = this.head;
        this.head = this.tail;
        this.tail = current;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            return this;
        }
    }
}

// reverse linked list given only the head of the ll....return the new head node.

reverse_linked_list = (head) => {
    let current = head;
    let next;
    let previous = null;

    while (current.next) {
        next = current.next;
        current.next = previous
        previous = current;
        current = next;
    }

    return current;
}

reverse_llist = (lnkdlist) => {
    console.log(`@reverse_llist...`);
    let current = lnkdlist.head;
    let next;
    let previous = null;
    console.log(current);
    while (current.next) {
        next = current.next;
        current.next = previous
        previous = current;
        current = next;
        console.log(current);
    }

    // let tmp = lnkdlist.head;
    // lnkdlist.head = lnkdlist.tail;
    // lnkdlist.tail = tmp;

    return lnkdlist;
}

let llist = new SinglyLinkedList();
console.log(llist.push('hello'));
console.log(llist.push('goodbye'));
console.log(llist.push('ohaiyo'));
console.log(llist.push('oha'));
console.log(llist.push('iyo'));
console.log(llist.push('hai'));

console.log(llist.head);

console.log(reverse_linked_list(llist.head));

// console.log(llist);

// console.log(reverse_llist(llist));

// console.log(llist);

