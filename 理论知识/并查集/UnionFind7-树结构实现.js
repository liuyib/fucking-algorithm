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

function find(x) {
  if (x.parent === null) return x;

  x.parent = find(x.parent);

  return x.parent;
}

function union(x, y) {
  const xRoot = find(x);
  const yRoot = find(y);

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

function isConnected(x, y) {
  return find(x) === find(y);
}

module.exports = {
  create,
  find,
  union,
  isConnected,
};
