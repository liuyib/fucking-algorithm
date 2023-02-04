/*
 * @lc app=leetcode.cn id=143 lang=javascript
 */

// 仅做练习
// 思路：指针从前往后遍历，递归从后往前遍历
// 注意：该方法只是为了练习递归，思路和逻辑时对的，但由于性能问题，并不能通过 LeetCode 测试

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

  let curr = head;
  let index = 0;

  const reverseList = (node, depth) => {
    if (!node.next) return node;

    const retNode = reverseList(node.next, depth + 1);
    const next = curr.next;

    if (index >= depth) return;

    curr.next = retNode;
    retNode.next = next;
    node.next = null;
    curr = next;
    index += 1;

    return node;
  };

  reverseList(head, 0);
};
// @lc code=end
