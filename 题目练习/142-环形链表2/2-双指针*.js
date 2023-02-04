/*
 * @lc app=leetcode.cn id=142 lang=javascript
 */

/**
 * 题解：https://leetcode.cn/problems/linked-list-cycle-ii/solution/linked-list-cycle-ii-kuai-man-zhi-zhen-shuang-zhi-/
 * 题解思路，需要重点掌握
 *
 * fast
 * slow
 *  ↓↓
 *  ① → ② → ③ → ④ → ⑤ → ⑥ → ⑦ → ⑧
 *                         ↑         ↓
 *                         ⑬        ⑨ <== 第一次相遇点
 *                         ↑         ↓
 *                         ⑫ ← ⑪ ← ⑩
 * 可以得出：
 * 1. 设“头结点”到“环入口”的长度为 L，“第一次相遇点”到“环入口”的长度为 M，可得 L == M
 *
 * 总结：
 * 1. 获取环入口：快慢指针第一次相遇后，快指针移到开始节点，然后快慢指针步长都为 1 继续移动，再次相交点即为环入口
 * 2. 获取环大小：
 *    2.1 找到环入口后，慢指针不动，快指针步长为 1 移动，再次相交时，快指针走过的长度即为环大小
 *    2.2 第一次两个指针相遇时，“慢指针走过的长度 - 1”就是环的大小
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) return head;

  let slow = head;
  let fast = head;

  while (fast) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      fast = head;

      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }

      return fast;
    }
  }

  return null;
};
// @lc code=end
