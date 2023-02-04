const assert = require("node:assert/strict");
const test = require("node:test");
const LinkedListStack = require("../LinkedListStack");

test("测试 LinkedListStack.js 所有方法", () => {
  const stack = new LinkedListStack();

  assert.strictEqual(stack.size(), 0);
  assert.strictEqual(stack.isEmpty(), true);

  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);

  assert.strictEqual(stack.toString(), "top 4->3->2->1->null bottom");
  assert.strictEqual(stack.size(), 4);
  assert.strictEqual(stack.isEmpty(), false);

  stack.pop();

  assert.strictEqual(stack.toString(), "top 3->2->1->null bottom");
  assert.strictEqual(stack.peek(), 3);
});
