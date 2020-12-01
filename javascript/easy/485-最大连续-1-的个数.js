/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 *
 * https://leetcode-cn.com/problems/max-consecutive-ones/description/
 *
 * @level ⭐
 * @tags Sliding Window, 多题同解
 * @similars T#1446
 * @end
 *
 * 给定一个二进制数组， 计算其中最大连续1的个数。
 *
 * 示例 1:
 *
 * 输入: [1,1,0,1,1,1]
 * 输出: 3
 * 解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
 *
 * 注意：
 *
 * 1. 输入的数组只包含 0 和1。
 * 2. 输入数组的长度是正整数，且不超过 10,000。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  const len = nums.length;
  let ans = 0;
  let r = 0;

  for (let l = 0; l < len; l = r) {
    while (r < len && nums[l] === nums[r]) {
      r++;
    }

    if (nums[l] === 1) {
      ans = Math.max(ans, r - l);
    }
  }

  return ans;
};

// console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
// @lc code=end
