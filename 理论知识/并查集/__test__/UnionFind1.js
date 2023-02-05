const assert = require('node:assert/strict');
const test = require('node:test');
const UnionFind = require('../UnionFind1');

const uf = new UnionFind(10);

test('测试 UnionFind1.js - getSize, find, isConnected 方法', () => {
  assert.strictEqual(uf.getSize(), 10);
  assert.strictEqual(uf.find(3), 3);
  assert.strictEqual(uf.isConnected(0, 1), false);
});

test('测试 UnionFind1.js - union 方法', () => {
  uf.union(1, 3);
  uf.union(3, 4);

  // 属于同一集合
  assert.strictEqual(uf.isConnected(1, 1), true);
  assert.strictEqual(uf.isConnected(3, 3), true);
  assert.strictEqual(uf.isConnected(4, 4), true);
  assert.strictEqual(uf.isConnected(1, 3), true);
  assert.strictEqual(uf.isConnected(1, 4), true);
  assert.strictEqual(uf.isConnected(3, 4), true);

  // 不属于同一集合
  assert.strictEqual(uf.isConnected(0, 1), false);
  assert.strictEqual(uf.isConnected(0, 3), false);
  assert.strictEqual(uf.isConnected(0, 4), false);

  console.log(`uf.toString() -->`, uf.toString());
});
