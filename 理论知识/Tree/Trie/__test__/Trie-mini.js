const assert = require('node:assert/strict');
const test = require('node:test');
const Trie = require('../Trie-mini.js');

test('测试 Trie.js - add/has 方法', () => {
  const trie = new Trie();

  assert.strictEqual(trie.has('hello'), false);
  trie.add('hello');
  assert.strictEqual(trie.has('hello'), true);

  assert.strictEqual(trie.has('word'), false);
  trie.add('word');
  assert.strictEqual(trie.has('word'), true);
});
