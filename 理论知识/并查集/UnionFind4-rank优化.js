/**
 * 第四版的并查集（使用数组实现），使用 rank 优化
 *
 * 优化背景：如果按照 size 优化，则下图中将“根节点为 1 的树”合并到“根节点为 5 的树上”，
 *         会导致路径偏长（相比与反过来合并）
 *             ╭─╮         ╭─╮
 *            ╭↓─┴╮       ╭↓─┴╮
 *            │ 1 │       │ 5 │
 *            ╰───╯       ╰───╯
 *      ↗    ↗  ↑  ↖        ↑
 * ╭───╮╭───╮ ╭─┴─╮ ╭───╮ ╭─┴─╮
 * │ 2 ││ 8 │ │ 4 │ │ 9 │ │ 6 │
 * ╰───╯╰───╯ ╰───╯ ╰───╯ ╰───╯
 *                          ↑
 *                        ╭─┴─╮
 *                        │ 7 │
 *                        ╰───╯
 */

class UnionFind4 {
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
      throw new Error('ERR [UnionFind3]: find 方法的参数不合法');
    }

    // 一直向上找到树的根节点，直到找到自身
    while (p !== this.parent[p]) {
      p = this.parent[p];
    }

    return p;
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

module.exports = UnionFind4;
