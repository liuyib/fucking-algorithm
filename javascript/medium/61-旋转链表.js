/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 *
 * https://leetcode-cn.com/problems/rotate-list/description/
 *
 * @level ⭐⭐
 * @tags Linked List, Double Pointer
 * @similars
 * @end
 *
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 *
 * 示例 1:
 *
 * 输入: 1->2->3->4->5->NULL, k = 2
 * 输出: 4->5->1->2->3->NULL
 * 解释:
 * 向右旋转 1 步: 5->1->2->3->4->NULL
 * 向右旋转 2 步: 4->5->1->2->3->NULL
 *
 * 示例 2:
 *
 * 输入: 0->1->2->NULL, k = 4
 * 输出: 2->0->1->NULL
 * 解释:
 * 向右旋转 1 步: 2->0->1->NULL
 * 向右旋转 2 步: 1->2->0->NULL
 * 向右旋转 3 步: 0->1->2->NULL
 * 向右旋转 4 步: 2->0->1->NULL
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
 * 自己的思路：
 * 1. 遍历一遍链表，计算出节点数量 count，然后将链表闭成环。
 * 2. 利用计算的节点数量 count、k，可以计算出新的链表尾的位置。
 * 3. 循环 `count - (k % count)` 次，找到新的链表尾，其后面的元素即为新的链表头。
 * 4. 在新链表尾后面将环断开，返回新链表头即可。
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;

  let curr = head;
  let count = 1;

  // 计算节点数量
  while (curr.next) {
    curr = curr.next;
    count++;
  }
  // 闭成循环链表
  curr.next = head;

  // 找到新的链表尾
  for (let i = count - (k % count); i > 0; i--) {
    curr = curr.next;
  }

  // 新的链表头
  const ret = curr.next;
  // 断开循环链表
  curr.next = null;

  return ret;
};
// @lc code=end
