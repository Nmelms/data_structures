class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (city) => city !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (city) => city !== v1
    );
  }

  removeVertex(vertex) {
    for (let edge of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, edge);
    }
    delete this.adjacencyList[vertex];
  }

  dfs(vertex) {
    let visited = {};
    let list = [];

    const helper = (vertex) => {
      if (!vertex) return null;
      visited[vertex] = true;
      list.push(vertex);
      this.adjacencyList[vertex].forEach((child) => {
        if (!visited[child]) {
          return helper(child);
        }
      });
    };

    helper(vertex);
    return list;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
