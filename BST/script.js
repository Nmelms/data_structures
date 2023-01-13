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
}

let tree = new BinarySearchTree();

tree.insert(20);
tree.insert(15);
tree.insert(18);
tree.insert(2);
tree.insert(40);
tree.insert(100);
