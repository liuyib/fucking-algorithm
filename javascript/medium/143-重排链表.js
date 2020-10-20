/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * 作者：liuyib <https://github.com/liuyib>
 * 日期：2020-10-20
 *
 * [143] 重排链表
 *
 * https://leetcode-cn.com/problems/reorder-list/description/
 *
 * @tags 'Linked List'
 *
 * 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
 * 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
 *
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 * 示例 1:
 *
 * 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
 *
 * 示例 2:
 *
 * 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
 *
 */

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
  const order = function (head) {
    if (!head) return [];

    let _head = head;
    let _curr = head;

    // 找到倒数第二个
    while (_curr.next && _curr.next.next) {
      _curr = _curr.next;
    }

    if (_curr.next) {
      const tail = new ListNode(_curr.next.val);
      _curr.next = null;
      tail.next = _head.next;
      _head.next = tail;

      if (_head.next && _head.next.next) {
        order(_head.next.next);
      }
    }
  };

  order(head);
};
// @lc code=end
