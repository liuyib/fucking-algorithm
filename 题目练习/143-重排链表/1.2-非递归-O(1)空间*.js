/*
 * @lc app=leetcode.cn id=143 lang=javascript
 */

// 题解思路：双指针找中点，原地反转后半段，合并前后两段链表

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next || !head.next.next) return;

  // 找到下半段头结点（在 234-回文链表 题解 2.1 中也有用到）
  const getSecondHalfHead = (node) => {
    let slow = node;
    let fast = node;

    while (fast && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    const newHead = slow.next;

    // 断开上半段和下半段
    slow.next = null;

    return newHead;
  };

  // 反转链表（在 234-回文链表 题解 2.1 中也有用到）
  const reverseList = (node) => {
    let curr = node;
    let prev = null;

    while (curr) {
      const next = curr.next;

      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  };

  let head1 = head;
  let head2 = reverseList(getSecondHalfHead(head));

  // 合并两条链表
  while (head1 && head2) {
    const next1 = head1.next;
    const next2 = head2.next;

    head1.next = head2;
    head2.next = next1;
    head1 = next1;
    head2 = next2;
  }
};
// @lc code=end
