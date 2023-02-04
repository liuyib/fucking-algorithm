/*
 * @lc app=leetcode.cn id=25 lang=javascript
 */

// 我的思路：把递归当做一层遍历使用，仅做练习

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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head || !head.next || k === 1) return head;

  let successor = null;

  // 把链表从 node 节点开始，反转 n 个节点，并将“反转后的部分”与“后面未反转的部分”连接起来
  const reverseN = (node, n) => {
    if (!node) return;
    if (n === 1) {
      successor = node.next;
      return node;
    }

    const retNode = reverseN(node.next, n - 1);

    // 如果没有返回节点，说明还剩最后几个不需要反转的节点，不处理；否则，反转处理
    if (retNode) {
      node.next.next = node;
      node.next = successor;
    }

    return retNode;
  };

  let dummyHead = new ListNode();
  let prev = dummyHead;
  let curr = head;

  while (curr) {
    const retNode = reverseN(curr, k);

    // 由于 reverseN 函数会始终把“反转后的部分”和“未反转的部分”链接起来，
    // 所以最后 retNode 为 null，也就是遍历最后一段不用翻转的部分后，不用做任何处理
    if (!retNode) break;

    prev.next = retNode;
    prev = curr;
    curr = successor;
  }

  return dummyHead.next;
};
// @lc code=end
