/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * @level ⭐
 * @tags Linked List, Stack, Double Pointer, 💯
 * @similars T#206
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
 * 方法一：双指针
 * 把链表前半部分反转，然后遍历“后半部分”和“反转后的前半部分”即可
 *
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head == null || head.next == null) return true;

  let len = 0;
  let temp = head;

  while (temp) {
    len++;
    temp = temp.next;
  }

  // Math.floor((len - 1) / 2)
  let mid = (len - 1) >> 1;
  let prev = null;
  let curr = head;
  let next = null;
  let count = 0;

  while (count <= mid) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    count++;
  }

  if (len % 2 !== 0) {
    prev = prev.next;
  }

  while (prev && curr) {
    if (prev.val !== curr.val) return false;

    prev = prev.next;
    curr = curr.next;
  }

  return true;
};

/**
 * 方法二：栈思路
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
