/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 *
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/description/
 *
 * @level ⭐⭐⭐
 * @tags Stack, 单调栈
 * @similars
 * @end
 *
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 *
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 *
 * 示例 1:
 *
 * 输入：heights = [2,1,5,6,2,3]
 * 输出：10
 * 解释：最大的矩形为图中红色区域，面积为 10
 *
 * 示例 2：
 *
 * 输入： heights = [2,4]
 * 输出： 4
 *
 * 提示：
 * - 1 <= heights.length <=105
 * - 0 <= heights[i] <= 104
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  if (!heights || !heights.length) return;

  var heights = [0, ...heights, 0];
  var len = heights.length;
  var stack = [];
  var area = 0;

  for (var i = 0; i < len; i++) {
    while (
      stack.length !== 0 &&
      heights[i] < heights[stack[stack.length - 1]]
    ) {
      var top = stack.pop();
      var right = i;
      var left = stack[stack.length - 1];

      area = Math.max(area, heights[top] * (right - left - 1));
    }

    stack.push(i);
  }

  return area;
};
// @lc code=end
