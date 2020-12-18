/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 *
 * https://leetcode-cn.com/problems/find-the-difference/description/
 *
 * @level ⭐
 * @tags String, Hash Table, Bit Operation
 * @similars T#136
 * @end
 *
 * 给定两个字符串 s 和 t，它们只包含小写字母。
 *
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 *
 * 请找出在 t 中被添加的字母。
 *
 * 示例 1：
 *
 * 输入：s = "abcd", t = "abcde"
 * 输出："e"
 * 解释：'e' 是那个被添加的字母。
 *
 * 示例 2：
 *
 * 输入：s = "", t = "y"
 * 输出："y"
 *
 * 示例 3：
 *
 * 输入：s = "a", t = "aa"
 * 输出："a"
 *
 * 示例 4：
 *
 * 输入：s = "ae", t = "aea"
 * 输出："a"
 *
 * 提示：
 *
 * 1. 0 <= s.length <= 1000
 * 2. t.length == s.length + 1
 * 3. s 和 t 只包含小写字母
 *
 */

// @lc code=start
/**
 * 方法一：哈希表
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const data = new Map();

  for (const ch of s) {
    data.set(ch, (data.get(ch) || 0) + 1);
  }
  for (const ch of t) {
    data.set(ch, (data.get(ch) || 0) - 1);
  }

  for (const [key, val] of data) {
    if (val !== 0) return key;
  }

  return '';
};

/**
 * 方法二：相加运算（计算 ASCII 码总和的差值）
 */
var findTheDifference = function (s, t) {
  let count = 0;

  for (const ch of t) {
    count += ch.codePointAt();
  }
  for (const ch of s) {
    count -= ch.codePointAt();
  }

  return String.fromCodePoint(count);
};

/**
 * 方法三：位运算
 * 原理：两个相同的数字进行异或运算，结果为 0。如果一组数中，只有一个数有奇数个，
 *       其他数全有偶数个，那么这些数字的异或运算结果，就是奇数个的那个数字。
 */
var findTheDifference = function (s, t) {
  let xor = 0;

  for (const ch of s) {
    xor ^= ch.codePointAt();
  }
  for (const ch of t) {
    xor ^= ch.codePointAt();
  }

  return String.fromCodePoint(xor);
};
// @lc code=end
