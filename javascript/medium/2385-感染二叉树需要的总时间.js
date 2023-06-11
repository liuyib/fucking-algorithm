/*
 * @lc app=leetcode.cn id=2385 lang=javascript
 *
 * [2385] 感染二叉树需要的总时间
 *
 * https://leetcode.cn/problems/amount-of-time-for-binary-tree-to-be-infected/description/
 *
 * algorithms
 * Medium (46.23%)
 * Likes:    40
 * Dislikes: 0
 * Total Accepted:    8.3K
 * Total Submissions: 18K
 * Testcase Example:  '[1,5,3,null,4,10,6,9,2]\n3'
 *
 * 给你一棵二叉树的根节点 root ，二叉树中节点的值 互不相同 。另给你一个整数 start 。在第 0 分钟，感染 将会从值为 start
 * 的节点开始爆发。
 *
 * 每分钟，如果节点满足以下全部条件，就会被感染：
 *
 *
 * 节点此前还没有感染。
 * 节点与一个已感染节点相邻。
 *
 *
 * 返回感染整棵树需要的分钟数。
 *
 *
 *
 * 示例 1：
 *
 * 输入：root = [1,5,3,null,4,10,6,9,2], start = 3
 * 输出：4
 * 解释：节点按以下过程被感染：
 * - 第 0 分钟：节点 3
 * - 第 1 分钟：节点 1、10、6
 * - 第 2 分钟：节点5
 * - 第 3 分钟：节点 4
 * - 第 4 分钟：节点 9 和 2
 * 感染整棵树需要 4 分钟，所以返回 4 。
 *
 *
 * 示例 2：
 *
 * 输入：root = [1], start = 1
 * 输出：0
 * 解释：第 0 分钟，树中唯一一个节点处于感染状态，返回 0 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点的数目在范围 [1, 10^5] 内
 * 1 <= Node.val <= 10^5
 * 每个节点的值 互不相同
 * 树中必定存在值为 start 的节点
 *
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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
  let ans = 0;
  let target = null;

  const parent = function (node) {
    if (!node) return;

    if (node.val === start) {
      target = node;
    }
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

  const calc = function (node, from, minute) {
    if (!node) return;

    ans = Math.max(ans, minute);

    if (node.left !== from) {
      calc(node.left, node, minute + 1);
    }
    if (node.right !== from) {
      calc(node.right, node, minute + 1);
    }
    if (node.parent !== from) {
      calc(node.parent, node, minute + 1);
    }
  };
  calc(target, null, 0);

  return ans;
};
// @lc code=end
