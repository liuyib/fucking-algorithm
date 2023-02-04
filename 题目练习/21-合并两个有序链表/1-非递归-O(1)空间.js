/*
 * @lc app=leetcode.cn id=21 lang=javascript
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummyHead = new ListNode();
  let curr = dummyHead;

  let l1 = list1;
  let l2 = list2;

  while (l1 && l2) {
    if (l1.val >= l2.val) {
      curr.next = l2;
      l2 = l2.next;
    } else {
      curr.next = l1;
      l1 = l1.next;
    }

    curr = curr.next;
  }

  if (l1) {
    curr.next = l1;
  } else if (l2) {
    curr.next = l2;
  }

  return dummyHead.next;
};
// @lc code=end
