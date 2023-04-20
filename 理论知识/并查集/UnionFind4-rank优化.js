/**
 * 第四版的并查集（使用数组实现），使用 rank 优化
 *
 * 优化背景：如果按照 size 优化，则下图中会将“根节点为 1 的树”合并到“根节点为 5 的树上”：
 *              ╭─╮         ╭─╮
 *             ╭↓─┴╮       ╭↓─┴╮
 *             │ 1 │       │ 5 │
 *             ╰───╯       ╰───╯
 *      ↗    ↗   ↑   ↖       ↑
 * ╭───╮ ╭───╮ ╭─┴─╮ ╭───╮ ╭─┴─╮
 * │ 2 │ │ 8 │ │ 4 │ │ 9 │ │ 6 │
 * ╰───╯ ╰───╯ ╰───╯ ╰───╯ ╰───╯
 *                           ↑
 *                         ╭─┴─╮
 *                         │ 7 │
 *                         ╰───╯
 *
 * 合并结果：
 *                          ╭─╮
 *                         ╭↓─┴╮
 *                         │ 5 │
 *                         ╰───╯
 *                    ↗      ↑
 *             ╭───╮       ╭─┴─╮
 *             │ 1 │       │ 6 │
 *             ╰───╯       ╰───╯
 *      ↗    ↗   ↑   ↖       ↑
 * ╭───╮ ╭───╮ ╭─┴─╮ ╭───╮ ╭─┴─╮
 * │ 2 │ │ 8 │ │ 4 │ │ 9 │ │ 7 │
 * ╰───╯ ╰───╯ ╰───╯ ╰───╯ ╰───╯
 *
 * 可以看出，大部分节点路径偏长，如果反过来则大部分节点路径较短：
 *              ╭─╮
 *             ╭↓─┴╮
 *             │ 1 │
 *             ╰───╯
 *      ↗    ↗   ↑   ↖     ↖
 * ╭───╮ ╭───╮ ╭─┴─╮ ╭───╮ ╭───╮
 * │ 2 │ │ 8 │ │ 4 │ │ 9 │ │ 5 │
 * ╰───╯ ╰───╯ ╰───╯ ╰───╯ ╰───╯
 *                           ↑
 *                         ╭─┴─╮
 *                         │ 6 │
 *                         ╰───╯
 *                           ↑
 *                         ╭─┴─╮
 *                         │ 7 │
 *                         ╰───╯
 *
 * 虽然这样优化后，还有些分支路径过长，但是再配合“路径压缩（节点全部压缩到根节点）”后，将变得全部展平，如下：
 *              ╭─╮
 *             ╭↓─┴╮
 *             │ 1 │
 *             ╰───╯
 *      ↗    ↗   ↑   ↖    ↖     ↖     ↖
 * ╭───╮ ╭───╮ ╭─┴─╮ ╭───╮ ╭───╮ ╭───╮ ╭───╮
 * │ 2 │ │ 8 │ │ 4 │ │ 9 │ │ 5 │ │ 6 │ │ 7 │
 * ╰───╯ ╰───╯ ╰───╯ ╰───╯ ╰───╯ ╰───╯ ╰───╯
 *
 * 而之前的那种方式，再配合路径压缩也达不到这种效果。
 *
 * 不过对于实际情况，两种路径压缩性能上差别不大，不必过分纠结用哪种。
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
      throw new Error('ERR [UnionFind4]: find 方法的参数不合法');
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
