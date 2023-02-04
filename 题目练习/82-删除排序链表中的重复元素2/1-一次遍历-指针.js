/*
 * @lc app=leetcode.cn id=82 lang=javascript
 */

// 仅做练习

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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head;

  const dummyHead = new ListNode(null, head);
  let prev = dummyHead;

  while (prev.next && prev.next.next) {
    if (prev.next.val === prev.next.next.val) {
      const val = prev.next.val;

      while (prev.next && prev.next.val === val) {
        prev.next = prev.next.next;
      }
    } else {
      prev = prev.next;
    }
  }

  return dummyHead.next;
};
// @lc code=end
