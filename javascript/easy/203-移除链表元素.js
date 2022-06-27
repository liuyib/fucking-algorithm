/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * @level ⭐
 * @tags Linked List, Recursion
 * @similars
 * @end
 *
 * 删除链表中等于给定值 val 的所有节点。
 *
 * 示例:
 *
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// 无虚拟头节点实现
var removeElements = function (head, val) {
  while (head !== null && head.val === val) {
    const delNode = head;

    head = delNode.next;
    delNode.next = null;
  }

  if (head === null) {
    return null;
  }

  let prev = head;

  while (prev.next !== null) {
    if (prev.next.val === val) {
      const delNode = prev.next;

      prev.next = delNode.next;
      delNode.next = null;
    } else {
      prev = prev.next;
    }
  }

  return head;
};

// // 有虚拟头结点实现
// var removeElements = function (head, val) {
//   const dummyHead = new ListNode(null, head);
//   let prev = dummyHead;

//   while (prev.next !== null) {
//     if (prev.next.val === val) {
//       const delNode = prev.next;

//       prev.next = delNode.next;
//       delNode.next = null;
//     } else {
//       prev = prev.next;
//     }
//   }

//   return dummyHead.next;
// };

// // 递归实现
// var removeElements = function (head, val) {
//   if (head === null) return null;

//   head.next = removeElements(head.next, val);
//   return head.val === val ? head.next : head;
// };
// @lc code=end
