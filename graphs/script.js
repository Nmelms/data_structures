class Graph {
  constructor() {
    this.adjacencyList = {
      Nile: ["Mile", "Rome"],
      Mile: ["Nile", "Windsor", "Rome"],
      Rome: ["Nile", "Mile"],
    };
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
}

let g = new Graph();
