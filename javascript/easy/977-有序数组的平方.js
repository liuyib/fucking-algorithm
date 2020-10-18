/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * 作者：liuyib <https://github.com/liuyib>
 * 日期：2020-10-17
 *
 * [977] 有序数组的平方
 *
 * https://leetcode-cn.com/problems/squares-of-a-sorted-array/description/
 *
 * @tags 'Array'
 *
 * 给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
 *
 *
 *
 * 示例 1：
 *
 * 输入：[-4,-1,0,3,10]
 * 输出：[0,1,9,16,100]
 *
 *
 * 示例 2：
 *
 * 输入：[-7,-3,2,3,11]
 * 输出：[4,9,9,49,121]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= A.length <= 10000
 * -10000 <= A[i] <= 10000
 * A 已按非递减顺序排序。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  const len = A.length;
  const result = [];

  let i = 0;
  let j = len - 1;

  for (let pos = len - 1; pos >= 0; pos--) {
    if (Math.abs(A[i]) > Math.abs(A[j])) {
      result[pos] = A[i] * A[i];
      i++;
    } else {
      result[pos] = A[j] * A[j];
      j--;
    }
  }

  return result;
};
// @lc code=end

/**
 * 下面是二分搜索树的解法（纯属练习，性能不好）
 */
// class Node {
//   constructor(e) {
//     this.e = e;
//     this.left = null; // 左孩子
//     this.right = null; // 右孩子
//     this.count = 1; // 出现次数（允许有重复值）
//   }
// }

// class BST {
//   constructor() {
//     this.size = 0;
//     this.root = null;
//   }

//   add(e, node = this.root) {
//     const newNode = new Node(e);

//     if (node === null) {
//       if (this.root === null) {
//         this.root = newNode;
//       }

//       this.size += 1;
//       return newNode;
//     }

//     if (e < node.e) {
//       node.left = this.add(e, node.left);
//     } else if (e > node.e) {
//       node.right = this.add(e, node.right);
//     } else {
//       node.count += 1;
//     }

//     return node;
//   }

//   midOrder() {
//     if (this.size === 0) {
//       throw new Error("BST is Empty.");
//     }

//     const result = [];
//     const stack = [];
//     let cur = JSON.parse(JSON.stringify(this.root));
//     stack.push(cur);

//     while (stack.length !== 0) {
//       if (cur.left !== null) {
//         stack.push(cur.left);
//         cur = cur.left;
//       } else {
//         cur = stack.pop();
//         cur.left = null;
//         result.push(...new Array(cur.count).fill(cur.e));

//         if (cur.right !== null) {
//           const right = cur.right;
//           cur.right = null;
//           stack.push(right);
//         }
//       }
//     }

//     return result;
//   }
// }

// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
// var sortedSquares = function (A) {
//   const bst = new BST();

//   A.map((a) => bst.add(a * a));

//   return bst.midOrder();
// };
