/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * @level ⭐⭐
 * @tags Binary Tree, 树的遍历系列
 * @similars T#144, T#94, T#102
 * @end
 *
 * 给定一个二叉树，返回它的 后序 遍历。
 *
 * 示例:
 *
 * 输入: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 *
 * 输出: [3,2,1]
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
 * 思路一：递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const ans = [];

  const postorder = function (node) {
    if (node === null) return;

    postorder(node.left);
    postorder(node.right);
    ans.push(node.val);
  };

  postorder(root);

  return ans;
};

/**
 * 思路二：非递归
 */
var postorderTraversal = function (root) {
  const ans = [];
  const stack = [];
  let prev = null;

  while (stack.length || root) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();

      if (root.right && root.right !== prev) {
        stack.push(root);
        root = root.right;
      } else {
        ans.push(root.val);
        prev = root;
        // 下一次循环时，让 if (root) 不成立
        root = null;
      }
    }
  }

  return ans;
};
// @lc code=end
