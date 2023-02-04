const assert = require("node:assert/strict");
const test = require("node:test");
const LinkedListQueue = require("../LinkedListQueue-no-dummyHead");

test("测试 LinkedListQueue-no-dummyHead.js 所有方法", () => {
  const queue = new LinkedListQueue();

  assert.strictEqual(queue.toString(), "head null tail");
  assert.strictEqual(queue.size(), 0);
  assert.strictEqual(queue.isEmpty(), true);

  queue.add(3);
  queue.add(2);
  queue.add(1);

  assert.strictEqual(queue.toString(), "head 3->2->1->null tail");
  assert.strictEqual(queue.size(), 3);
  assert.strictEqual(queue.isEmpty(), false);

  queue.remove();
  queue.remove();

  assert.strictEqual(queue.toString(), "head 1->null tail");
  assert.strictEqual(queue.size(), 1);
  assert.strictEqual(queue.isEmpty(), false);

  queue.remove();

  assert.strictEqual(queue.toString(), "head null tail");
  assert.strictEqual(queue.size(), 0);
  assert.strictEqual(queue.isEmpty(), true);

  // 对一个空队列执行出队，则会报错
  assert.throws(
    () => {
      queue.remove();
    },
    {
      message: `you can't dequeue a empty queue`,
    }
  );
});
