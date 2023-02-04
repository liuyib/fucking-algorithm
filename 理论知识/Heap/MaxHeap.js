class MaxHeap {
  /** 存储堆数据的数组 */
  #data = [];

  /** 比较器（默认降序，值越大越靠前） */
  #comparator = (a, b) => b - a;

  /**
   * @param {function} comparator 比较器
   */
  constructor(comparator) {
    // 支持自定义比较器
    if (typeof comparator === "function") {
      this.#comparator = comparator;
    }
  }

  size = () => {
    return this.#data.length;
  };

  isEmpty = () => {
    return !this.#data.length;
  };

  /**
   * 字符串化
   * @param {function} stringify 序列化函数
   * @returns 数据转成字符串后的结果
   */
  toString = (stringify) => {
    // 支持自定义的字符串化函数
    if (typeof stringify === "function") {
      const res = this.#data.map((item) => stringify(item));

      return res.join(",");
    }

    return this.#data.join(",");
  };

  print = () => {
    console.log(this.toString());
  };

  /**
   * 交换数组中的两个位置的元素
   */
  #swap = (i, j) => {
    const temp = this.#data[i];

    this.#data[i] = this.#data[j];
    this.#data[j] = temp;
  };

  /**
   * 计算某个节点的父节点的索引
   * @param {number} index 节点的索引
   * @returns {number} 父节点的索引
   */
  #parent = (index) => {
    if (index <= 0) {
      throw new Error("MaxHeap ERR: `index` param is illegal");
    }

    return Math.floor((index - 1) / 2);
  };

  /**
   * 计算某个节点的左节点的索引
   * @param {number} index 节点的索引
   * @returns {number} 左节点的索引
   */
  #leftChild = (index) => {
    return index * 2 + 1;
  };

  /**
   * 计算某个节点的右节点的索引
   * @param {number} index 节点的索引
   * @returns {number} 右节点的索引
   */
  #rightChild = (index) => {
    return index * 2 + 2;
  };

  /**
   * 向堆中添加元素
   * @param {*} e 要添加的元素
   * @returns
   */
  add = (e) => {
    this.#data.push(e);
    this.#siftUp(this.#data.length - 1);
  };

  /**
   * 上浮
   * @param {number} index 需要上浮的元素索引
   * @returns
   */
  #siftUp = (index) => {
    while (
      index > 0 &&
      // 当前节点的值大于父节点的值
      this.#comparator(this.#data[index], this.#data[this.#parent(index)]) < 0
    ) {
      this.#swap(index, this.#parent(index));
      index = this.#parent(index);
    }
  };

  /**
   * 去除堆中的最大值（堆顶的元素）
   * @returns 堆中的最大值
   */
  remove = () => {
    const ret = this.#data[0];

    // 删除堆顶后，再将两个左右子树重新组合成一棵树的话，比较麻烦，
    // 因此这里取巧，直接将“数组最后一个元素”填充到“被删除的元素（堆顶）那里”
    this.#swap(0, this.#data.length - 1);
    this.#data.pop();
    // 将新的堆顶下沉
    this.#siftDown(0);

    return ret;
  };

  /**
   * 下沉
   * @param {number} index 需要下沉的元素索引
   * @returns
   */
  #siftDown = (index) => {
    // 至少存在左子树，才允许下沉操作
    while (this.#leftChild(index) < this.#data.length) {
      // 左右孩子中，最大的那个的索引
      let j = this.#leftChild(index);

      // 1. 右孩子存在
      // 2. 右孩子的值大于左孩子
      if (
        j + 1 < this.#data.length &&
        this.#comparator(this.#data[j + 1], this.#data[j]) < 0
      ) {
        j = this.#rightChild(index);
      }

      // 当前节点比左右两个孩子都要大
      if (this.#comparator(this.#data[index], this.#data[j]) <= 0) break;

      this.#swap(index, j);
      index = j;
    }
  };

  /**
   * 去除堆中的最大元素，并替换成新的值
   * @param {*} e 要替换的值
   * @returns 堆中的最大元素
   */
  replace = (e) => {
    const ret = this.peek();

    this.#data[0] = e;
    this.#siftDown(0);

    return ret;
  };

  /**
   * 获取堆中的最大元素
   * @returns 堆中的最大元素
   */
  peek = () => {
    if (!this.#data.length) {
      throw new Error("MaxHeap ERR: heap is empty");
    }

    return this.#data[0];
  };

  /**
   * 将任意数组转成最大堆。思路：
   * 1. 找到最后一个非叶子节点，将其记为 P
   * 2. 从 P 开始向前遍历，对所有遍历到的节点进行上浮操作
   *
   * 时间复杂度：
   * 1. 将元素一个个插入空堆中，时间复杂度 O(NlogN)
   * 2. heapify 过程，时间复杂度 O(N)
   *
   * @param {array} arr 任意数组
   * @returns
   */
  heapify = (arr) => {
    if (!Array.isArray(arr)) {
      throw new Error("MaxHeap ERR: param `arr` is illegal");
    }

    this.#data = arr;

    let parentIndexOfLastChild = this.#parent(this.size() - 1);

    for (let i = parentIndexOfLastChild; i >= 0; i--) {
      this.#siftDown(i);
    }
  };
}

module.exports = MaxHeap;
