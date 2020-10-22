/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * 作者：liuyib <https://github.com/liuyib>
 * 日期：2020-10-22
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * @tags 'Linked List'
 * @solutions 'Recursion' 'Double Pointer'
 *
 * 反转一个单链表。
 *
 * 示例:
 *
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 *
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
 * 方法 2：递归（看的题解。有点绕，不太好想）
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  const ret = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return ret;
};

// 方法 1：双指针（看的题解。当时不太会双指针如何用在链表中）
// var reverseList = function (head) {
//   let curr = null;
//   let prev = head;

//   while (prev) {
//     const next = prev.next;
//     prev.next = curr;
//     curr = prev;
//     prev = next;
//   }

//   return curr;
// };
// @lc code=end
