/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * @level ⭐⭐
 * @tags Binary Tree, 树的遍历系列
 * @similars T#144, T#94, T#145
 * @end
 *
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 *
 * 示例：
 * 二叉树：[3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 返回其层次遍历结果：
 *
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 思路一：递归
 * 参考题解：https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/die-dai-di-gui-duo-tu-yan-shi-102er-cha-shu-de-cen/#%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const ans = [];

  const order = function (node, depth) {
    if (!node) return;

    if (ans[depth]) {
      ans[depth].push(node.val);
    } else {
      ans[depth] = [node.val];
    }

    if (node.left) order(node.left, depth + 1);
    if (node.right) order(node.right, depth + 1);
  };

  order(root, 0);

  return ans;
};

/**
 * 思路二：非递归
 */
var levelOrder = function (root) {
  if (root === null) return [];

  const ans = [];
  const queue = [root];

  while (queue.length) {
    const len = queue.length;
    const level = [];

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      level.push(node.val);
    }

    ans.push(level);
  }

  return ans;
};
// @lc code=end
