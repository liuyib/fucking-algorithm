/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 *
 * https://leetcode-cn.com/problems/isomorphic-strings/description/
 *
 * @level ⭐
 * @tags String, Hash Table
 * @similars T#290
 * @end
 *
 * 给定两个字符串 s 和 t，判断它们是否是同构的。
 *
 * 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
 *
 * 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。
 *
 * 示例 1:
 *
 * 输入：s = "egg", t = "add"
 * 输出：true
 *
 * 示例 2：
 *
 * 输入：s = "foo", t = "bar"
 * 输出：false
 *
 * 示例 3：
 *
 * 输入：s = "paper", t = "title"
 * 输出：true
 *
 * 提示：
 *
 * 1. 可以假设 s 和 t 长度相同。
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const m1 = new Map();
  const m2 = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!m1.has(s[i])) m1.set(s[i], t[i]);
    if (!m2.has(t[i])) m2.set(t[i], s[i]);

    if (m1.get(s[i]) !== t[i] || m2.get(t[i]) !== s[i]) {
      return false;
    }
  }

  return true;
};
// @lc code=end
