class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    this.size++;
    return this.size;
  }
  pop() {
    if (!this.first) return null;
    let top = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = top.next;
      top.next = null;
    }

    this.size--;
    return top.val;
  }
}

let stack = new Stack();
