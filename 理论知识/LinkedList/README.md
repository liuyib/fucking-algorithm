# 链表

https://github.com/leetcode-pp/91alg-2/blob/master/lecture/basic-02.md

## 基本概念

### 虚拟节点

定义：在链表第一个节点前附加一个额外的节点，它没有直接前驱，称之为虚拟节点。虚拟节点的数据域一般不存储任何信息（用不到），指针域存储指向链表第一个节点的指针。

作用：对链表进行增删时，统一算法逻辑，减少边界情况的处理。

### 尾结点

定义：尾结点就是在链表中的最后一个节点。

作用：由于查找链表末尾需要遍历整个链表，因此在链表尾部进行操作时会比较耗时，增加尾结点以便在链表末尾以 O(1) 的时间完成操作。

### 静态链表

定义：用数组来描述的链表，它的内存空间是连续的，成为静态链表。相对地，动态链表的内存空间不是连续的，需要动态申请，通过指针来顺序访问。

作用：既可以像数组一样以 O(1) 的时间来访问任意元素，又可以像链表那样以 O(1) 的时间来增删元素。

## 链表分类

按照是否循环分为：循环链表和非循环链表

按照指针个数分为：单链表和双链表

## 重要技巧

### 技巧 1：虚拟头结点

（灵活运用，一般“头结点会变”或“需要头结点但暂时不确定”的情况下使用）

- [21. 合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/) [「我的题解（非递归解法）」](<../../my-solutions/21-合并两个有序链表/1-非递归-O(1)空间.js>)
- [86. 分隔链表](https://leetcode.cn/problems/partition-list/)
- [92. 反转链表 2](https://leetcode.cn/problems/reverse-linked-list-ii/) [「我的题解（两种非递归解法）」](../../my-solutions/92-反转链表2/)
- [25. K 个一组翻转链表](https://leetcode.cn/problems/reverse-nodes-in-k-group/) [「我的题解（两种非递归解法）」](../../my-solutions/25-K个一组翻转链表/)

### 技巧 2：找中点

1. 快慢指针

   > 细节逻辑：
   >
   > 1. 快慢指针都从 head 开始，链表节点总数为奇数和偶数时，找到的中点是有差异的
   > 2. 找到中点后，别忘了“断开”上半段和下半段（有的题目不断开会有问题）

   核心代码：

   1. 如果有两个中间节点，返回第一个

      ```js
      /**
       * @param {ListNode} head
       * @return {listNode} 中间节点
       */
      const getMiddleNode = (head) => {
        let slow = head;
        let fast = head;

        while (fast.next && fast.next.next) {
          slow = slow.next;
          fast = fast.next.next;
        }

        /**
         * 节点为奇数个时，返回的是正中间的节点
         * 例如（实心数字表示被返回的节点）：① -> ② -> ❸ -> ④ -> ⑤
         *
         * 节点为偶数个时，返回的是第一个中间节点，也就是上半段的尾结点
         * 例如（实心数字表示被返回的节点）：① -> ❷ -> ③ -> ④
         */
        return slow;
      };
      ```

   2. 如果有两个中间节点，返回第二个

      ```js
      /**
       * @param {ListNode} head
       * @return {listNode} 中间节点
       */
      const getMiddleNode = (head) => {
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
          slow = slow.next;
          fast = fast.next.next;
        }

        /**
         * 节点为奇数个时，返回的是正中间的节点
         * 例如（实心数字表示被返回的节点）：① -> ② -> ❸ -> ④ -> ⑤
         *
         * 节点为偶数个时，返回的是第二个中间节点，也就是下半段的头结点
         * 例如（实心数字表示被返回的节点）：① -> ② -> ❸ -> ④
         */
        return slow;
      };
      ```

   - [876. 链表的中间结点](https://leetcode.cn/problems/middle-of-the-linked-list/)
   - [234. 回文链表](https://leetcode.cn/problems/palindrome-linked-list/) [「我的题解- 2.1」](<../../my-solutions/234-回文链表/2.1-非递归-O(1)空间*.js>)
   - [143. 重排链表](https://leetcode.cn/problems/reorder-list/) [「我的题解- 1.2」](<../../my-solutions/143-重排链表/1.2-非递归-O(1)空间*.js>)

2. 通过数组长度

   - [234. 回文链表](https://leetcode.cn/problems/palindrome-linked-list/) [「我的题解- 2.2」](<../../my-solutions/234-回文链表/2.2-非递归-O(1)空间.js>)

### 技巧 3：获取倒数第 N 个节点

思路：快慢指针

设有俩指针 a、b，初始 a、b 都指向头结点，先让 a 走 N 步，此时 a 指向 N+1 节点，b 仍指向头结点，俩指针距离 N 个节点。然后 a、b 同时向后移动，直至 a 为空，此时 b 指向倒数第 N 个节点。

核心代码：

```js
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {listNode} 倒数第 n 个节点
 */
const getLastN = (head, n) => {
  let fast = head;
  let slow = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};
```

使用虚拟头结点时，核心代码：

```js
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {listNode} 倒数第 n 个节点
 */
const getLastN = (head, n) => {
  const dummyHead = new ListNode(null, head);
  let fast = dummyHead;
  let slow = dummyHead;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};
```

总结：无论是否使用虚拟头结点，“访问”倒数第 N 个节点的逻辑都相同。而使用虚拟头结点时，更适用于“删除”倒数第 N 个节点。

### 技巧 4：分治法对 N 个链表操作

核心代码：

```js
// 链表条数
const n = nodes.length;
let step = 1;

while (step < n) {
  for (let i = 0; i < n - step; i += step * 2) {
    // 访问 nodes[i] 和 nodes[i + step]
    // 执行过程如下（举例）：
    // 第 1 轮遍历：0 1 2 3 4 5 -> 依次是：访问 0 1、访问 2 3、访问 4 5
    // 第 2 轮遍历：0   2   4   -> 依次是：访问 0 2、4 不变
    // 第 3 轮遍历：0   2       -> 依次是：访问 0 2
    // 第 4 轮遍历：0           -> 依次是：0 不变
  }

  step *= 2;
}
```

- [23. 合并 K 个升序链表](https://leetcode.cn/problems/merge-k-sorted-lists/) [「我的题解」](../../my-solutions/23-合并K个升序链表/2.2-使用分治优化2.1*.js)
- 160.2. 相交 K 个链表-自创题 [「我的题解」](../../my-solutions/160.2-相交K个链表-自创题/1-双指针.js)

## 题目推荐

## 常见题型

### 题型 1：删除链表

> 注：括号里的条件表示更难

1. 删除链表中指定值的节点
2. 删除链表的中间节点
3. 删除链表中倒数第 N 个节点
4. 删除有序（无序）链表中的重复节点，存在重复的节点保留第一个
5. 删除有序（无序）链表中的重复节点，存在重复的节点全部删除

题源：

https://leetcode.cn/problemset/all/?topicSlugs=linked-list&page=1&search=删除

例题：

- [剑指 Offer 18. 删除链表的节点](https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/) - 删除某个节点，输入 head（链表头节点）
- [237. 删除链表中的节点](https://leetcode.cn/problems/delete-node-in-a-linked-list/) - 删除某个节点，输入 node（要删的节点）
- [203. 移除链表元素](https://leetcode.cn/problems/remove-linked-list-elements/) - 删除某个值的所有节点
- [2095. 删除链表的中间节点](https://leetcode.cn/problems/delete-the-middle-node-of-a-linked-list/)
- [19. 删除链表的倒数第 N 个结点](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)
- [83. 删除排序链表中的重复元素](https://leetcode.cn/problems/remove-duplicates-from-sorted-list/) - 有序链表，存在重复的节点保留第一个
- [面试题 02.01. 移除重复节点](https://leetcode.cn/problems/remove-duplicate-node-lcci/) - 无序链表，存在重复的节点保留第一个
- [82. 删除排序链表中的重复元素 II](https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/) [「我的题解」](../../my-solutions/82-删除排序链表中的重复元素2/) - 有序链表，存在重复的节点全部删除
- [1171. 从链表中删去总和值为零的连续节点](https://leetcode.cn/problems/remove-zero-sum-consecutive-nodes-from-linked-list/)

### 题型 2：反转链表

1. 将某条链表反转（非递归、递归）
2. 将某条链表局部反转（非递归、递归）
3. 将某条链表 K 个一组进行反转

- [206. 反转链表](https://leetcode.cn/problems/reverse-linked-list/) [「我的题解」](../../my-solutions/206-反转链表/)
- [234. 回文链表](https://leetcode.cn/problems/palindrome-linked-list/) [「我的题解」](../../my-solutions/234-回文链表/)
- [92. 反转链表 2](https://leetcode.cn/problems/reverse-linked-list-ii/) [「我的题解」](../../my-solutions/92-反转链表2/)
- [24. 两两交换链表中的节点](https://leetcode.cn/problems/swap-nodes-in-pairs/) [「我的题解」](../../my-solutions/24-两两交换链表中的节点/) - 两个一组翻转链表
- [25. K 个一组翻转链表](https://leetcode.cn/problems/reverse-nodes-in-k-group/) [「我的题解」](../../my-solutions/25-K个一组翻转链表/)

### 题型 3：合并链表

1. 将两个有序（或无序）的链表合成一条有序链表
2. 将 K 条有序（或无序）链表合成一条有序链表

- [21. 合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/) [「我的题解」](../../my-solutions/21-合并两个有序链表/)
- [143. 重排链表](https://leetcode.cn/problems/reorder-list/)
- [23. 合并 K 个升序链表](https://leetcode.cn/problems/merge-k-sorted-lists/) [「我的题解」](../../my-solutions/23-合并K个升序链表/)

### 题型 4：相交链表

1. 获取两条链表相交的节点
2. 获取 K 条链表相交的节点

- [160. 相交链表](https://leetcode.cn/problems/intersection-of-two-linked-lists/) [「我的题解」](../../my-solutions/160-相交链表/)
- 160.2. 相交 K 个链表-自创题 [「我的题解」](../../my-solutions/160.2-相交K个链表-自创题/)

### 题型 5：环形链表

1. 判断某条链表是否存在环
2. 获取某条链表环的入口节点
3. 获取某条链表环的大小

- [141. 环形链表](https://leetcode.cn/problems/linked-list-cycle/) - 判断是否有环 [「我的题解」](../../my-solutions/141-环形链表/)
- [142. 环形链表 II](https://leetcode.cn/problems/linked-list-cycle-ii/) - 获取环入口、环大小 [「我的题解」](../../my-solutions/142-环形链表2/)
