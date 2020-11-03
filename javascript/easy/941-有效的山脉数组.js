/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 *
 * https://leetcode-cn.com/problems/valid-mountain-array/description/
 *
 * @tags 'Array' 'Double Pointer'
 *
 * 给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。
 *
 * 让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：
 *
 * A.length >= 3
 * 在 0 < i < A.length - 1 条件下，存在 i 使得：
 *
 * A[0] < A[1] < ... A[i-1] < A[i]
 * A[i] > A[i+1] > ... > A[A.length - 1]
 *
 * 示例 1：
 *
 * 输入：[2,1]
 * 输出：false
 *
 * 示例 2：
 *
 * 输入：[3,5,5]
 * 输出：false
 *
 * 示例 3：
 *
 * 输入：[0,3,2,1]
 * 输出：true
 *
 * 提示：
 *
 * 0 <= A.length <= 10000
 * 0 <= A[i] <= 10000
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  if (!A || A.length < 3) return false;

  const len = A.length;
  let low = 0;
  let high = len - 1;

  while (low + 1 < len && A[low + 1] > A[low]) {
    low += 1;
  }

  while (high > 0 && A[high - 1] > A[high]) {
    high -= 1;
  }

  return low > 0 && high < len - 1 && low === high;
};

// console.log(validMountainArray([2, 1]), false);
// console.log(validMountainArray([3, 5, 5]), false);
// console.log(validMountainArray([0, 3, 2, 1]), true);
// console.log(validMountainArray([2, 0, 2]), false);
// console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), false);
// @lc code=end
