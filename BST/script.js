class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(val) {
    if (!this.root) return undefined;
    let current = this.root;
    if (current === val) return current;
    while (true) {
      if (val < current.val) {
        if (!current.left) return undefined;
        current = current.left;
      } else if (val > current.val) {
        if (!current.right) return undefined;
        current = current.right;
      } else {
        return current;
      }
    }
  }

  bfs() {
    let que = [];
    let visited = [];
    que.push(this.root);

    while (que.length) {
      let current = que.shift();
      if (current.left) que.push(current.left);
      if (current.right) que.push(current.right);
      visited.push(current);
    }
    return visited;
  }
  dfsPreOrder() {
    let visited = [];
    let current = this.root;

    let helper = (node) => {
      visited.push(node.val);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    };

    helper(current);
    console.log(visited);
    return visited;
  }
}

let tree = new BinarySearchTree();

tree.insert(20);
tree.insert(15);
tree.insert(18);
tree.insert(2);
tree.insert(40);
tree.insert(100);
tree.dfsPreOrder();
