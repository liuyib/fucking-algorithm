/*
 * @lc app=leetcode.cn id=160 lang=javascript
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let set = new Set();
  let a = headA;
  let b = headB;

  while (a) {
    set.add(a);
    a = a.next;
  }

  while (b) {
    if (set.has(b)) return b;

    b = b.next;
  }

  return null;
};
// @lc code=end
