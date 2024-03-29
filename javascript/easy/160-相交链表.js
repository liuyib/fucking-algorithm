/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 *
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists/description/
 *
 * @level ⭐
 * @tags Linked List, Double Pointer
 * @similars
 * @end
 *
 * 编写一个程序，找到两个单链表相交的起始节点。
 *
 * 如下面的两个链表：
 *
 * 在节点 c1 开始相交。
 *
 * 示例 1：
 *
 * 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
 * 输出：Reference of the node with value = 8
 * 输入解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为
 * [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
 *
 * 示例 2：
 *
 * 输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
 * 输出：Reference of the node with value = 2
 * 输入解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为
 * [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
 *
 * 示例 3：
 *
 * 输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
 * 输出：null
 * 输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
 * 解释：这两个链表不相交，因此返回 null。
 *
 * 注意：
 *
 * 1. 如果两个链表没有交点，返回 null。
 * 2. 在返回结果后，两个链表仍须保持原有的结构。
 * 3. 可假定整个链表结构中没有循环。
 * 4. 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。
 *
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
 * 固定思路：双指针
 * 1. 指针 a, b 分别指向 A, B 两个链表。
 * 2. 两个指针以相同的步速向后移动。
 * 3. 当 a 到达链表尾部时，重定向到 B 链表。
 * 4. 当 b 到达链表尾部时，重定向到 A 链表。
 * 5. 最后 a, b 相遇点即为相交的起始节点，否则没有相交点。
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null;

  let a = headA;
  let b = headB;

  // 如果两个指针都重定向到另一个链表上后，
  // 如果没有相遇，最后都会指向 null（因为最后走得路程一样）
  while (a !== b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }

  return a;
};
// @lc code=end
