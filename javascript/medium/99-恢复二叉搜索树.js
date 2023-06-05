/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
 *
 * https://leetcode.cn/problems/recover-binary-search-tree/description/
 *
 * algorithms
 * Medium (60.25%)
 * Likes:    866
 * Dislikes: 0
 * Total Accepted:    135.4K
 * Total Submissions: 224.8K
 * Testcase Example:  '[1,3,null,null,2]'
 *
 * 给你二叉搜索树的根节点 root ，该树中的 恰好 两个节点的值被错误地交换。请在不改变其结构的情况下，恢复这棵树 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,3,null,null,2]
 * 输出：[3,1,null,null,2]
 * 解释：3 不能是 1 的左孩子，因为 3 > 1 。交换 1 和 3 使二叉搜索树有效。
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [3,1,4,null,null,2]
 * 输出：[2,1,4,null,null,3]
 * 解释：2 不能在 3 的右子树中，因为 2 < 3 。交换 2 和 3 使二叉搜索树有效。
 *
 *
 *
 * 提示：
 *
 *
 * 树上节点的数目在范围 [2, 1000] 内
 * -2^31 <= Node.val <= 2^31 - 1
 *
 *
 *
 *
 * 进阶：使用 O(n) 空间复杂度的解法很容易实现。你能想出一个只使用 O(1) 空间的解决方案吗？
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
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  const WHITE = 0;
  const GRAY = 1;

  const nodes = [[root, WHITE]];
  let prev = null;
  let curr = null;
  let x = null;
  let y = null;

  while (nodes.length) {
    const [node, color] = nodes.pop();

    if (!node) continue;
    if (color === WHITE) {
      nodes.push([node.right, WHITE]);
      nodes.push([node, GRAY]);
      nodes.push([node.left, WHITE]);
    } else {
      prev = curr;
      curr = node;
    }

    if (prev && curr.val < prev.val) {
      if (!x) x = prev;
      y = curr;
    }
  }

  const temp = x.val;
  x.val = y.val;
  y.val = temp;

  return root;
};
// @lc code=end
