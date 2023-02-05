/**
 * 第六版的并查集（使用数组实现），使用路径压缩优化
 *
 * 如下图所示：
 *  ╭─╮
 * ╭↓─┴╮
 * │ 1 │
 * ╰───╯
 *   ↑
 * ╭─┴─╮
 * │ 2 │
 * ╰───╯
 *   ↑
 * ╭─┴─╮
 * │ 3 │
 * ╰───╯
 *   ↑
 * ╭─┴─╮
 * │ 4 │
 * ╰───╯
 *   ↑
 * ╭─┴─╮
 * │ 5 │
 * ╰───╯
 * 将所有节点平铺指向根节点，结果如下：
 *  ╭─╮
 * ╭↓─┴╮
 * │ 1 │
 * ╰───╯
 *   ↑  ↖     ↖     ↖
 * ╭─┴─╮ ╭───╮ ╭───╮ ╭───╮
 * │ 2 │ │ 3 │ │ 4 │ │ 5 │
 * ╰───╯ ╰───╯ ╰───╯ ╰───╯
 */

class UnionFind6 {
  parent = [];
  rank = [];

  constructor(size) {
    // 初始化 parent 数组，指向本身，表示初始以自己为根节点
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.rank[i] = 1;
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
      throw new Error('ERR [UnionFind6]: find 方法的参数不合法');
    }

    const parent = this.parent[p];

    // 将所有节点平铺指向根节点
    if (p !== parent) {
      this.parent[p] = this.find(parent);
    }

    return this.parent[p];
  };

  isConnected = (key1, key2) => {
    return this.find(key1) === this.find(key2);
  };

  union = (key1, key2) => {
    const root1 = this.find(key1);
    const root2 = this.find(key2);

    if (root1 === root2) return;

    const rank1 = this.rank[root1];
    const rank2 = this.rank[root2];
    const small = rank1 < rank2 ? root1 : root2;
    const large = rank1 < rank2 ? root2 : root1;

    this.parent[small] = large;

    if (rank1 === rank2) {
      this.rank[large]++;
    }
  };
}

module.exports = UnionFind6;
