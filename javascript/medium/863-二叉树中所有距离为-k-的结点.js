/*
 * @lc app=leetcode.cn id=863 lang=javascript
 *
 * [863] 二叉树中所有距离为 K 的结点
 *
 * https://leetcode.cn/problems/all-nodes-distance-k-in-binary-tree/description/
 *
 * algorithms
 * Medium (61.43%)
 * Likes:    637
 * Dislikes: 0
 * Total Accepted:    52.7K
 * Total Submissions: 85.8K
 * Testcase Example:  '[3,5,1,6,2,0,8,null,null,7,4]\n5\n2'
 *
 * 给定一个二叉树（具有根结点 root）， 一个目标结点 target ，和一个整数值 k 。
 *
 * 返回到目标结点 target 距离为 k 的所有结点的值的列表。 答案可以以 任何顺序 返回。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
 * 输出：[7,4,1]
 * 解释：所求结点为与目标结点（值为 5）距离为 2 的结点，值分别为 7，4，以及 1
 *
 *
 * 示例 2:
 *
 *
 * 输入: root = [1], target = 1, k = 3
 * 输出: []
 *
 *
 *
 *
 * 提示:
 *
 *
 * 节点数在 [1, 500] 范围内
 * 0 <= Node.val <= 500
 * Node.val 中所有值 不同
 * 目标结点 target 是树上的结点。
 * 0 <= k <= 1000
 *
 *
 *
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
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  const parent = function (node) {
    if (!node) return;

    if (node.left) {
      node.left.parent = node;
      parent(node.left);
    }
    if (node.right) {
      node.right.parent = node;
      parent(node.right);
    }
  };
  parent(root);

  const ans = [];
  const find = function (node, from, sum) {
    if (!node) return;

    if (sum === k) {
      ans.push(node.val);
      return;
    }
    if (node.left !== from) {
      find(node.left, node, sum + 1);
    }
    if (node.right !== from) {
      find(node.right, node, sum + 1);
    }
    if (node.parent !== from) {
      find(node.parent, node, sum + 1);
    }
  };
  find(target, null, 0);

  return ans;
};
// @lc code=end
