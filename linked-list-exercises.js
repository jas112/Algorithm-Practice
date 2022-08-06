// linked list exercises...

// linked list node...

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// linked list class...

class SinglyLinkedList{
    contructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push = (val) => {
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        
        return this;
    }

    pop = () => {
        if(!this.head) return undefined;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        return this;

    }

    shift = () => {
        
        if(!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if(this.length === 0){
            this.tail = null;
        }

        return currentHead;
    }

    unshift = (val) => {

        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;
    }

    get = (idx) => {

        let isIdxInValid = (idx < 0 || idx >= this.length);
        
        if(isIdxInValid) return null;

        let counter = 0;
        let currentNode = this.head;

        while(counter !== idx){
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;

    }

    set = (idx, val) => {

        let targetNode = this.get(idx);

        if(targetNode){
           targetNode.val = val; 
           return true;
        }
        
        return false;
    }

    insert = (idx, val) => {

        let isIdxInValid = (idx < 0 || idx > this.length);
        if(isIdxInValid) return null;

        let new_node = new Node(val);

        if(idx === 0){
            this.unshift(val);
        }

        if(idx === this.length){
            this.push(val);
        }

        let isIdxContainedWithin = (idx > 0 && idx < this.length);

        if(isIdxContainedWithin){

            let prev_node = this.get(idx-1);
            let next_node = this.get(idx);

            prev_node.next = new_node;
            new_node.next = next_node

            this.length++;

            return true;
        }

    }

    remove = (idx) => {

        let isIdxInValid = (idx < 0 || idx > this.length);
        if(isIdxInValid) return null;

        if(idx === 0){
            this.shift();
        }

        if(idx === this.length-1){
            this.pop();
        }

        let isIdxContainedWithin = (idx > 0 && idx < this.length);

        if(isIdxContainedWithin){

            let prev_node = this.get(idx-1);
            let next_node = this.get(idx+1);
            let removed_node = prev_node.next;

            prev_node.next = next_node;

            this.length--;

            return removed_node;
        }

    }

    reverse = () => {
        var current_node = this.head;
        this.head = this.tail;
        this.tail = current_node;
        var next_node;
        var prev_node = null;

        while (current_node.next) {

            next_node = current_node.next;
            current_node.next = prev_node;
            prev_node = current_node;
            current_node = next_node;
            
        }

        return this;

    }

}

// reverse linked list returning only the new head...
// a > b > c > d => d > c > b > a

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

