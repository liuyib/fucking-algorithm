const assert = require('node:assert/strict');
const test = require('node:test');
const uf7 = require('../UnionFind7-树结构实现');

test('测试 UnionFind7.js - create, find, union, isConnected 方法', () => {
  const a = uf7.create('a');
  const b = uf7.create('b');
  const c = uf7.create('c');
  const d = uf7.create('d');
  const e = uf7.create('e');
  const f = uf7.create('f');

  assert.strictEqual(uf7.find(a) === uf7.find(b), false);
  assert.strictEqual(uf7.isConnected(a, b), false);

  uf7.union(a, b);
  uf7.union(a, c);
  uf7.union(a, d);

  assert.strictEqual(uf7.find(a) === uf7.find(b), true);
  assert.strictEqual(uf7.find(a) === uf7.find(c), true);
  assert.strictEqual(uf7.find(a) === uf7.find(d), true);
  assert.strictEqual(uf7.find(a) === uf7.find(e), false);
  assert.strictEqual(uf7.find(a) === uf7.find(f), false);
});
