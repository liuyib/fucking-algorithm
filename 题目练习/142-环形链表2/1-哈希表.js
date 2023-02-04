/*
 * @lc app=leetcode.cn id=142 lang=javascript
 */

// 仅做练习

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) return null;

  const set = new Set();
  let curr = head;

  while (curr) {
    if (set.has(curr)) return curr;

    set.add(curr);
    curr = curr.next;
  }

  return null;
};
// @lc code=end
