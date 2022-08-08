/// Graphs

class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2){
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1].includes(vertex2)){
            var idx1 = this.adjacencyList[vertex1].indexOf(vertex2, 0);
            var idx2 = this.adjacencyList[vertex2].indexOf(vertex1, 0);
            console.log(`idx1: ${idx1}`);
            console.log(`idx2: ${idx2}`);
            var results1 = [];
            var results2 = [];
            for(var i = 0; i < this.adjacencyList[vertex1].length; i++){
                if(i !== idx1){
                    results1.push(this.adjacencyList[vertex1][i])
                }
            }
            this.adjacencyList[vertex1] = results1;
            for(var j = 0; j < this.adjacencyList[vertex2].length; j++){
                if(j !== idx2){
                    results2.push(this.adjacencyList[vertex2][j])
                }
            }
            this.adjacencyList[vertex2] = results2;
        }
    }
    removeEdge2(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);

    }
    removeVertex(vertex){
        var removeEdges = this.adjacencyList[vertex];
        for(var i = 0; i < removeEdges.length; i++){
            this.removeEdge2(vertex,removeEdges[i]);
        }
        delete this.adjacencyList[vertex]
    }
    dfsRecursive(startingVertex){
        var results = [];
        var visited = {};
        var adjList = this.adjacencyList;

        function dfsHelper(vertexValue){    

            if(!adjList[vertexValue]) return null;

            visited[vertexValue] = true;
            console.log(`visited: ${JSON.stringify(visited)}`);

            results.push(vertexValue);

            adjList[vertexValue].forEach(conn => {
                if(!visited[conn]) return dfsHelper(conn);
            });

            // for (let i = 0; i < adjList[vertexValue].length; i++) {
            //     const v = adjList[vertexValue][i];
            //     if(visited[v] !== true) dfsHelper(v); 
            // }

        }

        // (function dfsHelper(vertexValue){
        //     if(!vertexValue) return null;
        //     visited[vertexValue] = true;
        //     console.log(`visited: ${visited}`);
        //     results.push(vertexValue);
        // })(startingVertex)
        
        dfsHelper(startingVertex);
        return results;
    }
    dfsIterative(startingVertex){
        var stack = [];
        var results = [];
        var visited = {};
        stack.push(startingVertex);
        while(stack.length){
            console.log(`visited: ${JSON.stringify(visited)}`);
            console.log(`stack: ${stack}`);
            var vertex = stack.pop();
            if(!visited[vertex]){
                results.push(vertex);
                visited[vertex] = true;
                this.adjacencyList[vertex].forEach(conn => {
                    stack.push(conn);
                });
            }
        }
        return results;
    }
    bfsIterative(startingVertex){
        var queue = [];
        var results = [];
        var visited = {};
        var currentVertex;
        queue.push(startingVertex);
        while (queue.length) {
            console.log(`visited: ${JSON.stringify(visited)}`);
            console.log(`queue: ${queue}`);
            currentVertex = queue.shift();
            if(!visited[currentVertex]){
                results.push(currentVertex);
                visited[currentVertex] = true;
                this.adjacencyList[currentVertex].forEach(conn => {
                    queue.push(conn);
                });
            }
        }
        return results;
    }
    bfsRecursive(startingVertex){
        var queue = [];
        var results = [];
        var visited = {};
        var currentVertex;
        queue.push(startingVertex);

        function bfsHelper(vertex){
            if(!queue.length) return null;
            currentVertex = queue.shift();
            if(!visited[currentVertex]){
                results.push(currentVertex);
                visited[currentVertex] = true;
                this.adjacencyList[currentVertex].forEach(conn => {
                    queue.push(conn);
                });
            }
        }

        bfsHelper(startingVertex);
        return results
    }
}

let g1 = new Graph();

g1.addVertex('Tokyo');
g1.addVertex('NewYork');
console.log(g1);

g1.addEdge('Tokyo', 'LosAngeles');

g1.addEdge('Tokyo', 'Osaka');
g1.addEdge('Osaka', 'Kyoto');
g1.addEdge('Osaka', 'Nagasaki');
g1.addEdge('Tokyo', 'HongKong');
g1.addEdge('Tokyo', 'Seattle');
g1.addEdge('HongKong', 'LosAngeles');
g1.addEdge('HongKong', 'Taipei');
g1.addEdge('Portland', 'Taipei');
g1.addEdge('Portland', 'Tokyo');
g1.addEdge('Portland', 'Seattle');
g1.addEdge('Portland', 'LosAngeles');

console.log(g1);

g1.addEdge('LosAngeles', 'NewYork');
g1.addEdge('LosAngeles', 'Houston');
g1.addEdge('LosAngeles', 'Chicago');
g1.addEdge('NewYork', 'Houston');
g1.addEdge('NewYork', 'Chicago');

g1.addEdge('NewYork', 'London');

console.log(g1);

// g1.removeEdge('LosAngeles', 'Tokyo');
// g1.removeEdge2('LosAngeles', 'Tokyo');
// g1.removeEdge('LosAngeles', 'NewYork');

g1.removeVertex('Tokyo');

console.log(g1);


let g2 = new Graph();

g2.addVertex('A');
g2.addVertex('B');
g2.addVertex('C');
g2.addVertex('D');
g2.addVertex('E');
g2.addVertex('F');
g2.addEdge('A', 'B');
g2.addEdge('A', 'C');
g2.addEdge('B', 'D');
g2.addEdge('C', 'E');
g2.addEdge('D', 'E');
g2.addEdge('D', 'F');
g2.addEdge('E', 'F');

console.log(g2);

console.log(g2.dfsRecursive('A'));

console.log(g2.dfsIterative('A'));

console.log(g2.dfsIterative('B'));

console.log(g2.bfsIterative('A'));
