/*
 * @lc app=leetcode.cn id=234 lang=javascript
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
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  let curr = head;
  let isPalindrome = true;

  // 递归遍历链表返回时，是从链表尾部开始“逆序”返回的，
  // 再使用一个指针“顺序”迭代，即可一正一反判断链表是否回文
  const traverseList = (node) => {
    if (!node) return;

    traverseList(node.next);

    if (curr.val !== node.val) {
      isPalindrome = false;
    }

    curr = curr.next;
  };

  traverseList(head);

  return isPalindrome;
};
// @lc code=end
