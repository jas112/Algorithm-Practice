/// Trees

/// Binary Search Tree

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){

        // const checkTreeNode = ((treeNode, insertNode) => {
        //     var currentNode = treeNode;
        //     var goLeft = currentNode.value < insertNode.value;
        //     var goRight = currentNode.value > insertNode.value;
            
        //     if(goLeft){
        //         if(currentNode.left === null);
        //         currentNode.left = insertNode;
        //         return this;                
        //     }else{
        //         currentNode = currentNode.left;
        //         return checkTreeNode(currentNode, insertNode);
        //     }

        //     if(goRight){
        //         if(currentNode.right=== null);
        //         currentNode.right = insertNode;
        //         return this;                
        //     }else{
        //         currentNode = currentNode.right;
        //         return checkTreeNode(currentNode, insertNode);
        //     }

        // });

        var newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
            return this;
        }else{
            var current = this.root;
            while(true){
                if(value === current.value) return undefined;
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }else{
                        current = current.left;
                    }
                }else if(value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }else{
                        current = current.right;
                    }
                }
            }
        }
    }
    find(value){

        if(this.root === null) return false;

        var current = this.root;
        var isFound = false;

        while(current && !isFound){
            if(value < current.value){
                current = current.left;
            }else if(value > current.value){
                current = current.right;
            }else{
                isFound = true;
            }
        }

        if(!isFound) return false;
        return current;

    }

    contains(value){

        if(this.root === null) return false;

        var current = this.root;
        var isFound = false;

        while(current && !isFound){
            if(value < current.value){
                current = current.left;
            }else if(value > current.value){
                current = current.right;
            }else{
                return true;
            }
        }
        return false;
    }
    bfs(){
        var node = this.root,
            data = [],
            queue = [];

        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    dfsPre(){
        var current = this.root,
            data = [];

        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }

        traverse(current);
        return data;
        
    }
    dfsPost(){
        var current = this.root,
            data = [];

        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }

        traverse(current);
        return data;
        
    }
    dfsInOrd(){
        var current = this.root,
            data = [];

        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }

        traverse(current);
        return data;
    }
}

var tree = new BinarySearchTree();

tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

console.log(tree);

console.log(tree.insert(11));
console.log(tree.insert(6));
console.log(tree.root.left);
console.log(tree.root.right);

console.log(tree.find(6));
console.log(tree.find(4));
console.log(tree.contains(6));
console.log(tree.contains(4));


console.log(tree.bfs());

console.log(tree.dfsPre());
console.log(tree.dfsPost());
console.log(tree.dfsInOrd());
