/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
 *
 * https://leetcode-cn.com/problems/find-bottom-left-tree-value/description/
 *
 * @level ⭐⭐
 * @tags Binary Tree, DFS, BFS
 * @similars
 * @end
 *
 * 给定一个二叉树，在树的最后一行找到最左边的值。
 *
 * 示例 1:
 *
 * 输入:
 *
 * ⁠   2
 * ⁠  / \
 * ⁠ 1   3
 *
 * 输出:
 * 1
 *
 * 示例 2:
 *
 * 输入:
 *
 * ⁠       1
 * ⁠      / \
 * ⁠     2   3
 * ⁠    /   / \
 * ⁠   4   5   6
 * ⁠      /
 * ⁠     7
 *
 * 输出:
 * 7
 *
 * 注意: 您可以假设树（即给定的根节点）不为 NULL。
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
 * BFS：改造 BFS，每层从右向左遍历
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  const queue = [root];
  let node = root;

  while (queue.length) {
    node = queue.shift();
    if (node.right) queue.push(node.right);
    if (node.left) queue.push(node.left);
  }

  return node.val;
};

/**
 * DFS
 */
var findBottomLeftValue = function (root) {
  let ret = 0;
  let max = 0; // 最大深度
  let cur = 0; // 当前深度

  var dfs = function (node) {
    if (!node) return;

    cur++;

    if (cur > max) {
      max = cur;
      ret = node.val;
    }

    dfs(node.left);
    dfs(node.right);
    cur--;
  };

  dfs(root);

  return ret;
};
// @lc code=end
