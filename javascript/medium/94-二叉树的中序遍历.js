/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * @level ⭐⭐
 * @tags Binary Tree, 树的遍历系列
 * @similars T#144, T#145, T#102
 * @end
 *
 * 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
 *
 * 示例 1：
 *
 * 输入：root = [1,null,2,3]
 * 输出：[1,3,2]
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
 * 输出：[2,1]
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
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
 * 解法一：递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const ans = [];

  const inorder = function (node) {
    if (node === null) return;

    inorder(node.left);
    ans.push(node.val);
    inorder(node.right);
  };
  inorder(root);

  return ans;
};

/**
 * 解法二：非递归
 */
var inorderTraversal = function (root) {
  const ans = [];
  const stack = [];

  while (stack.length || root) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      ans.push(root.val);
      root = root.right;
    }
  }

  return ans;
};
// @lc code=end
