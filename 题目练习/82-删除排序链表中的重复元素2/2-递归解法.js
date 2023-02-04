/*
 * @lc app=leetcode.cn id=82 lang=javascript
 */

// 仅做练习：递归和迭代结合实现的，相当于把递归当成了第一层循环

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
  if (!head || !head.next) return head;

  if (head.val !== head.next.val) {
    head.next = deleteDuplicates(head.next);
  } else {
    let curr = head;

    while (curr.next && curr.val === curr.next.val) {
      curr = curr.next;
    }

    return deleteDuplicates(curr.next);
  }

  return head;
};
// @lc code=end
