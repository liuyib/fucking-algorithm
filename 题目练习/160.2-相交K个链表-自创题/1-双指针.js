/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var getIntersectionKNode = function (lists) {
  if (!lists) return null;

  // 判断两条链表是否相交
  const getIntersectionNode = (headA, headB) => {
    if (!headA && !headB) return null;

    let a = headA;
    let b = headB;

    while (a !== b) {
      a = a === null ? headB : a.next;
      b = b === null ? headA : b.next;
    }

    return a;
  };

  const len = lists.length;
  let interval = 1;
  let intersectionNode = null;

  // 分治判断 N 条链表是否相交。
  // 执行过程如下（举例）：
  // 第 1 轮遍历：0 1 2 3 4 5 -> 依次是 0 1 合并、2 3 合并、4 5 合并
  // 第 2 轮遍历：0   2   4   -> 依次是 0 2 合并、4 不变
  // 第 3 轮遍历：0   2       -> 依次是 0 2 合并
  // 第 4 轮遍历：0           -> 依次是 0 不变
  while (interval < len) {
    for (let i = 0; i < len - interval; i += interval * 2) {
      const node = getIntersectionNode(lists[i], lists[i + interval]);

      if (intersectionNode && node && intersectionNode !== node) return null;

      intersectionNode = node;
    }

    interval *= 2;
  }

  return intersectionNode;
};

const LinkedList = require("../../src/LinkedList/LinkedList-no-dummyHead");

// ----- case 1： 有相交的节点 -----

const linkedList1 = new LinkedList();
const linkedList2 = new LinkedList();
const linkedList3 = new LinkedList();

linkedList1.addLast(1);
linkedList1.addLast(2);
linkedList1.addLast(3);
linkedList1.addLast(4);
linkedList1.addLast(5);

linkedList2.addLast(5);
linkedList2.head.next = linkedList1.head.next.next;

linkedList3.addLast(6);
linkedList3.addLast(7);
linkedList3.head.next.next = linkedList1.head.next.next;

/**
 * 1 → 2 → 3 → 4 → 5
 *       ↗ ↑
 *      5  7
 *         ↑
 *         6
 */

const case1 = [linkedList1.head, linkedList2.head, linkedList3.head];

console.log("case 1: ", getIntersectionKNode(case1).e === 3);

// ----- case 1： 无相交的节点 -----

const linkedList4 = new LinkedList();
const linkedList5 = new LinkedList();
const linkedList6 = new LinkedList();

linkedList4.addLast(1);
linkedList4.addLast(2);
linkedList4.addLast(3);

linkedList5.addLast(4);
linkedList5.addLast(5);

linkedList6.addLast(6);
linkedList6.addLast(7);
linkedList6.addLast(8);
linkedList6.addLast(9);

const case2 = [linkedList4.head, linkedList5.head, linkedList6.head];

console.log("case 2: ", getIntersectionKNode(case2) === null);
