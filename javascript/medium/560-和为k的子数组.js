/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 *
 * https://leetcode-cn.com/problems/subarray-sum-equals-k/description/
 *
 * @level ⭐⭐
 * @tags 'Array' 'Hash Table' '前缀和'
 * @similars
 * @end
 *
 * 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
 *
 * 示例 1 :
 *
 * 输入:nums = [1,1,1], k = 2
 * 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
 *
 * 说明 :
 *
 * 数组的长度为 [1, 20,000]。
 * 数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。
 *
 */

// @lc code=start
/**
 * 题解思路：前缀和 + Hash 表优化
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map();
  let pre = 0;
  let count = 0;

  map.set(0, 1);

  for (const num of nums) {
    pre += num;

    if (map.has(pre - k)) {
      count += map.get(pre - k);
    }

    if (map.has(pre)) {
      map.set(pre, map.get(pre) + 1);
    } else {
      map.set(pre, 1);
    }
  }

  return count;
};
// console.log(`subarraySum([1, 2, 3], 3)`, subarraySum([1, 2, 3], 3), 2);
// console.log(`subarraySum([0, 0, 0], 0)`, subarraySum([0, 0, 0], 0), 6);
// console.log(`subarraySum([1, 1, 1], 2)`, subarraySum([1, 1, 1], 2), 2);
// console.log(`subarraySum([1], 1)`, subarraySum([1], 1), 1);
// console.log(`subarraySum([1], 0))`, subarraySum([1], 0), 0);
// console.log(`subarraySum([-1,-1,1]))`, subarraySum([-1, -1, 1], 0), 1);
// @lc code=end
