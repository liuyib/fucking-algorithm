/*
 * @lc app=leetcode.cn id=141 lang=javascript
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;

  const set = new Set();
  let curr = head;

  while (curr) {
    if (set.has(curr)) return true;

    set.add(curr);
    curr = curr.next;
  }

  return false;
};
// @lc code=end
