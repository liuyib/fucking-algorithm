/*
 * @lc app=leetcode.cn id=865 lang=javascript
 *
 * [865] 具有所有最深节点的最小子树
 *
 * https://leetcode.cn/problems/smallest-subtree-with-all-the-deepest-nodes/description/
 *
 * algorithms
 * Medium (68.85%)
 * Likes:    196
 * Dislikes: 0
 * Total Accepted:    15.7K
 * Total Submissions: 22.8K
 * Testcase Example:  '[3,5,1,6,2,0,8,null,null,7,4]'
 *
 * 给定一个根为 root 的二叉树，每个节点的深度是 该节点到根的最短距离 。
 *
 * 返回包含原始树中所有 最深节点 的 最小子树 。
 *
 * 如果一个节点在 整个树 的任意节点之间具有最大的深度，则该节点是 最深的 。
 *
 * 一个节点的 子树 是该节点加上它的所有后代的集合。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：root = [3,5,1,6,2,0,8,null,null,7,4]
 * 输出：[2,7,4]
 * 解释：
 * 我们返回值为 2 的节点，在图中用黄色标记。
 * 在图中用蓝色标记的是树的最深的节点。
 * 注意，节点 5、3 和 2 包含树中最深的节点，但节点 2 的子树最小，因此我们返回它。
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1]
 * 输出：[1]
 * 解释：根节点是树中最深的节点。
 *
 * 示例 3：
 *
 *
 * 输入：root = [0,1,3,null,2]
 * 输出：[2]
 * 解释：树中最深的节点为 2 ，有效子树为节点 2、1 和 0 的子树，但节点 2 的子树最小。
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点的数量在 [1, 500] 范围内。
 * 0 <= Node.val <= 500
 * 每个节点的值都是 独一无二 的。
 *
 *
 *
 *
 * 注意：本题与力扣 1123
 * 重复：https://leetcode-cn.com/problems/lowest-common-ancestor-of-deepest-leaves
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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function (root) {
  const dfs = function (node) {
    if (!node) return null;

    const left = calcMaxDepth(node.left);
    const right = calcMaxDepth(node.right);

    if (left === right) return node;
    if (left < right) return dfs(node.right);

    return dfs(node.left);
  };

  const calcMaxDepth = function (node) {
    if (!node) return 0;

    return Math.max(calcMaxDepth(node.left), calcMaxDepth(node.right)) + 1;
  };

  return dfs(root);
};
// @lc code=end
