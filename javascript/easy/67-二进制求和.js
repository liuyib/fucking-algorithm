/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * @tags 'String'
 *
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
 *
 * 输入为 非空 字符串且只包含数字 1 和 0。
 *
 * 示例 1:
 *
 * 输入: a = "11", b = "1"
 * 输出: "100"
 *
 * 示例 2:
 *
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 *
 * 提示：
 *
 * 每个字符串仅由字符 '0' 或 '1' 组成。
 * 1 <= a.length, b.length <= 10^4
 * 字符串如果不是 "0" ，就都不含前导零。
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const aLen = a.length;
  const bLen = b.length;
  const maxLen = Math.max(aLen, bLen);

  let temp = 0;
  let carry = 0;
  let result = "";

  for (let i = 0; i < maxLen; i++) {
    const aItem = a[aLen - 1 - i] === "1" ? 1 : 0;
    const bItem = b[bLen - 1 - i] === "1" ? 1 : 0;

    temp = aItem + bItem + carry;
    result = (temp % 2) + result;
    carry = Math.floor(temp / 2);
  }

  if (carry === 1) {
    result = 1 + result;
  }

  return result;
};
// @lc code=end
