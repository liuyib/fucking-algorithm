/*
 * @lc app=leetcode.cn id=92 lang=javascript
 */

// 仅做练习
/**
 * 我的思路：
 * 设索引为 index
 * 1. index < left        ：指针后移
 * 2. index == left       ：指针标记关键节点
 * 3. left < index < right：反转链表
 * 4. index == right      ：根据指针存储的节点，链接成一个新链表
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
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head || !head.next || left === right) return head;

  const dummyHead = new ListNode(null, head);

  let curr = head;
  let prev = null;

  let tHead = null;
  let tTail = null;

  let index = 0;

  while (curr) {
    index += 1;

    if (index < left) {
      prev = curr;
      curr = curr.next;
    } else if (index < right) {
      const next = curr.next;

      if (index === left) {
        tHead = prev ? prev : dummyHead;
        tTail = curr;
        curr.next = null;
      } else {
        curr.next = prev;
      }

      prev = curr;
      curr = next;
    } else if (index === right) {
      const next = curr.next;

      curr.next = prev;
      tHead.next = curr;
      tTail.next = next;

      break;
    }
  }

  return dummyHead.next;
};
// @lc code=end
