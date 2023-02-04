/*
 * @lc app=leetcode.cn id=24 lang=javascript
 */

// 题解思路：仅做练习

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head) return head;

  const dummyHead = new ListNode(null, head);
  let prev = dummyHead;

  while (prev.next && prev.next.next) {
    let node1 = prev.next;
    let node2 = node1.next;

    prev.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    prev = node1;
  }

  return dummyHead.next;
};
// @lc code=end
