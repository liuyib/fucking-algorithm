/*
 * @lc app=leetcode.cn id=23 lang=javascript
 */

/**
 * 我的思路，仅做练习
 *
 * 时间复杂度：O(NK)，其中 N: 节点总数，K：链表条数
 * 空间复杂度：O(n)
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const k = lists.length;
  const dummyHead = new ListNode();
  let curr = dummyHead;

  while (true) {
    let minIndex = -1;
    let minNode = null;

    // 找出值最小的节点，并记录索引
    for (let i = 0; i < k; i++) {
      if (lists[i] === null) continue;
      if (minNode === null || lists[i].val < minNode.val) {
        minNode = lists[i];
        minIndex = i;
      }
    }

    if (minNode === null) break;

    curr.next = minNode;
    curr = curr.next;
    lists[minIndex] = lists[minIndex].next;
  }

  return dummyHead.next;
};
// @lc code=end
