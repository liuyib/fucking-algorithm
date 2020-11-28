/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/
 *
 * @level ⭐⭐
 * @tags 'Linked List'
 * @similars
 * @end
 *
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 *
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 * 示例 1：
 *
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 *
 * 示例 2：
 *
 * 输入：head = []
 * 输出：[]
 *
 * 示例 3：
 *
 * 输入：head = [1]
 * 输出：[1]
 *
 * 提示：
 *
 * 1. 链表中节点的数目在范围 [0, 100] 内
 * 2. 0 <= Node.val <= 100
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
 * 自己的思路：直接遍历 + 指针
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let prev = new ListNode();
  let dummyHead = prev;
  prev.next = head;

  while (prev.next && prev.next.next) {
    const curr = prev.next;
    const next = curr.next;

    prev.next = next;
    curr.next = next.next;
    next.next = curr;

    prev = curr;
  }

  return dummyHead.next;
};

/**
 * 题解思路：递归
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  const next = head.next;

  head.next = swapPairs(next.next);
  next.next = head;

  return next;
};
// @lc code=end
