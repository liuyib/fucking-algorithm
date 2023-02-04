/*
 * @lc app=leetcode.cn id=92 lang=javascript
 */

// 特别棒的一个解法
// 题解思路：把反转 [m, n] 链表区间的问题，转化成反转 [1, n] 链表区间的问题

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

  // 链表被反转部分的后一个节点
  let successor = null;

  // 反转链表 [1, n] 区间里的节点（1 <= n <= 链表长度）
  // 与反转“整条”链表相比，该函数的区别在于，递归到第 n 个节点时，
  // 用变量保存第 n 个节点的后驱节点，这样就可以把“反转的部分”和“未反转的部分”重新连接起来
  const reverseN = (node, n) => {
    if (n === 1) {
      successor = node.next;
      return node;
    }

    const newHead = reverseN(node.next, n - 1);

    node.next.next = node;
    node.next = successor;

    return newHead;
  };

  // 反转链表 [m, n] 区间里的节点（1 <= m <= n <= 链表长度）
  // 对于该函数，当 m == 1 时，就是反转 [1, n] 之间的节点，等价于 reverseN 函数
  // 因此对于任意的 [m, n] 区间，只要遍历到 m 位置的节点，就可以把问题转化为 reverseN 函数
  const reverseMN = (node, m, n) => {
    if (m === 1) {
      return reverseN(node, n);
    }

    node.next = reverseMN(node.next, m - 1, n - 1);

    return node;
  };

  return reverseMN(head, left, right);
};
// @lc code=end
