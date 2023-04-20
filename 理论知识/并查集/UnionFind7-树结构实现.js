/**
 * 第七版的并查集（使用树结构实现），使用“rank + 路径压缩”优化
 */

function create(value) {
  return {
    value,
    rank: 0,
    parent: null,
  };
}

function find(node) {
  if (node.parent === null) return node;

  node.parent = find(node.parent);

  return node.parent;
}

function union(node1, node2) {
  const root1 = find(node1);
  const root2 = find(node2);

  if (root1 === root2) return;

  if (root1.rank < root2.rank) {
    root1.parent = root2;
  } else {
    root2.parent = root1;

    if (root2.rank < root1.rank) {
      root1.rank++;
    }
  }
}

function isConnected(node1, node2) {
  return find(node1) === find(node2);
}

module.exports = {
  create,
  find,
  union,
  isConnected,
};
