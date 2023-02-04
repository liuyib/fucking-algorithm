class Node {
  constructor(e, next) {
    this.e = e === undefined ? null : e;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  constructor() {
    // 虚拟头结点（保证所有节点都有前置节点，统一节点操作）
    this.dummyHead = new Node();
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
    let curr = this.dummyHead.next;

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

    let prev = this.dummyHead;

    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }

    prev.next = new Node(e, prev.next);
    this.size += 1;
  };

  // 在链表头部添加元素
  addFirst = (e) => {
    this.add(0, e);
  };

  // 在链表末尾添加元素
  addLast = (e) => {
    this.add(this.size, e);
  };

  // 删除索引 index 位置的节点，并返回被删除的节点值
  // （在链表中，这是一个不常用的操作，练习用）
  remove = (index) => {
    if (index < 0 || index > this.size - 1) {
      throw new Error("ERR: LinkedList -> remove: illegal index");
    }

    let prev = this.dummyHead;

    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }

    let delNode = prev.next;

    prev.next = delNode.next;
    delNode.next = null;
    this.size -= 1;

    return delNode.e;
  };

  removeFirst = () => {
    return this.remove(0);
  };

  removeLast = () => {
    return this.remove(this.size - 1);
  };

  // 修改索引 index 位置的元素
  // （在链表中，这是一个不常用的操作，练习用）
  set = (index, e) => {
    if (index < 0 || index > this.size - 1) {
      throw new Error("ERR: LinkedList -> set: illegal index");
    }

    let curr = this.dummyHead.next;

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

  // 获取索引 index 位置的元素
  // （在链表中，这是一个不常用的操作，练习用）
  get = (index) => {
    if (index < 0 || index > this.size - 1) {
      throw new Error("ERR: LinkedList -> get: illegal index");
    }

    let curr = this.dummyHead.next;

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

  // 判断链表中是否存在某元素
  includes = (e) => {
    let curr = this.dummyHead.next;

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
