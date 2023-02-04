/*
 * @lc app=leetcode.cn id=23 lang=javascript
 */

/**
 * 题解思路，仅做练习
 *
 * 复杂度推导见：https://leetcode.cn/problems/merge-k-sorted-lists/solution/he-bing-kge-pai-xu-lian-biao-by-leetcode-solutio-2/
 * 时间复杂度：O(k²n)
 * 空间复杂度：O(1)
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
  const mergeTwoLists = (l1, l2) => {
    const dummyHead = new ListNode();
    let curr = dummyHead;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        curr.next = l1;
        l1 = l1.next;
      } else {
        curr.next = l2;
        l2 = l2.next;
      }

      curr = curr.next;
    }

    curr.next = l1 ? l1 : l2;

    return dummyHead.next;
  };

  let curr = null;

  for (let i = 0; i < lists.length; i++) {
    curr = mergeTwoLists(curr, lists[i]);
  }

  return curr;
};
// @lc code=end
