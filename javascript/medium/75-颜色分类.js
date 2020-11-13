/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 *
 * https://leetcode-cn.com/problems/sort-colors/description/
 *
 * @tags 'Array' 'Double Pointer'
 *
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 *
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 *
 * 注意:
 * 不能使用代码库中的排序函数来解决这道题。
 *
 * 示例:
 *
 * 输入: [2,0,2,1,1,0]
 * 输出: [0,0,1,1,2,2]
 *
 * 进阶：
 *
 * 一个直观的解决方案是使用计数排序的两趟扫描算法。
 * 首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
 * 你能想出一个仅使用常数空间的一趟扫描算法吗？
 */

// @lc code=start
/**
 * 题解思路：双指针（关键：定义好循环不变量，注意结束边界，不重不漏）
 * 三路快排的思想，将数组分成 < pivot | == pivot | > pivot 三个区间
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const len = nums.length;

  if (len < 2) return;

  let l = 0;
  let r = len - 1;
  let i = 0;

  /**
   * 0: [0, l)
   * 1: [l, i)
   * 2: (r, len - 1]
   */
  while (i <= r) {
    if (nums[i] === 0) {
      swap(nums, l, i);
      l++;
      i++;
    } else if (nums[i] === 1) {
      i++;
    } else {
      swap(nums, i, r);
      r--;
    }
  }

  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
};

/**
 * 计数排序（先计数，然后按数量生成排序后的数组）
 */
var sortColors = function (nums) {
  const cache = {};

  for (let i = 0; i < nums.length; i++) {
    const color = nums[i];
    cache[color] = (cache[color] || 0) + 1;
  }

  nums.length = 0;
  const colors = [0, 1, 2];

  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    for (let j = 0; j < cache[color]; j++) {
      nums.push(color);
    }
  }
};
// @lc code=end
