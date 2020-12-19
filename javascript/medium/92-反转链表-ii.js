/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 *
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/description/
 *
 * @level ⭐⭐
 * @tags Linked List, Recursion
 * @similars T#206
 * @end
 *
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 *
 * 说明:
 * 1 ≤ m ≤ n ≤ 链表长度。
 *
 * 示例:
 *
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 记录链表被反转的那部分后面的节点，以便反转之后能够重新指向该节点
 * 示例：
 *           successor
 *               ↓
 * 1 <- 2 <- 3   4 -> 5 -> 6
 * |             ↑
 * ╰─────────────╯
 */
let successor = null;

/**
 * 将『以 head 为起点』的链表的前 N 个节点反转，并返回反转后的头结点
 * 示例：
 *          ret
 *           ↓
 * 1 <- 2 <- 3   4 -> 5 -> 6
 * |             ↑
 * ╰─────────────╯
 *
 * @param {ListNode} head
 * @param {number} n
 * @returns {ListNode}
 */
const reverseN = function (head, n) {
  if (n === 1) {
    successor = head.next;
    return head;
  }

  const ret = reverseN(head.next, n - 1);

  head.next.next = head;
  head.next = successor;

  return ret;
};
/**
 * 推荐 lucifer 的题解：https://github.com/labuladong/fucking-algorithm/blob/master/数据结构系列/递归反转链表的一部分.md
 * 深入理解 [反转链表](https://leetcode-cn.com/problems/reverse-linked-list/) 的递归解法，是理解这题递归解法的基础
 *
 * ------------------------------------------------------------
 *
 * 方法一：递归
 * 反转链表中从 [m, n] 处的节点，相当于对于 head.next....next 来说
 *                                            ╰── m ──╯
 * 反转其前 n - m 个节点，也就回到了 reverseN 的思想
 *
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (m === 1) return reverseN(head, n);
  head.next = reverseBetween(head.next, m - 1, n - 1);
  return head;
};
// @lc code=end
