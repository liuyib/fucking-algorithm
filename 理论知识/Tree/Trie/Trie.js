class Node {
  isWord;
  next;

  constructor(isWord) {
    this.isWord = isWord ?? false;
    this.next = new Map();
  }
}

class Trie {
  root;
  size;

  constructor() {
    this.root = new Node();
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  // 添加一个单词
  add(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!node.next.has(c)) node.next.set(c, new Node());
      node = node.next.get(c);
    }

    // 已经添加过的单词不再重复添加
    if (!node.isWord) {
      node.isWord = true;
      this.size++;
    }
  }

  has(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!node.next.has(c)) return false;
      node = node.next.get(c);
    }

    return node.isWord;
  }
}

module.exports = Trie;
