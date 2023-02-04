class Node {
  constructor(e) {
    this.e = e === undefined ? null : e;
    this.left = null;
    this.right = null;

    // 画树用的辅助变量
    this.x = 0;
    this.y = 0;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.size = 0;
    /** 为了方便测试，存储一些值 */
    this.__test__ = [];
  }

  size = () => {
    return this.size;
  };

  isEmpty = () => {
    return this.size === 0;
  };

  print = () => {
    let curr = this.root;
    // 每一层的格式化为字符串的结果
    let levelStrings = [];
    // 叶子结点累加器（计算叶子结点数量）
    let leafAccumulator = 0;

    const LEVEL_HEIGHT = 1;
    const GAP = 10;

    // 存储每一层格式化后的字符串
    const storeLevelStrings = ({ node, depth }) => {
      if (levelStrings[depth] !== undefined) {
        let res = levelStrings[depth];
        const temp = node.x - res.length;
        const spaceCount = temp > 0 ? temp : 0;

        res += " ".repeat(spaceCount) + node.e;
        levelStrings[depth] = res;
      } else {
        const temp = node.x;
        const spaceCount = temp > 0 ? temp : 0;
        const res = " ".repeat(spaceCount) + node.e;

        levelStrings[depth] = res;
      }
    };

    const postOrderTraverse = (node, depth) => {
      if (!node) return;

      // 叶子节点
      if (node.left === null && node.right === null) {
        node.x = leafAccumulator;
        node.y = depth;
        storeLevelStrings({ node, depth });
        leafAccumulator += GAP;
      } else {
        if (node.left !== null) {
          postOrderTraverse(node.left, depth + LEVEL_HEIGHT);
        }

        if (node.right !== null) {
          postOrderTraverse(node.right, depth + LEVEL_HEIGHT);
        }

        const leftX = node.left?.x;
        const rightX = node.right?.x;
        let pX = 0;

        // 计算非叶子结点的 x 坐标
        if (node.left && node.right) {
          pX = leftX + (rightX - leftX) / 2;
        } else if (node.left) {
          pX = leftX + GAP / 2;
        } else if (node.right) {
          pX = rightX - GAP / 2;
        }

        node.x = pX;
        node.y = depth;
        storeLevelStrings({ node, depth });
      }
    };

    postOrderTraverse(curr, 0);

    const stringifyTree = levelStrings.map((r) => r).join("\n");

    console.log(stringifyTree);
  };

  clearTest = () => {
    this.__test__ = [];
  };

  /**
   * 添加节点（递归）
   */
  add = (e) => {
    this.root = this.#add(this.root, e);
  };

  #add = (node, e) => {
    if (!node) {
      this.size++;
      return new Node(e);
    }

    if (e === node.e) {
      // 暂时不处理相等的情况
    } else if (e < node.e) {
      node.left = this.#add(node.left, e);
    } else if (e > node.e) {
      node.right = this.#add(node.right, e);
    }

    return node;
  };

  /**
   * 添加节点（非递归）
   */
  addNR = (e) => {
    const newNode = new Node(e);

    if (this.root === null) {
      this.root = newNode;
      this.size++;
    } else {
      let node = this.root;

      while (true) {
        if (e === node.e) {
          // 暂时不支持添加已存在的值
          throw new Error("Tree add: can't add an exit node");
        } else if (e < node.e) {
          if (node.left === null) {
            node.left = newNode;
            this.size++;

            return;
          } else {
            node = node.left;
          }
        } else if (e > node.e) {
          if (node.right === null) {
            node.right = newNode;
            this.size++;

            return;
          } else {
            node = node.right;
          }
        }
      }
    }
  };

  /**
   * 删除任意节点（递归）
   */
  remove = (e) => {
    this.#remove(this.root, e);
  };

  /**
   * 思路：
   * 找到待删除的节点后：
   * 1. 没有左右子树，直接删除
   * 2. 只有左子树，用左子树的根节点替换
   * 3. 只有右子树，用右子树的根节点替换
   * 4. 同时有左右子树，用“右子树的最小节点替换”或“左子树的最大节点替换”
   */
  #remove = (node, e) => {
    if (node == null) {
      return;
    }

    if (e < node.e) {
      node.left = this.#remove(node.left, e);

      return node;
    } else if (e > node.e) {
      node.right = this.#remove(node.right, e);

      return node;
    }

    if (node.right == null) {
      const leftTree = node.left;

      node.left = null;
      this.size--;

      return leftTree;
    }
    if (node.left == null) {
      const rightTree = node.right;

      node.right = null;
      this.size--;

      return rightTree;
    }

    const rightMinNode = this.#getMin(node.right);

    rightMinNode.right = this.#removeMin(node.right);
    rightMinNode.left = node.left;
    node.left = node.right = null;

    return rightMinNode;
  };

  /**
   * 删除节点（非递归）
   */
  removeNR = (e) => {
    let node = this.root;
    let parent = null;
    // 取值 "left" | "right"，表示当前节点是其父节点的左/右孩子
    let flag = "";

    while (node != null && e !== node.e) {
      if (e < node.e) {
        parent = node;
        flag = "left";
        node = node.left;
      } else if (e > node.e) {
        parent = node;
        flag = "right";
        node = node.right;
      }
    }

    if (node.left == null && node.right == null) {
      parent[flag] = null;
      this.size--;
    } else if (node.right == null) {
      const leftTree = node.left;

      node.left = null;
      parent.left = leftTree;
      this.size--;
    } else if (node.left == null) {
      const rightTree = node.right;

      node.right = null;
      parent.right = rightTree;
      this.size--;
    } else {
      const rightMinNode = this.#getMin(node.right);

      rightMinNode.right = this.#removeMin(node.right);
      rightMinNode.left = node.left;
      node.left = node.right = null;
      parent[flag] = rightMinNode;
    }
  };

  /**
   * 查找节点（递归）
   */
  includes = (e) => {
    return this.#includes(this.root, e);
  };

  #includes = (node, e) => {
    if (node === null) return false;
    if (e === node.e) return true;

    if (e < node.e) {
      return this.#includes(node.left, e);
    } else if (e > node.e) {
      return this.#includes(node.right, e);
    }
  };

  /**
   * 查找节点（非递归）
   */
  includesNR = (e) => {
    let node = this.root;

    while (node) {
      if (e === node.e) return true;

      if (e < node.e) {
        node = node.left;
      } else if (e > node.e) {
        node = node.right;
      }
    }

    return false;
  };

  /**
   * 前序遍历
   */
  preOrder = () => {
    this.#preOrder(this.root);
  };

  #preOrder = (node) => {
    if (!node) return;

    // 访问根节点
    this.__test__.push(node.e);

    this.#preOrder(node.left);
    this.#preOrder(node.right);
  };

  /**
   * 中序遍历
   */
  inOrder = () => {
    this.#inOrder(this.root);
  };

  #inOrder = (node) => {
    if (!node) return;

    this.#inOrder(node.left);

    // 访问根节点
    this.__test__.push(node.e);

    this.#inOrder(node.right);
  };

  /**
   * 后序遍历
   */
  postOrder = () => {
    this.#postOrder(this.root);
  };

  #postOrder = (node) => {
    if (!node) return;

    this.#postOrder(node.left);
    this.#postOrder(node.right);

    // 访问根节点
    this.__test__.push(node.e);
  };

  // 前、中、后序遍历的非递归解法，一般常见的思路都不统一。而如果思路不统一，时间长了很容易忘记。下面是统一思路：
  // https://zhuanlan.zhihu.com/p/260497281
  // 下面的三种实现的思路是统一的：

  /**
   * 前序遍历（非递归）
   *
   * ！！重点！！
   * 1. 用栈模拟
   * 2. 右孩子先入栈，然后是左孩子
   */
  preOrderNR() {
    const stack = [this.root];

    while (stack.length) {
      const top = stack.pop();

      if (top !== null) {
        if (top.right) stack.push(top.right);
        if (top.left) stack.push(top.left);

        stack.push(top);
        stack.push(null); // 标记中间节点
      } else {
        this.__test__.push(stack.pop().e);
      }
    }
  }

  /**
   * 中序遍历（非递归）
   */
  inOrderNR() {
    const stack = [this.root];

    while (stack.length) {
      const top = stack.pop();

      if (top !== null) {
        if (top.right) stack.push(top.right);

        stack.push(top);
        stack.push(null); // 标记中间节点

        if (top.left) stack.push(top.left);
      } else {
        this.__test__.push(stack.pop().e);
      }
    }
  }

  /**
   * 后序遍历（非递归）
   */
  postOrderNR() {
    const stack = [this.root];

    while (stack.length) {
      const top = stack.pop();

      if (top !== null) {
        stack.push(top);
        stack.push(null); // 标记中间节点

        if (top.right) stack.push(top.right);
        if (top.left) stack.push(top.left);
      } else {
        this.__test__.push(stack.pop().e);
      }
    }
  }

  /**
   * 层序遍历
   */
  levelOrder() {
    const queue = [this.root];

    while (queue.length) {
      const head = queue.shift();

      this.__test__.push(head.e);

      if (head.left) queue.push(head.left);
      if (head.right) queue.push(head.right);
    }
  }

  /**
   * 获取值最小的节点
   */
  getMin() {
    return this.#getMin(this.root);
  }

  #getMin(node) {
    if (node == null) {
      throw new Error("节点不存在");
    }

    if (node.left) {
      return this.#getMin(node.left);
    }

    return node;
  }

  /**
   * 获取值最大的节点
   */
  getMax() {
    return this.#getMax(this.root);
  }

  #getMax(node) {
    if (node == null) {
      throw new Error("节点不存在");
    }

    if (node.right) {
      return this.#getMax(node.right);
    }

    return node;
  }

  /**
   * 删除值最小的节点（递归）
   */
  removeMin() {
    this.#removeMin(this.root);
  }

  // 删除值最小的节点，并返回新的中间节点
  #removeMin(node) {
    if (node == null) {
      throw new Error("节点不存在");
    }

    if (node.left) {
      node.left = this.#removeMin(node.left);

      return node;
    }

    const rightNode = node.right;

    node.right = null;
    this.size--;

    return rightNode;
  }

  /**
   * 删除值最大的节点（递归）
   */
  removeMax() {
    this.#removeMax(this.root);
  }

  #removeMax(node) {
    if (node == null) {
      throw new Error("节点不存在");
    }

    if (node.right) {
      node.right = this.#removeMax(node.right);

      return node;
    }

    const leftNode = node.left;

    node.left = null;
    this.size--;

    return leftNode;
  }
}

module.exports = BST;
