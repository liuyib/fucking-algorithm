const assert = require('node:assert/strict');
const test = require('node:test');
const UnionFind1 = require('../UnionFind1');
const UnionFind2 = require('../UnionFind2');

const uf = new UnionFind2(10);

test('测试 UnionFind2.js - size, find, isConnected 方法', () => {
  assert.strictEqual(uf.size(), 10);
  assert.strictEqual(uf.find(3), 3);
  assert.strictEqual(uf.isConnected(0, 1), false);
});

test('测试 UnionFind2.js - union 方法', () => {
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
});

function testUnionFind(uf, count) {
  for (let i = 0; i < count; i++) {
    uf.union(Math.random(), Math.random());
  }

  for (let i = 0; i < count; i++) {
    uf.isConnected(Math.random(), Math.random());
  }
}

const size = 100_000_000;
const count = 10000;
const uf1 = new UnionFind1(size);
const uf2 = new UnionFind2(size);

test('UnionFind1.js - 基准测试（Benchmark）', () => {
  testUnionFind(uf1, count);
});
test('UnionFind2.js - 基准测试（Benchmark）', () => {
  testUnionFind(uf2, count);
});

// 基准测试结论：
// - 当并查集的 size 较小时，UnionFind1 和 UnionFind2 性能差距不大
// - 当并查集的 size 特别大时（node v18.0.0，size 一亿以上），两者才能看出明显的性能差距
