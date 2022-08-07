// doubly-linked-list-exercises...

// doubly-linked-list node...

class Node{
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

// doubly-linked-list class...

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push = (val) => {
        var new_node = new Node(val);
        if(!this.head){
            this.head = new_node;
            this.tail = this.head;
        }else{
            this.tail.next = new_node;
            new_node.prev = this.tail;
            this.tail = new_node;
        }

        this.length++;
        return this;
    }

    pop = () => {

        if(!this.head) return undefined;

        var popped_node = this.tail;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = popped_node.prev;
            this.tail.next = null;
            popped_node.prev = null;
        }

        this.length--;
        return this;
    }

    shift = () => {

        if(!this.length === 0 ) return undefined;

        let shifted_head = this.head;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = shifted_head.next;
            this.head.prev = null;
            shifted_head.next = null;
        }

        this.length--;
        return shifted_head;
    }

    unshift = (val) => {

        let new_node = new Node(val);

        if(this.length === 0 ){
            this.head = new_node;
            this.tail = this.head;
        }else{
            this.head.prev = new_node;
            new_node.next = this.head;
            this.head = new_node;
        }

        this.length++;
        return this;
    }

    get = (idx) => {

        let idxIsInvalid = (idx < 0 || idx >= this.length);
        
        if(idxIsInvalid) return null;

        let pivot_point = Math.floor(this.length/2);

        var current;
        var counter;
        var increment;
        var isFirstHalf;

        if(idx <= pivot_point){

            current = this.head;
            counter = 0;
            increment = 1;
            isFirstHalf = true;

        }else{

            current = this.tail;
            counter = this.length - 1;
            increment = -1;
            isFirstHalf = false;

        }

        while (counter !== idx) {

            if(isFirstHalf){
                current = current.next;
            }else{
                current = current.prev;
            }

            counter+=increment;
        }

        return current;
    }

    set = (idx) => {

        let target_node = this.get(idx);

        if(target_node){
            target_node.val = val;
            return true;
        }

        return false;
    }

    insert = (idx, val) => {

        let idxIsInvalid = (idx < 0 || idx >= this.length);

        if(idxIsInvalid) return false;
        
        if(idx === this.length){
            this.push(val);
        }

        if(idx === 0){
            this.unshift(val);
        }

        let new_node = new Node(val);
        let next_node = this.get(idx);
        let prev_node = next_node.prev;

        prev_node.next = new_node;
        new_node.prev = prev_node;
        new_node.next = next_node;
        next_node.prev = new_node;

        this.length++;
        return true;
    }

    remove = (idx) => {

        let idxIsInvalid = (idx < 0 || idx >= this.length);

        if(idxIsInvalid) return undefined;
        if(idx === this.length-1) this.pop();
        if(idx === 0) this.shift();

        var target_node = this.get(idx);
        var prev_node = target_node.prev;
        var next_node = target_node.next;

        prev_node.next = next_node;
        next_node.prev = prev_node;

        target_node.next = null;
        target_node.prev = null;

        this.length--;
        return target_node;
    }

    reverse = () => {

        var current = this.head;
        this.head = this.tail;
        this.tail = current;
        var next_node;
        var prev_node;

        for (let idx = 0; idx < this.length; idx++) {
            
            next_node = current.prev;
            prev_node = current.next;
            current.prev = prev_node;
            current.next = next_node;
            current = prev_node;
        }

        return this;
    }

    print = () => {
 
        var print_result = [];
        var current_node = this.head;

        for (let idx = 0; idx < this.length; idx++) {

            var node_val = current_node.val;
            print_result.push(node_val);
            current_node = current_node.next;
        }

        return print_result;
    }
    
}