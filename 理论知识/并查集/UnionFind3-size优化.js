/**
 * 第三版的并查集（使用数组实现），使用 size 优化，防止退化成链表
 *
 * 如下图，较大的树合并到较小的树上时，就会退化成链表：
 *（步骤一）           （步骤二）            （依次类推。。。）
 *  ╭─╮   ╭─╮                 ╭─╮
 * ╭↓─┴╮ ╭↓─┴╮               ╭↓─┴╮
 * │ 3 │ │ 5 │               │ 5 │
 * ╰───╯ ╰───╯               ╰───╯
 *   ↑                      ↗
 * ╭─┴─╮               ╭───╮
 * │ 4 │               │ 3 │
 * ╰───╯               ╰───╯
 *                       ↑
 *                     ╭─┴─╮
 *                     │ 4 │
 *                     ╰───╯
 */

class UnionFind3 {
  parent = [];
  size = [];

  constructor(size) {
    // 初始化 parent 数组，指向本身，表示初始以自己为根节点
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }

  toString = () => {
    return this.parent.join(', ');
  };

  getSize = () => {
    return this.parent.length;
  };

  find = (p) => {
    if (p < 0 || p >= this.parent.length) {
      throw new Error('ERR [UnionFind3]: find 方法的参数不合法');
    }

    // 一直向上找到树的根节点，直到找到自身
    while (p !== this.parent[p]) {
      p = this.parent[p];
    }

    return p;
  };

  isConnected = (p1, p2) => {
    return this.find(p1) === this.find(p2);
  };

  union = (p1, p2) => {
    const root1 = this.find(p1);
    const root2 = this.find(p2);

    if (root1 === root2) return;

    const size1 = this.size[root1];
    const size2 = this.size[root2];
    const small = size1 < size2 ? root1 : root2;
    const large = size1 < size2 ? root2 : root1;

    // 较小树的根指向较大树的根
    this.parent[small] = large;
    this.size[large] += this.size[small];
  };
}

module.exports = UnionFind3;
