/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 *
 * https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/description/
 *
 * algorithms
 * Medium (65.69%)
 * Likes:    733
 * Dislikes: 0
 * Total Accepted:    191.4K
 * Total Submissions: 290.3K
 * Testcase Example:  '[1,2,3,4,5,null,7]'
 *
 * 给定一个二叉树：
 *
 *
 * struct Node {
 * ⁠ int val;
 * ⁠ Node *left;
 * ⁠ Node *right;
 * ⁠ Node *next;
 * }
 *
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL 。
 *
 * 初始状态下，所有 next 指针都被设置为 NULL 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,3,4,5,null,7]
 * 输出：[1,#,2,3,#,4,5,7,#]
 * 解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化输出按层序遍历顺序（由 next
 * 指针连接），'#' 表示每层的末尾。
 *
 * 示例 2：
 *
 *
 * 输入：root = []
 * 输出：[]
 *
 *
 * 提示：
 *
 *
 * 树中的节点数在范围 [0, 6000] 内
 * -100 <= Node.val <= 100
 *
 *
 * 进阶：
 * 你只能使用常量级额外空间。
 * 使用递归解题也符合要求，本题中递归程序的隐式栈空间不计入额外空间复杂度。
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return null;

  let node = root;
  const dummy = new Node();
  let prev = dummy;

  while (node) {
    if (node.left) {
      prev.next = node.left;
      prev = prev.next;
    }
    if (node.right) {
      prev.next = node.right;
      prev = prev.next;
    }

    if (node.next) {
      // 继续本层遍历
      node = node.next;
    } else {
      // 指向下一层最左边的节点，开始下一层遍历
      node = dummy.next;

      // 重置哨兵节点的指针
      if (node) {
        dummy.next = node.left ? node.left : node.right;
        prev = dummy;
      }
    }
  }

  return root;
};
// @lc code=end
