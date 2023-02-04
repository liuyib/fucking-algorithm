const LinkedList = require("./LinkedList-has-dummyHead");

class LinkedListStack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  size = () => {
    return this.linkedList.size();
  };

  isEmpty = () => {
    return this.linkedList.isEmpty();
  };

  push = (e) => {
    this.linkedList.addFirst(e);
  };

  pop = () => {
    this.linkedList.removeFirst();
  };

  peek = () => {
    return this.linkedList.getFirst();
  };

  toString = () => {
    let res = `top ${this.linkedList.toString()} bottom`;

    return res;
  };
}

module.exports = LinkedListStack;
