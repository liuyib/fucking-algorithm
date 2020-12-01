/*
 * @lc app=leetcode.cn id=1290 lang=javascript
 *
 * [1290] 二进制链表转整数
 *
 * https://leetcode-cn.com/problems/convert-binary-number-in-a-linked-list-to-integer/description/
 *
 * @level ⭐
 * @tags Linked List, Stack, Recursion
 * @similars
 * @end
 *
 * 给你一个单链表的引用结点 head。链表中每个结点的值不是 0 就是 1。已知此链表是一个整数数字的二进制表示形式。
 *
 * 请你返回该链表所表示数字的 十进制值 。
 *
 * 示例 1：
 *
 * 输入：head = [1,0,1]
 * 输出：5
 * 解释：二进制数 (101) 转化为十进制数 (5)
 *
 * 示例 2：
 *
 * 输入：head = [0]
 * 输出：0
 *
 * 示例 3：
 *
 * 输入：head = [1]
 * 输出：1
 *
 * 示例 4：
 *
 * 输入：head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
 * 输出：18880
 *
 * 示例 5：
 *
 * 输入：head = [0,0]
 * 输出：0
 *
 * 提示：
 *
 * 1. 链表不为空。
 * 2. 链表的结点总数不超过 30。
 * 3. 每个结点的值不是 0 就是 1。
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
 * @return {number}
 */
var getDecimalValue = function (head) {
  const stack = [];

  while (head) {
    stack.push(head.val);
    head = head.next;
  }

  let pow = 0;
  let sum = 0;

  while (stack.length) {
    const cur = stack.pop();

    sum += cur * Math.pow(2, pow);
    pow += 1;
  }

  return sum;
};

// 递归方法
var getDecimalValue = function (head, sum = 0) {
  return !head ? sum : getDecimalValue(head.next, sum * 2 + head.val);
};
// @lc code=end
