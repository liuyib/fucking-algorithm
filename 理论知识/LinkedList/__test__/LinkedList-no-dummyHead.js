const assert = require("node:assert/strict");
const test = require("node:test");
const LinkedList = require("../LinkedList-no-dummyHead");

test("测试 LinkedList-no-dummyHead.js 所有方法", () => {
  const link = new LinkedList();

  assert.strictEqual(link.size(), 0);
  assert.strictEqual(link.isEmpty(), true);

  link.addFirst("a");
  link.addLast("b");
  link.addLast("c");

  assert.strictEqual(link.toString(), "a->b->c->null");
  assert.strictEqual(link.size(), 3);
  assert.strictEqual(link.isEmpty(), false);
  assert.strictEqual(link.includes("b"), true);
  assert.strictEqual(link.includes("z"), false);
  assert.strictEqual(link.get(1), "b");
  assert.strictEqual(link.getFirst(), "a");
  assert.strictEqual(link.getLast(), "c");

  link.set(1, "2");
  assert.strictEqual(link.toString(), "a->2->c->null");
  link.setFirst(1);
  assert.strictEqual(link.toString(), "1->2->c->null");
  link.setLast(3);
  assert.strictEqual(link.toString(), "1->2->3->null");

  link.remove(2);
  assert.strictEqual(link.toString(), "1->2->null");
  assert.strictEqual(link.size(), 2);
  assert.strictEqual(link.isEmpty(), false);

  link.removeFirst();
  assert.strictEqual(link.toString(), "2->null");
  assert.strictEqual(link.size(), 1);
  assert.strictEqual(link.isEmpty(), false);

  link.removeLast();
  assert.strictEqual(link.toString(), "null");
  assert.strictEqual(link.size(), 0);
  assert.strictEqual(link.isEmpty(), true);

  // 空链表情况下，再执行以下删除操作，会抛错
  assert.throws(
    () => {
      link.remove(0);
      link.removeFirst();
      link.removeLast();
    },
    {
      message: "ERR: LinkedList -> remove: illegal index",
    }
  );
});
