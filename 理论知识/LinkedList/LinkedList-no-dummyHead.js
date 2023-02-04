class Node {
  constructor(e, next) {
    this.e = e === undefined ? null : e;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  size = () => {
    return this.size;
  };

  isEmpty = () => {
    return this.size === 0;
  };

  toString = () => {
    let res = "";
    let curr = this.head;

    while (curr !== null) {
      res += `${curr.e}->`;
      curr = curr.next;
    }

    res += "null";

    return res;
  };

  // 在索引 index 位置添加一个元素
  // （在链表中，这是一个不常用的操作，练习用）
  add = (index, e) => {
    if (index < 0 || index > this.size) {
      throw new Error("ERR: LinkedList -> add: illegal index");
    }

    if (index === 0) {
      this.addFirst(e);
    } else {
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      prev.next = new Node(e, prev.next);
      this.size += 1;
    }
  };

  // 在链表头部添加一个元素
  addFirst = (e) => {
    this.head = new Node(e, this.head);
    this.size += 1;
  };

  // 在链表末尾添加元素
  addLast = (e) => {
    this.add(this.size, e);
  };

  remove = (index) => {
    if (index < 0 || index > this.size - 1) {
      throw new Error("ERR: LinkedList -> remove: illegal index");
    }

    if (index === 0) {
      return this.removeFirst();
    } else {
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      const delNode = prev.next;

      prev.next = delNode.next;
      delNode.next = null;
      this.size -= 1;

      return delNode;
    }
  };

  removeFirst = () => {
    let delNode = this.head;

    if (delNode === null) {
      throw new Error("ERR: LinkedList -> add: illegal index");
    } else {
      this.head = delNode.next;
      delNode.next = null;
      this.size -= 1;

      return delNode.e;
    }
  };

  removeLast = () => {
    this.remove(this.size - 1);
  };

  set = (index, e) => {
    if (index < 0 || index > this.size - 1) {
      throw new Error("ERR: LinkedList -> set: illegal index");
    }

    let curr = this.head;

    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }

    curr.e = e;
  };

  setFirst = (e) => {
    this.set(0, e);
  };

  setLast = (e) => {
    this.set(this.size - 1, e);
  };

  get = (index) => {
    if (index < 0 || index > this.size - 1) {
      throw new Error("ERR: LinkedList -> get: illegal index");
    }

    let curr = this.head;

    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }

    return curr.e;
  };

  getFirst = () => {
    return this.get(0);
  };

  getLast = () => {
    return this.get(this.size - 1);
  };

  includes = (e) => {
    let curr = this.head;

    while (curr !== null) {
      if (curr.e === e) {
        return true;
      }

      curr = curr.next;
    }

    return false;
  };
}

module.exports = LinkedList;
