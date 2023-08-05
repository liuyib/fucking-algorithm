/**
 * 字典树简化版，用于刷题（不额外引入 Node 节点类、没有 size 属性）
 */
class Trie {
  isWord;
  next;

  constructor() {
    this.isWord = false;
    this.next = new Map();
  }

  add(word) {
    let node = this;

    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!node.next.has(c)) node.next.set(c, new Trie());
      node = node.next.get(c);
    }

    node.isWord = true;
  }

  has(word) {
    let node = this;

    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!node.next.has(c)) return false;
      node = node.next.get(c);
    }

    return node.isWord;
  }

  hasPrefix(prefix) {
    let node = this;

    for (let i = 0; i < prefix.length; i++) {
      const c = prefix[i];
      if (!node.next.has(c)) return false;
      node = node.next.get(c);
    }

    return true;
  }
}

module.exports = Trie;
