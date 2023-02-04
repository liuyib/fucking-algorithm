const MaxHeap = require("../Heap/MaxHeap");

class PriorityQueue {
  /** 最大堆 */
  #maxHeap;

  /**
   * @param {function} comparator 比较器
   */
  constructor(comparator) {
    this.#maxHeap = new MaxHeap(comparator);
  }

  size = () => {
    return this.#maxHeap.size();
  };

  isEmpty = () => {
    return this.#maxHeap.isEmpty();
  };

  /**
   * 字符串化
   * @param {function} stringify 序列化函数
   * @returns 数据转成字符串后的结果
   */
  toString = (stringify) => {
    return this.#maxHeap.toString(stringify);
  };

  peek = () => {
    return this.#maxHeap.peek();
  };

  /**
   * 入队
   * @param {*} e 任意元素
   * @returns
   */
  add = (e) => {
    this.#maxHeap.add(e);
  };

  /**
   * 出队，返回出队的元素
   * @returns 出队的元素
   */
  remove = () => {
    return this.#maxHeap.remove();
  };
}

module.exports = PriorityQueue;
