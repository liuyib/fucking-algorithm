const assert = require("node:assert/strict");
const test = require("node:test");
const PriorityQueue = require("../PriorityQueue");

test("测试 PriorityQueue.js - add, remove 方法", () => {
  const priorityQueue = new PriorityQueue();

  priorityQueue.add(1);
  assert.strictEqual(priorityQueue.toString(), "1");
  priorityQueue.add(4);
  assert.strictEqual(priorityQueue.toString(), "4,1");
  priorityQueue.add(3);
  assert.strictEqual(priorityQueue.toString(), "4,1,3");
  priorityQueue.add(10);
  assert.strictEqual(priorityQueue.toString(), "10,4,3,1");
  priorityQueue.add(8);
  assert.strictEqual(priorityQueue.toString(), "10,8,3,1,4");
  priorityQueue.add(5);
  assert.strictEqual(priorityQueue.toString(), "10,8,5,1,4,3");

  assert.strictEqual(priorityQueue.remove(), 10);
  assert.strictEqual(priorityQueue.toString(), "8,4,5,1,3");
  assert.strictEqual(priorityQueue.remove(), 8);
  assert.strictEqual(priorityQueue.toString(), "5,4,3,1");
  assert.strictEqual(priorityQueue.remove(), 5);
  assert.strictEqual(priorityQueue.toString(), "4,1,3");
  assert.strictEqual(priorityQueue.remove(), 4);
  assert.strictEqual(priorityQueue.toString(), "3,1");
  assert.strictEqual(priorityQueue.remove(), 3);
  assert.strictEqual(priorityQueue.toString(), "1");
  assert.strictEqual(priorityQueue.remove(), 1);
  assert.strictEqual(priorityQueue.toString(), "");
});
