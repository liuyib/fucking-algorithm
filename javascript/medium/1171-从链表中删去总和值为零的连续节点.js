/*
 * @lc app=leetcode.cn id=1171 lang=javascript
 *
 * [1171] 从链表中删去总和值为零的连续节点
 *
 * https://leetcode.cn/problems/remove-zero-sum-consecutive-nodes-from-linked-list/description/
 *
 * @level ⭐⭐
 * @tags 链表, 前缀和, 哈希表
 * @similars
 * @end
 *
 * 给你一个链表的头节点 head，请你编写代码，反复删去链表中由 总和 值为 0 的连续节点组成的序列，直到不存在这样的序列为止。
 *
 * 删除完毕后，请你返回最终结果链表的头节点。
 *
 * 你可以返回任何满足题目要求的答案。
 *
 * （注意，下面示例中的所有序列，都是对 ListNode 对象序列化的表示。）
 *
 * 示例 1：
 *
 * 输入：head = [1,2,-3,3,1]
 * 输出：[3,1]
 * 提示：答案 [1,2,1] 也是正确的。
 *
 *
 * 示例 2：
 *
 * 输入：head = [1,2,3,-3,4]
 * 输出：[1,2,4]
 *
 *
 * 示例 3：
 *
 * 输入：head = [1,2,3,-3,-2]
 * 输出：[1]
 *
 *
 * 提示：
 *
 * 给你的链表中可能有 1 到 1000 个节点。
 * 对于链表中的每个节点，节点的值：-1000 <= node.val <= 1000.
 */

// @lc code=start
/**
 * 思路：计算前缀和，然后前缀和相同的节点之间就是“连续相加为 0”的节点。示意图如下：
 *
 * 链表  ：(1) -> (2) -> (3) -> (-3) -> (-2) -> (2) -> (4)
 * 前缀和： 1      3      6       3       1      3      7
 *
 * 然后前缀和相同的节点，例如前缀和都为 1 的两个节点，依次命名为 p1, p2，
 * 则 (p1, p2] 就是需要去掉的节点，
 * 执行 `p1.next = p2.next` 就可以去掉 `(2) -> (3) -> (-3) -> (-2)`
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function (head) {
  if (!head) return head;

  const dummyHead = new ListNode(0, head);
  const map = new Map();
  let curr = dummyHead;
  // 计算前缀和
  let sum = 0;

  while (curr) {
    sum += curr.val;
    map.set(sum, curr);
    curr = curr.next;
  }

  curr = dummyHead;
  sum = 0;

  while (curr) {
    sum += curr.val;
    // 直接把当前节点的 next 指向前缀和相同的节点的 next
    curr.next = map.get(sum).next;
    curr = curr.next;
  }

  return dummyHead.next;
};
// @lc code=end
