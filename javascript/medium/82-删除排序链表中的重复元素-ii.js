/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * @level ⭐⭐
 * @tags 链表
 * @similars
 * @end
 *
 * 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。
 *
 *
 * 示例 1：
 *
 * 输入：head = [1,2,3,3,4,4,5]
 * 输出：[1,2,5]
 *
 *
 * 示例 2：
 *
 * 输入：head = [1,1,1,2,3]
 * 输出：[2,3]
 *
 *
 * 提示：
 *
 * 链表中节点数目在范围 [0, 300] 内
 * -100 <= Node.val <= 100
 * 题目数据保证链表已经按升序 排列
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
 * 1. 直接遍历
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head;

  const dummyHead = new ListNode(null, head);
  let prev = dummyHead;

  while (prev.next && prev.next.next) {
    if (prev.next.val === prev.next.next.val) {
      const val = prev.next.val;

      while (prev.next && prev.next.val === val) {
        prev.next = prev.next.next;
      }
    } else {
      prev = prev.next;
    }
  }

  return dummyHead.next;
};

/**
 * 2. 递归
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;

  if (head.val !== head.next.val) {
    head.next = deleteDuplicates(head.next);
  } else {
    const val = head.val;
    let curr = head;

    while (curr && curr.val === val) {
      curr = curr.next;
    }

    return deleteDuplicates(curr);
  }

  return head;
};
// @lc code=end
