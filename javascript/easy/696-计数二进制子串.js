/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 *
 * https://leetcode-cn.com/problems/count-binary-substrings/description/
 *
 * @level ⭐
 * @tags String
 * @similars
 * @end
 *
 * 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
 *
 * 重复出现的子串要计算它们出现的次数。
 *
 * 示例 1 :
 *
 * 输入: "00110011"
 * 输出: 6
 * 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。
 *
 * 请注意，一些重复出现的子串要计算它们出现的次数。
 *
 * 另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。
 *
 * 示例 2 :
 *
 * 输入: "10101"
 * 输出: 4
 * 解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。
 *
 * 注意：
 *
 * 1. s.length 在1到50,000之间。
 * 2. s 只包含“0”或“1”字符。
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  // ------------- 拆分出数组 -------------
  let arr = [];
  let index = 0;
  let prev = s[0];
  for (let i = 1; i < s.length; i++) {
    if (prev !== s[i]) {
      arr.push(s.substring(index, i));
      index = i;
      prev = s[i];
    }
  }
  arr.push(s.substring(index));
  // -------------------------------------

  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += Math.min(arr[i].length, arr[i + 1].length);
  }

  return sum;
};
// @lc code=end
