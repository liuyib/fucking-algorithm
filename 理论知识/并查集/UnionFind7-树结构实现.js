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
  const xRoot = find(node1);
  const yRoot = find(node2);

  if (xRoot === yRoot) return;

  if (xRoot.rank < yRoot.rank) {
    xRoot.parent = yRoot;
  } else {
    yRoot.parent = xRoot;

    if (yRoot.rank < xRoot.rank) {
      xRoot.rank++;
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
