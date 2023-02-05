/**
 * 第一版的并查集（使用数组模拟，简单实现）
 *
 * 举例：
 * id     0 1 2 3 4 5 6 7 8 9
 * --------------------------
 * value  0 1 0 1 0 1 0 1 0 1
 *
 * 其中，id 为 1、3、5、7、9 的数据值为 1，属于同一个集合，其余的数据值属于另一个集合。
 */

class UnionFind1 {
  id = [];

  constructor(size) {
    // 初始化 id 数组
    for (let i = 0; i < size; i++) {
      this.id[i] = i;
    }
  }

  toString = () => {
    return this.id.join(', ');
  };

  getSize = () => {
    return this.id.length;
  };

  find = (p) => {
    if (p < 0 || p >= this.id.length) {
      throw new Error('ERR [UnionFind1]: find 方法的参数不合法');
    }

    return this.id[p];
  };

  isConnected = (p1, p2) => {
    return this.find(p1) === this.find(p2);
  };

  union = (p1, p2) => {
    const root1 = this.find(p1);
    const root2 = this.find(p2);

    if (root1 === root2) return;

    for (let i = 0; i < this.id.length; i++) {
      if (i === p2) {
        this.id[p2] = root1;
      }
    }
  };
}

module.exports = UnionFind1;
