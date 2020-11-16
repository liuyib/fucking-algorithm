/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 *
 * https://leetcode-cn.com/problems/lru-cache/description/
 *
 * @tags '设计'
 *
 * 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
 *
 * 实现 LRUCache 类：
 *
 * LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * void put(int key, int value)
 * 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 *
 * 进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？
 *
 * 示例：
 *
 * 输入
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * 输出
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 *
 * 解释
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // 缓存是 {1=1}
 * lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
 * lRUCache.get(1);    // 返回 1
 * lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
 * lRUCache.get(2);    // 返回 -1 (未找到)
 * lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
 * lRUCache.get(1);    // 返回 -1 (未找到)
 * lRUCache.get(3);    // 返回 3
 * lRUCache.get(4);    // 返回 4
 *
 * 提示：
 * 1. 1 <= capacity <= 3000
 * 2. 0 <= key <= 3000
 * 3. 0 <= value <= 104
 * 4. 最多调用 3 * 104 次 get 和 put
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
  this.head = null;
  this.tail = null;
  this.size = 0;
};

var LinkedNode = function (key, val) {
  this.key = key === undefined ? 0 : key;
  this.val = val === undefined ? 0 : val;
  this.prev = null;
  this.next = null;
};

LRUCache.prototype.addNode = function (node) {
  if (this.tail) {
    const preNode = this.tail.prev;

    preNode.next = node;
    node.prev = preNode;
    this.tail.prev = node;
    node.next = this.tail;
  } else {
    if (!this.head) this.head = new LinkedNode();
    if (!this.tail) this.tail = new LinkedNode();

    this.head.next = node;
    this.tail.prev = node;
    node.prev = this.head;
    node.next = this.tail;
  }
};

LRUCache.prototype.delNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
  node.prev = null;
  node.next = null;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const findNode = this.cache.get(key);

    this.delNode(findNode);
    this.addNode(findNode);

    return findNode.val;
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    const oldNode = this.cache.get(key);
    const newNode = new LinkedNode(key, value);

    this.delNode(oldNode);
    this.addNode(newNode);
    this.cache.set(key, newNode);
  } else {
    if (this.size !== 0 && this.size >= this.capacity) {
      this.cache.delete(this.head.next.key);
      this.delNode(this.head.next);
      this.size--;
    }

    const newNode = new LinkedNode(key, value);
    this.cache.set(key, newNode);
    this.addNode(newNode);
    this.size++;
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// const l = new LRUCache(1);
// console.log(l.put(2, 1));
// console.log(l.get(2));
// console.log(l.put(3, 2));
// console.log(l.get(2));
// console.log(l.get(3));
// console.log("Should: [null, 1, null, -1, 2]");

// const l = new LRUCache(2);
// console.log(l.put(1, 1));
// console.log(l.put(2, 2));
// console.log(l.get(1));
// console.log(l.put(3, 3));
// console.log(l.get(2));
// console.log(l.put(4, 4));
// console.log(l.get(1));
// console.log(l.get(3));
// console.log(l.get(4));
// console.log("Should: [null, null, null, 1, null, -1, null, -1, 3, 4]");

// const l = new LRUCache(2);
// console.log(l.put(2, 1));
// console.log(l.put(2, 2));
// console.log(l.get(2));
// console.log(l.put(1, 1));
// console.log(l.put(4, 1));
// console.log(l.get(2));
// console.log('Should: [null, null, 2, null, null, -1]');
// @lc code=end
