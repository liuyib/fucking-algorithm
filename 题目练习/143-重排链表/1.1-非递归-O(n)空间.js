/*
 * @lc app=leetcode.cn id=143 lang=javascript
 */

// 仅做练习
// 题解思路：链表转成数组

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

  const nodes = [];
  let curr = head;

  while (curr) {
    nodes.push(curr);
    curr = curr.next;
  }

  let i = 0;
  let j = nodes.length - 1;

  while (i < j) {
    nodes[i].next = nodes[j];
    i += 1;

    if (i === j) break;

    nodes[j].next = nodes[i];
    j -= 1;
  }

  nodes[i].next = null;
};
// @lc code=end
