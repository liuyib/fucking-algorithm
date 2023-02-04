/*
 * @lc app=leetcode.cn id=25 lang=javascript
 */

// 仅做练习
// 题解思路：K 个一组入栈，再依次出栈就是逆序的了，注意最后不够 K 个时要保证原来的顺序

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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head || k === 1) return head;

  const dummyHead = new ListNode(null, head);
  let prev = dummyHead;
  let curr = head;
  let count = 0;

  const stack = [];

  while (curr) {
    // K 个一组入栈
    while (count < k && curr) {
      stack.push(curr);
      curr = curr.next;
      count += 1;
    }

    // 剩余不足 K 个，顺序保持不变（因为接下来要逆序出栈，所以这里先反转下顺序，以保证顺序不变）
    if (stack.length < k) {
      stack.reverse();
    }

    // K 个一组出栈，出栈顺序就是逆序的了
    while (stack.length) {
      const top = stack.pop();

      top.next = null;
      prev.next = top;
      prev = top;
    }

    count %= k;
  }

  return dummyHead.next;
};
// @lc code=end
