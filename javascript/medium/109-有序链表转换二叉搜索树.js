/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * 作者：liuyib <https://github.com/liuyib>
 * 日期：2020-10-20
 *
 * [109] 有序链表转换二叉搜索树
 *
 * https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/description/
 *
 * @tags 'Linked List' 'Binary Search Tree'
 *
 * 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。
 *
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 *
 * 示例:
 *
 * 给定的有序链表： [-10, -3, 0, 5, 9],
 *
 * 一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：
 *
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  const arr = [];

  // 转为数组
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  // 思路：每次取数组中间的元素作为根节点，然后对左右的元素集合递归操作即可
  function buildTree(arr) {
    const len = arr.length;
    const mid = Math.floor(len / 2);

    if (arr[mid] === undefined) {
      return null;
    }

    const root = new TreeNode(arr[mid]);

    if (mid === 0) {
      return root;
    }

    root.left = buildTree(arr.slice(0, mid));
    root.right = buildTree(arr.slice(mid + 1));

    return root;
  }

  return buildTree(arr);
};
// @lc code=end
