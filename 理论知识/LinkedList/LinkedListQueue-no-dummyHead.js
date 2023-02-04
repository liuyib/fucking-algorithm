class Node {
  constructor(e, next) {
    this.e = e === undefined ? null : e;
    this.next = next === undefined ? null : next;
  }
}

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  size = () => {
    return this.size;
  };

  isEmpty = () => {
    return this.size === 0;
  };

  add = (e) => {
    const node = new Node(e);

    if (this.isEmpty()) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size += 1;
  };

  remove = () => {
    if (this.isEmpty()) {
      throw new Error("you can't dequeue a empty queue");
    } else {
      const delNode = this.head;

      this.head = delNode.next;
      delNode.next = null;
      this.size -= 1;

      // 出队后链表为空（只有一个节点），则尾指针也得手动置空
      if (this.head === null) {
        this.tail = null;
      }

      return delNode;
    }
  };

  toString = () => {
    let curr = this.head;
    let res = "head ";

    while (curr !== null) {
      res += `${curr.e}->`;
      curr = curr.next;
    }

    res += "null tail";

    return res;
  };
}

module.exports = LinkedListQueue;
