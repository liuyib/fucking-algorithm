/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * @level ⭐
 * @tags Linked List, Stack, Double Pointer
 * @end
 *
 * 请判断一个链表是否为回文链表。
 *
 * 示例 1:
 *
 * 输入: 1->2
 * 输出: false
 *
 * 示例 2:
 *
 * 输入: 1->2->2->1
 * 输出: true
 *
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 双指针思路
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let temp = head;
  let len = 0;

  while (temp) {
    len++;
    temp = temp.next;
  }

  const mid = Math.ceil(len / 2);
  let front = head;
  let count = 0;

  let prev = null;
  let curr = null;
  let next = null;

  while (head) {
    if (count >= mid) {
      // 开始反转链表
      curr = head;
      next = curr.next;
      curr.next = prev;
      prev = curr;

      if (curr === null) break;

      head = next;
    } else {
      head = head.next;
    }

    count++;
  }

  while (front !== null && prev !== null) {
    if (prev.val !== front.val) return false;

    front = front.next;
    prev = prev.next;
  }

  return true;
};

/**
 * 栈思路
 */
var isPalindrome = function (head) {
  const s = [];
  let curr = head;

  while (curr) {
    s.push(curr.val);
    curr = curr.next;
  }

  while (head) {
    if (s.pop() !== head.val) return false;
    head = head.next;
  }

  return true;
};
// @lc code=end
