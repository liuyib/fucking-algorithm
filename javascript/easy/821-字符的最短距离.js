/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 *
 * https://leetcode-cn.com/problems/shortest-distance-to-a-character/description/
 *
 * @level ⭐
 * @tags String, Greedy
 * @similars
 * @end
 *
 * 给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。
 *
 * 示例 1:
 *
 * 输入: S = "loveleetcode", C = 'e'
 * 输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 *
 * 说明:
 *
 * 1. 字符串 S 的长度范围为 [1, 10000]。
 * 2. C 是一个单字符，且保证是字符串 S 里的字符。
 * 3. S 和 C 中的所有字母均为小写字母。
 *
 */

// @lc code=start
/**
 * 二分思路：
 * 1. 用数组 indexs 存 C 在 S 中的索引。
 * 2. 对于 S 中的每个字符，在 indexs 中二分查找距离当前位置最近的下标，记录到结果数组中。
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
  const indexs = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) {
      indexs.push(i);
    }
  }

  const result = [];

  for (let i = 0; i < S.length; i++) {
    let l = 0;
    let r = indexs.length - 1;

    while (l !== r && l + 1 !== r) {
      const mid = Math.floor((l + r) / 2);

      if (i >= indexs[mid]) {
        l = mid;
      } else {
        r = mid;
      }
    }

    const min = Math.min(Math.abs(indexs[l] - i), Math.abs(indexs[r] - i));
    result.push(min);
  }

  return result;
};
// @lc code=end
