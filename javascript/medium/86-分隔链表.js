/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 *
 * https://leetcode.cn/problems/partition-list/description/
 *
 * @level ⭐⭐
 * @tags Linked List
 * @similars
 * @end
 *
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 *
 * 你应当 保留 两个分区中每个节点的初始相对位置。
 *
 * 示例 1：
 *
 * ① -> ❹ -> ❸ -> ② -> ❺ -> ②
 *               ↓
 * ① -> ② -> ② -> ❹ -> ❸ -> ❺
 *
 * 输入：head = [1,4,3,2,5,2], x = 3
 * 输出：[1,2,2,4,3,5]
 *
 * 示例 2：
 *
 * ❷ -> ①
 *    ↓
 * ① -> ❷
 *
 * 输入：head = [2,1], x = 2
 * 输出：[1,2]
 *
 * 提示：
 *
 * • 链表中节点的数目在范围 [0, 200] 内
 * • -100 <= Node.val <= 100
 * • -200 <= x <= 200
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head) return head;

  let smallHead = new ListNode();
  let small = smallHead;

  let largeHead = new ListNode();
  let large = largeHead;

  let curr = head;

  while (curr) {
    if (curr.val < x) {
      small.next = curr;
      small = small.next;
    } else {
      large.next = curr;
      large = large.next;
    }

    curr = curr.next;
  }

  small.next = largeHead.next;
  large.next = null;

  // 这些是额外的释放内存的操作，可以没有
  largeHead.next = null;
  largeHead = null;
  small = null;
  large = null;

  return smallHead.next;
};
// @lc code=end
