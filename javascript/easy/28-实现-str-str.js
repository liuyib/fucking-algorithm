/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 *
 * https://leetcode-cn.com/problems/implement-strstr/description/
 *
 * @level ⭐(⭐)(⭐)
 * @tags 字符串匹配, Rabin-Karp
 * @note 虽然是 easy 题，但是使用不同的算法，难度不同。Rabin-Karp: ⭐⭐, KMP: ⭐⭐⭐
 * @end
 *
 * 实现 strStr() 函数。
 *
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置
 * (从0开始)。如果不存在，则返回  -1。
 *
 * 示例 1:
 *
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 *
 * 示例 2:
 *
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 *
 * 说明:
 *
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 *
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 *
 */

// @lc code=start
/**
 * Rabin-Karp 算法
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (text, pattern) {
  const tLen = text.length;
  const pLen = pattern.length;
  const radix = 31;
  const mod = 65535;
  let tHash = 0;
  let pHash = 0;
  let power = 1;

  for (let i = 0; i < pLen - 1; i++) {
    power = (power * radix) % mod;
  }

  for (let i = 0; i < pLen; i++) {
    tHash = (tHash * radix + text.charCodeAt(i)) % mod;
    pHash = (pHash * radix + pattern.charCodeAt(i)) % mod;
  }

  if (tHash === pHash) return 0;

  for (let i = 0; i < tLen - pLen; i++) {
    tHash = (tHash - text.charCodeAt(i) * power) % mod;
    tHash = (tHash * radix + text.charCodeAt(i + pLen)) % mod;

    if (tHash < 0) tHash += mod;
    if (tHash === pHash && text.slice(i + 1, i + 1 + pLen) === pattern) {
      return i + 1;
    }
  }

  return -1;
};
// @lc code=end
