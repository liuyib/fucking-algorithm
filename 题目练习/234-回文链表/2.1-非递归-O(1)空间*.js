/*
 * @lc app=leetcode.cn id=234 lang=javascript
 */

// 思路：快慢指针解法

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

  // 反转一条链表
  const reverseList = (node) => {
    let curr = node;
    let prev = null;

    while (curr) {
      const next = curr.next;

      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  };

  // 获取一条链表下半段的头结点
  const getSecondHalfHead = (node) => {
    let slow = node;
    let fast = node;

    // 两个指针从链表头开始，步长分别为 1（slow 指针） 和 2（fast 指针），当 fast 不再能继续往下走时：
    // 1. 链表节点为偶数个时：
    // ① -> ② -> ② -> ①
    //       ↑     ↑
    //      slow  fast
    // slow 指针指到链表上半段末尾，其 next 就是“链表下半段的开始节点”
    //
    // 2. 链表节点为奇数个时：
    // ① -> ② -> ③ -> ② -> ①
    //             ↑          ↑
    //            slow       fast
    // slow 指针指到链表中间节点，其 next 就是“链表下半段的开始节点”
    //
    // 总之：无论链表节点数量是奇是偶，slow.next 就是链表下半段的头结点
    while (fast && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    const secondHalfHead = slow.next;

    // ！！！上半段和下半段断开！！！（有的题中，如果上半段和下半段不断开，则会有问题）
    slow.next = null;

    return secondHalfHead;
  };

  let secondHead = reverseList(getSecondHalfHead(head));
  let firstHead = head;
  let isPalindrome = true;

  while (secondHead) {
    if (firstHead.val !== secondHead.val) {
      isPalindrome = false;
      break;
    }

    firstHead = firstHead.next;
    secondHead = secondHead.next;
  }

  return isPalindrome;
};
// @lc code=end
