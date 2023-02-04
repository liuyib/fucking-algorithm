/*
 * @lc app=leetcode.cn id=21 lang=javascript
 */

// 我的思路：仅做练习。不够简洁，也不是纯递归，而是在递归的时候使用了一个变量来保存指针，
//         相当于把递归当成迭代用了

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
  const dummyHead = new ListNode();
  let curr = dummyHead;

  var recursion = (node1, node2) => {
    if (!node1) {
      curr.next = node2;
      return;
    }
    if (!node2) {
      curr.next = node1;
      return;
    }

    if (node1.val >= node2.val) {
      curr.next = node2;
      curr = curr.next;
      recursion(node1, node2.next);
    } else {
      curr.next = node1;
      curr = curr.next;
      recursion(node1.next, node2);
    }
  };

  recursion(list1, list2);

  return dummyHead.next;
};
// @lc code=end
