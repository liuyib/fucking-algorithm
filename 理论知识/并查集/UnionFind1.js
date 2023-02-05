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

  size = () => {
    return this.id.length;
  };

  find = (key) => {
    if (key < 0 || key >= this.id.length) {
      throw new Error('ERR [UnionFind1]: find 方法的参数不合法');
    }

    return this.id[key];
  };

  isConnected = (key1, key2) => {
    return this.find(key1) === this.find(key2);
  };

  union = (key1, key2) => {
    const value1 = this.find(key1);
    const value2 = this.find(key2);

    if (value1 === value2) return;

    for (let i = 0; i < this.id.length; i++) {
      if (i === key2) {
        this.id[key2] = value1;
      }
    }
  };
}

module.exports = UnionFind1;
