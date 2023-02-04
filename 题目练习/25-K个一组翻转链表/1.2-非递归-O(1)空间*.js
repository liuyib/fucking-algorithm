/*
 * @lc app=leetcode.cn id=25 lang=javascript
 */

/*
 * 题解思路：
 * 1. 实现一个函数 reverseFromTo(start, end)，反转 start~end 之间的节点，
 *    并将新的 start, end 返回，以便重新连接到原链表上
 * 2. ！！！先遍历，确认够 k 个节点再去反转（提前存好“前置节点”）！！！
 *   （如果遍历过程中就反转，最后不够 k 个节点时再去反转回来，则写出的逻辑很不清晰、冗余）
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head || !head.next || k === 1) return head;

  const reverseFromTo = (start, end) => {
    let curr = start;
    let prev = null;

    while (prev !== end) {
      const next = curr.next;

      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return [prev, start];
  };

  const dummyHead = new ListNode(null, head);
  let prev = dummyHead;
  let curr = head;

  while (curr) {
    for (let i = 0; i < k - 1; i++) {
      curr = curr.next;

      if (!curr) return dummyHead.next;
    }

    const next = curr.next;
    const [start, end] = reverseFromTo(prev.next, curr);

    prev.next = start;
    end.next = next;
    prev = end;
    curr = next;
  }

  return dummyHead.next;
};
// @lc code=end
