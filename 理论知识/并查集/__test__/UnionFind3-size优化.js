const assert = require('node:assert/strict');
const test = require('node:test');
const utils = require('./utils');
const UnionFind1 = require('../UnionFind1');
const UnionFind2 = require('../UnionFind2');
const UnionFind3 = require('../UnionFind3-size优化');

const uf = new UnionFind3(10);

test('测试 UnionFind3.js - getSize, find, isConnected 方法', () => {
  assert.strictEqual(uf.getSize(), 10);
  assert.strictEqual(uf.find(3), 3);
  assert.strictEqual(uf.isConnected(0, 1), false);
});

test('测试 UnionFind3.js - union 方法', () => {
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

function testUnionFind(uf, count) {
  for (let i = 0; i < count; i++) {
    uf.union(utils.random(0, count), utils.random(0, count));
  }

  for (let i = 0; i < count; i++) {
    uf.isConnected(utils.random(0, count), utils.random(0, count));
  }
}

const size = 100_0000;
const count = 100_0000;
const uf1 = new UnionFind1(size);
const uf2 = new UnionFind2(size);
const uf3 = new UnionFind3(size);

// test('UnionFind1.js - 基准测试（Benchmark）', () => {
//   testUnionFind(uf1, count);
// });
test('UnionFind2.js - 基准测试（Benchmark）', () => {
  testUnionFind(uf2, count);
});
test('UnionFind3.js - 基准测试（Benchmark）', () => {
  testUnionFind(uf3, count);
});
