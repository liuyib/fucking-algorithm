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

  /** 获取包含的单词数量 */
  getSize() {
    return this.size;
  }

  /** 添加一个单词 */
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

  /** 是否包含某个单词 */
  has(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!node.next.has(c)) return false;
      node = node.next.get(c);
    }

    return node.isWord;
  }

  /** 是否有某个单词的前缀（单词本身也是自己的前缀） */
  hasPrefix(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!node.next.has(c)) return false;
      node = node.next.get(c);
    }

    return true;
  }
}

module.exports = Trie;
