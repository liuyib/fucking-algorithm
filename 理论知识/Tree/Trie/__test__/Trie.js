const assert = require('node:assert/strict');
const test = require('node:test');
const Trie = require('../Trie.js');

test('测试 Trie.js - getSize/add/has 方法', () => {
  const trie = new Trie();

  assert.strictEqual(trie.getSize(), 0);

  assert.strictEqual(trie.has('hello'), false);
  trie.add('hello');
  assert.strictEqual(trie.getSize(), 1);
  assert.strictEqual(trie.has('hello'), true);

  assert.strictEqual(trie.has('word'), false);
  trie.add('word');
  assert.strictEqual(trie.getSize(), 2);
  assert.strictEqual(trie.has('word'), true);
});
