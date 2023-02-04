/*
 * @lc app=leetcode.cn id=23 lang=javascript
 */

/**
 * 题解思路，重点复习：
 *
 * 1. 两两一组，分治合并
 * 2. 第一轮合并后，k 个链表被合并成了 k/2 个链表，然后是 k/4 个链表等等，过程如下所示：
 *
 * (list0) (list1) (list2) (list3) (list4) (list5)
 *    ↓ ↙-----┘       ↓ ↙-----┘       ↓ ↙-----┘
 * (list0)         (list2)         (list4)
 *    ↓ ↙-------------┘               ↓
 * (list0)                         (list4)
 *    ↓ ↙-----------------------------┘
 * (list0)
 *
 * 复杂度推导见：https://leetcode.cn/problems/merge-k-sorted-lists/solution/he-bing-kge-pai-xu-lian-biao-by-leetcode-solutio-2/
 * 时间复杂度：O(KN × logK)
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

  const count = lists.length;
  let interval = 1;

  // 执行过程如下（举例）：
  // 第 1 轮遍历：0 1 2 3 4 5 -> 依次是 0 1 合并、2 3 合并、4 5 合并
  // 第 2 轮遍历：0   2   4   -> 依次是 0 2 合并、4 不变
  // 第 3 轮遍历：0   2       -> 依次是 0 2 合并
  // 第 4 轮遍历：0           -> 依次是 0 不变
  while (interval < count) {
    for (let i = 0; i < count - interval; i += interval * 2) {
      lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
    }

    interval *= 2;
  }

  return lists[0] ? lists[0] : null;
};
// @lc code=end
