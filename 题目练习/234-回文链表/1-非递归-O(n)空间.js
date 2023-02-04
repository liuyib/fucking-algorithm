/*
 * @lc app=leetcode.cn id=234 lang=javascript
 */

// 仅做练习
// 思路：链表转成数组，利用数组的可随机访问性来解决

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

  let curr = head;
  const arr = [];

  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  let isPalindrome = true;
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    if (arr[i] !== arr[len - i - 1]) {
      isPalindrome = false;
    }
  }

  return isPalindrome;
};
// @lc code=end
