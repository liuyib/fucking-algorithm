/*
 * @lc app=leetcode.cn id=206 lang=javascript
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
var reverseList = function (head) {
  if (!head) return head;

  const traverse = (node) => {
    if (!node.next) return node;

    const retNode = traverse(node.next);

    node.next.next = node;
    node.next = null;

    return retNode;
  };

  return traverse(head);
};
// @lc code=end
