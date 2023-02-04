const assert = require("node:assert/strict");
const test = require("node:test");
const MaxHeap = require("../MaxHeap");

test("测试 MaxHeap.js - size, isEmpty, toString 方法", () => {
  const maxHeap = new MaxHeap();

  assert.strictEqual(maxHeap.size(), 0);
  assert.strictEqual(maxHeap.isEmpty(), true);
  assert.strictEqual(maxHeap.toString(), "");
});

test("测试 MaxHeap.js - add, remove 方法", () => {
  const maxHeap = new MaxHeap();

  maxHeap.add(1);
  maxHeap.add(4);
  maxHeap.add(3);
  maxHeap.add(10);
  maxHeap.add(8);
  maxHeap.add(5);
  assert.strictEqual(maxHeap.toString(), "10,8,5,1,4,3");

  maxHeap.remove();
  assert.strictEqual(maxHeap.toString(), "8,4,5,1,3");

  maxHeap.remove();
  assert.strictEqual(maxHeap.toString(), "5,4,3,1");

  maxHeap.remove();
  assert.strictEqual(maxHeap.toString(), "4,1,3");

  maxHeap.remove();
  assert.strictEqual(maxHeap.toString(), "3,1");

  maxHeap.remove();
  assert.strictEqual(maxHeap.toString(), "1");

  maxHeap.remove();
  assert.strictEqual(maxHeap.toString(), "");
});

test("测试 MaxHeap.js - replace, peek 方法", () => {
  const maxHeap = new MaxHeap();

  assert.throws(() => maxHeap.peek(), {
    message: "MaxHeap ERR: heap is empty",
  });

  assert.throws(() => maxHeap.replace(1), {
    message: "MaxHeap ERR: heap is empty",
  });

  maxHeap.add(1);
  maxHeap.add(4);
  maxHeap.add(3);
  maxHeap.add(10);
  maxHeap.add(8);
  maxHeap.add(5);
  assert.strictEqual(maxHeap.toString(), "10,8,5,1,4,3");

  assert.strictEqual(maxHeap.peek(), 10);
  assert.strictEqual(maxHeap.replace(6), 10);
  assert.strictEqual(maxHeap.toString(), "8,6,5,1,4,3");
});

test("测试 MaxHeap.js - heapify 方法", () => {
  const maxHeap = new MaxHeap();

  maxHeap.heapify([1, 4, 3, 10, 8, 5]);

  assert.strictEqual(maxHeap.toString(), "10,8,5,4,1,3");
});

test("测试 MaxHeap.js - 通过自定义比较器来构建最大堆", () => {
  const maxHeap1 = new MaxHeap((a, b) => {
    // 长度越小，权重越大，越靠近堆顶
    return a.length - b.length;
  });

  maxHeap1.add("aaaaa");
  maxHeap1.add("aa");
  maxHeap1.add("aaaa");
  maxHeap1.add("a");
  assert.strictEqual(maxHeap1.toString(), "a,aa,aaaa,aaaaa");

  // ---------------------------------------------------------

  const maxHeap2 = new MaxHeap((a, b) => {
    // 按照分数降序排序（分数越高越靠前）
    return b.score - a.score;
  });

  maxHeap2.add({ name: "1", score: 23 });
  maxHeap2.add({ name: "2", score: 99 });
  maxHeap2.add({ name: "3", score: 60 });
  maxHeap2.add({ name: "4", score: 87 });

  assert.strictEqual(
    // 只比较分数
    maxHeap2.toString((a) => a.score),
    "99,87,60,23"
  );
});
