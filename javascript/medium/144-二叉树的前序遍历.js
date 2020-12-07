/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * @level ⭐⭐
 * @tags Binary Tree, 树的遍历系列
 * @similars T#94, T#145, T#102
 * @end
 *
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 *
 * 示例 1：
 *
 * 输入：root = [1,null,2,3]
 * 输出：[1,2,3]
 *
 * 示例 2：
 *
 * 输入：root = []
 * 输出：[]
 *
 * 示例 3：
 *
 * 输入：root = [1]
 * 输出：[1]
 *
 * 示例 4：
 *
 * 输入：root = [1,2]
 * 输出：[1,2]
 *
 * 示例 5：
 *
 * 输入：root = [1,null,2]
 * 输出：[1,2]
 *
 * 提示：
 *
 * 1. 树中节点数目在范围 [0, 100] 内
 * 2. -100 <= Node.val <= 100
 *
 * 进阶：递归算法很简单，你可以通过迭代算法完成吗？
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路一：递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const ans = [];

  const preorder = function (node) {
    if (node === null) return;

    ans.push(node.val);
    preorder(node.left);
    preorder(node.right);
  };

  preorder(root);

  return ans;
};

/**
 * 思路二：用栈手动模拟递归
 */
var preorderTraversal = function (root) {
  if (root === null) return [];

  const ans = [];
  const stack = [];
  stack.push(root);

  while (stack.length !== 0) {
    const top = stack.pop();
    ans.push(top.val);

    if (top.right !== null) {
      stack.push(top.right);
    }
    if (top.left !== null) {
      stack.push(top.left);
    }
  }

  return ans;
};
// @lc code=end
