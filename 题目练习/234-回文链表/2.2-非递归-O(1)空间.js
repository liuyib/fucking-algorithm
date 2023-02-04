/*
 * @lc app=leetcode.cn id=234 lang=javascript
 */

// 仅做练习
// 思路：通过链表长度来获取链表中间节点解法

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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  let len = 0;
  let temp = head;

  while (temp) {
    temp = temp.next;
    len += 1;
  }

  // 链表中间节点的位置
  const mid = Math.floor(len / 2);
  let prev = null;
  let curr = head;

  // 反转链表上半段
  for (let i = 0; i < mid; i++) {
    const next = curr.next;

    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // 链表节点个数为奇数时，curr 指向链表正中间的节点：
  // ① -> ② -> ③ -> ② -> ①
  //            ↑     ↑
  //          curr    |
  //              curr.next
  // 因此 curr.next 就是“链表下半段的开始节点”（这里是相对回文来讲，本例中判断回文时，
  // 上半段就是“① -> ②”，下半段就是“② -> ①”，中间节点不用判断）
  if (len % 2 !== 0) {
    curr = curr.next;
  }

  // 到这里 prev 表示“反转后”的上半段链表的开始节点，next 表示下半段链表的开始节点

  let isPalindrome = true;

  while (prev && curr) {
    if (prev.val !== curr.val) {
      isPalindrome = false;
      break;
    }

    prev = prev.next;
    curr = curr.next;
  }

  return isPalindrome;
};
// @lc code=end
