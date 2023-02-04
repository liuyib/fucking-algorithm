const assert = require("node:assert/strict");
const test = require("node:test");
const BST = require("../BST.js");

const bst = new BST();

bst.add(30);
bst.add(20);
bst.add(61);
bst.add(11);
bst.add(25);
bst.add(52);

test("测试 BST.js - add 和 addNR 方法", () => {
  const bst = new BST();

  assert.strictEqual(bst.isEmpty(), true);

  bst.add(30);
  bst.add(20);
  bst.add(61);
  bst.add(11);
  bst.add(25);
  bst.add(52);
  bst.add(77);
  bst.add(4);
  bst.addNR(15);
  bst.addNR(22);
  bst.addNR(29);
  bst.addNR(69);
  bst.addNR(62);

  assert.strictEqual(bst.isEmpty(), false);
  assert.strictEqual(bst.size(), 13);
});

test("测试 BST.js - includes 和 includesNR 方法", () => {
  assert.strictEqual(bst.includes(61), true);
  assert.strictEqual(bst.includes(100), false);
  assert.strictEqual(bst.includesNR(61), true);
  assert.strictEqual(bst.includesNR(100), false);
});

test("测试 BST.js - preOrder, inOrder, postOrder 方法", () => {
  bst.clearTest();
  bst.preOrder();
  assert.strictEqual(bst.__test__.join(","), "30,20,11,25,61,52");

  bst.clearTest();
  bst.inOrder();
  assert.strictEqual(bst.__test__.join(","), "11,20,25,30,52,61");

  bst.clearTest();
  bst.postOrder();
  assert.strictEqual(bst.__test__.join(","), "11,25,20,52,61,30");
});

test("测试 BST.js - preOrderNR, inOrderNR, postOrderNR 方法", () => {
  bst.clearTest();
  bst.preOrderNR();
  assert.strictEqual(bst.__test__.join(","), "30,20,11,25,61,52");

  bst.clearTest();
  bst.inOrderNR();
  assert.strictEqual(bst.__test__.join(","), "11,20,25,30,52,61");

  bst.clearTest();
  bst.postOrderNR();
  assert.strictEqual(bst.__test__.join(","), "11,25,20,52,61,30");
});

test("测试 BST.js - levelOrder 方法", () => {
  bst.clearTest();
  bst.levelOrder();
  assert.strictEqual(bst.__test__.join(","), "30,20,61,11,25,52");
});

test("测试 BST.js - getMin, getMax 方法", () => {
  assert.strictEqual(bst.getMin().e, 11);
  assert.strictEqual(bst.getMax().e, 61);
});

test("测试 BST.js - removeMin, removeMax 方法", () => {
  const bst = new BST();

  bst.add(30);
  bst.add(20);
  bst.add(61);
  bst.add(11);
  bst.add(25);
  bst.add(52);

  bst.removeMin();
  // 用层序遍历验证
  bst.clearTest();
  bst.levelOrder();
  assert.strictEqual(bst.__test__.join(","), "30,20,61,25,52");
  assert.strictEqual(bst.size, 5);

  bst.removeMax();
  // 用层序遍历验证
  bst.clearTest();
  bst.levelOrder();
  assert.strictEqual(bst.__test__.join(","), "30,20,52,25");
  assert.strictEqual(bst.size, 4);
});

test("测试 BST.js - remove 方法", () => {
  const bst = new BST();

  bst.add(30);
  bst.add(20);
  bst.add(61);
  bst.add(11);
  bst.add(25);
  bst.add(52);

  bst.remove(52);
  // 用层序遍历验证
  bst.clearTest();
  bst.levelOrder();
  assert.strictEqual(bst.__test__.join(","), "30,20,61,11,25");
  assert.strictEqual(bst.size, 5);

  bst.remove(61);
  // 用层序遍历验证
  bst.clearTest();
  bst.levelOrder();
  assert.strictEqual(bst.__test__.join(","), "30,20,11,25");
  assert.strictEqual(bst.size, 4);

  bst.remove(20);
  // 用层序遍历验证
  bst.clearTest();
  bst.levelOrder();
  assert.strictEqual(bst.__test__.join(","), "30,25,11");
  assert.strictEqual(bst.size, 3);
});

test("测试 BST.js - removeNR 方法", () => {
  const bst = new BST();

  bst.add(30);
  bst.add(20);
  bst.add(61);
  bst.add(11);
  bst.add(25);
  bst.add(52);

  bst.removeNR(52);
  // 用层序遍历验证
  bst.clearTest();
  bst.levelOrder();
  assert.strictEqual(bst.__test__.join(","), "30,20,61,11,25");
  assert.strictEqual(bst.size, 5);

  bst.removeNR(61);
  // 用层序遍历验证
  bst.clearTest();
  bst.levelOrder();
  assert.strictEqual(bst.__test__.join(","), "30,20,11,25");
  assert.strictEqual(bst.size, 4);

  bst.removeNR(20);
  // 用层序遍历验证
  bst.clearTest();
  bst.levelOrder();
  assert.strictEqual(bst.__test__.join(","), "30,25,11");
  assert.strictEqual(bst.size, 3);
});
