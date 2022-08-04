// reverse linked list returning only the new head...
// a > b > c > d => d > c > b > a

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

reverse_linked_list = (head) => {
    let current = head;
    let prev_node = null;

    while (current) {
        next_node = current.next;
        pivot = next_node.next;
        next_node.next = current;
        current = pivot;
    }
}