class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.last;
      this.last = newNode;
      temp.next = newNode;
    }
    this.size++;
    return this;
  }

  deque() {
    if (!this.first) return null;
    let temp = this.first;
    if ((this.size = 1)) {
      this.first = null;
      this.last = null;
    }

    this.first = temp.next;
    temp.next = null;
    this.size--;
    return temp;
  }
}

let que = new Queue();
