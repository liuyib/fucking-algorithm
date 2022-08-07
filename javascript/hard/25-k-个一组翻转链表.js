/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 *
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/description/
 *
 * @level ⭐⭐⭐
 * @tags TODO
 * @similars
 * @end
 *
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 *
 * k 是一个正整数，它的值小于或等于链表的长度。
 *
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 *
 * 示例：
 *
 * 给你这个链表：1->2->3->4->5
 *
 * 当 k = 2 时，应当返回: 2->1->4->3->5
 *
 * 当 k = 3 时，应当返回: 3->2->1->4->5
 *
 * 说明：
 *
 * 1. 你的算法只能使用常数的额外空间。
 * 2. 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
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
 * 思路：先遍历判断是否够 K 个节点，然后通过“反转 M~N 区间的函数”进行 K 个一组反转
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head || !head.next || k <= 1) return head;

  const reverseMN = (m, n) => {
    let prev = null;
    let curr = m;

    while (prev !== n) {
      const next = curr.next;

      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return [n, m];
  };

  const dummyHead = new ListNode(null, head);
  let prev = dummyHead;
  let curr = head;

  while (curr) {
    let tail = curr;

    for (let i = 1; i < k; i++) {
      tail = tail.next;

      if (!tail) return dummyHead.next;
    }

    const nextHead = tail.next;
    const [start, end] = reverseMN(curr, tail);

    prev.next = start;
    end.next = nextHead;

    prev = curr;
    curr = curr.next;
  }

  return dummyHead.next;
};
// @lc code=end
