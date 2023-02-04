/*
 * @lc app=leetcode.cn id=92 lang=javascript
 */

/**
 * 题解思路：
 * 有链表 ① -> ❷ -> ❸ -> ❹ -> ⑤，其中 ①, ⑤ 不变，❷, ❸, ❹ 需要反转
 * 1. 遍历到需要反转节点的前一个节点 ①，用指针标记 ①
 * 2. 遍历 ①, ⑤ 之间的节点时，始终将遍历到的节点移动到 ① 后面
 *
 * 反转的详细过程如下：
 * 1. ① -> ❷ -> ❸ -> ❹ -> ⑤，将 ❷ 放在 ① 后面，即不变
 * 2. ① -> ❸ -> ❷ -> ❹ -> ⑤，将 ❸ 放在 ① 后面
 * 2. ① -> ❹ -> ❸ -> ❷ -> ⑤，将 ❹ 放在 ① 后面
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head || !head.next || left === right) return head;

  const dummyHead = new ListNode(null, head);
  let tHead = null;
  let curr = head;
  let prev = null;

  let index = 0;

  while (curr) {
    index += 1;

    if (index <= left) {
      if (index === left) {
        tHead = prev ? prev : dummyHead;
      }

      prev = curr;
      curr = curr.next;
    } else if (index <= right) {
      const next = curr.next;

      // 断开节点
      prev.next = next;
      curr.next = null;

      // 将断开的节点连接到 tHead 指针后
      curr.next = tHead.next;
      tHead.next = curr;

      // 修正指针位置（prev 指针不变，因为有节点断开了，prev 指针自然就后移一位）
      curr = next;
    } else {
      break;
    }
  }

  return dummyHead.next;
};
// @lc code=end
