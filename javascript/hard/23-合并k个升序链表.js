/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 *
 * https://leetcode.cn/problems/merge-k-sorted-lists/description/
 *
 * @level ⭐⭐⭐
 * @tags 链表,
 * @similars
 * @end
 *
 * 给你一个链表数组，每个链表都已经按升序排列。
 *
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 *
 *
 * 示例 1：
 *
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
 * 输出：[1,1,2,3,4,4,5,6]
 * 解释：链表数组如下：
 * [
 * ⁠ 1->4->5,
 * ⁠ 1->3->4,
 * ⁠ 2->6
 * ]
 * 将它们合并到一个有序链表中得到。
 * 1->1->2->3->4->4->5->6
 *
 *
 * 示例 2：
 *
 * 输入：lists = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 * 输入：lists = [[]]
 * 输出：[]
 *
 *
 * 提示：
 *
 * k == lists.length
 * 0 <= k <= 10^4
 * 0 <= lists[i].length <= 500
 * -10^4 <= lists[i][j] <= 10^4
 * lists[i] 按 升序 排列
 * lists[i].length 的总和不超过 10^4
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
 * 思路：转化为“合并两个升序链表”，然后用分治法合并
 * https://github.com/liuyib/study-algorithm/blob/master/my-solutions/23-%E5%90%88%E5%B9%B6K%E4%B8%AA%E5%8D%87%E5%BA%8F%E9%93%BE%E8%A1%A8/2.2-%E4%BD%BF%E7%94%A8%E5%88%86%E6%B2%BB%E4%BC%98%E5%8C%962.1*.js
 *
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists || !lists.length) return null;

  const merge2Lists = (list1, list2) => {
    if (!list1 && !list2) return list1;

    const dummyHead = new ListNode();
    let curr = dummyHead;
    let l1 = list1;
    let l2 = list2;

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

  const len = lists.length;
  let step = 1;

  while (step < len) {
    for (let i = 0; i < len - step; i += step * 2) {
      lists[i] = merge2Lists(lists[i], lists[i + step]);
    }

    step *= 2;
  }

  return lists[0];
};
// @lc code=end
