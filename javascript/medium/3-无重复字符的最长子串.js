/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * @level ⭐⭐
 * @tags 'String' 'Sliding Window' 'Double Pointer' 'Hash Table'
 * @similars
 * @end
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 示例 1:
 *
 * 输入: s = "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 * 示例 2:
 *
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 * 示例 3:
 *
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 * 示例 4:
 *
 * 输入: s = ""
 * 输出: 0
 *
 * 提示：
 *
 * 1. 0 <= s.length <= 5 * 104
 * 2. s 由英文字母、数字、符号和空格组成
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;

  const len = s.length;
  const cache = new Set();
  let ans = 0;
  let r = 0;

  for (let l = 0; l < len; l++) {
    while (r < len && !cache.has(s[r])) {
      cache.add(s[r]);
      r++;
    }

    ans = Math.max(ans, r - l);
    cache.delete(s[l]);
  }

  return ans;
};

// console.log(lengthOfLongestSubstring("abcabcbb"), 3);
// console.log(lengthOfLongestSubstring("bbbbb"), 1);
// console.log(lengthOfLongestSubstring("pwwkew"), 3);
// console.log(lengthOfLongestSubstring(""), 0);
// console.log(lengthOfLongestSubstring(" "), 1);
// console.log(lengthOfLongestSubstring("au"), 2);
// console.log(lengthOfLongestSubstring("aab"), 2);
// console.log(lengthOfLongestSubstring("dvdf"), 3);
// @lc code=end
