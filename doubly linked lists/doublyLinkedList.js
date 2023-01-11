class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let oldTail = this.tail;
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }
  shift() {
    let oldHead = this.head;
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    let oldHead = this.head;
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.head.next = oldHead;
      oldHead.prev = newNode;
    }
    this.length++;
    return this;
  }
  get(idx) {
    let count = 0;
    let pointer = this.tail;
    if (idx >= this.length || idx < 0) return null;
    if (idx > this.length / 2) {
      while (count !== this.length - 1 - idx) {
        pointer = pointer.prev;
        count++;
      }
    } else {
      pointer = this.head;
      while (count !== idx) {
        pointer = pointer.next;
        count++;
      }
    }
    return pointer;
  }
  set(idx, val) {
    let node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    } else {
      return false;
    }
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let prev = this.get(idx - 1);
    let after = prev.next;

    prev.next = newNode;
    newNode.prev = prev;
    newNode.next = after;
    this.length++;
    return true;
  }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
