/*
 * @lc app=leetcode.cn id=24 lang=javascript
 */

// 我的思路：仅做练习

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head) return head;

  // 反转从 m~n 之间的节点
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

    for (let i = 1; i < 2; i++) {
      tail = tail.next;

      if (!tail) return dummyHead.next;
    }

    const newHead = tail.next;
    // 两个一组反转
    const [start, end] = reverseMN(curr, tail);

    prev.next = start;
    end.next = newHead;
    prev = curr;
    curr = curr.next;
  }

  return dummyHead.next;
};
// @lc code=end
