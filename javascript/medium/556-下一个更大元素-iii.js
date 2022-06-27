/*
 * @lc app=leetcode.cn id=556 lang=javascript
 *
 * [556] 下一个更大元素 III
 *
 * https://leetcode-cn.com/problems/next-greater-element-iii/description/
 *
 * algorithms
 * Medium (33.13%)
 * Likes:    192
 * Dislikes: 0
 * Total Accepted:    18.5K
 * Total Submissions: 56K
 * Testcase Example:  '12'
 *
 * 给你一个正整数 n ，请你找出符合条件的最小整数，其由重新排列 n 中存在的每位数字组成，并且其值大于 n 。如果不存在这样的正整数，则返回 -1 。
 *
 * 注意 ，返回的整数应当是一个 32 位整数 ，如果存在满足题意的答案，但不是 32 位整数 ，同样返回 -1 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 12
 * 输出：21
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 21
 * 输出：-1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  var s = `${n}`.split('');
  var len = s.length;
  var stack = [];

  for (var i = len - 1; i >= 0; i--) {
    var top = -1;

    while (stack.length && s[i] < s[stack[stack.length - 1]]) {
      top = stack.pop();
    }

    if (top !== -1) {
      var temp = s[top];

      s[top] = s[i];
      s[i] = temp;

      break;
    }

    stack.push(i);
  }

  var ret = Number(s.join(''));

  if (ret > 2 ** 31 - 1 || ret === n) {
    return -1;
  }

  return ret;
};
// @lc code=end
