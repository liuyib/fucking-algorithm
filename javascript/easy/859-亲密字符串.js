/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 *
 * https://leetcode-cn.com/problems/buddy-strings/description/
 *
 * @level ⭐
 * @tags String
 * @similars
 * @end
 *
 * 给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false。
 *
 * 交换字母的定义是取两个下标 i 和 j （下标从 0 开始），只要 i!=j 就交换 A[i] 和 A[j] 处的字符。例如，在 "abcd"
 * 中交换下标 0 和下标 2 的元素可以生成 "cbad" 。
 *
 * 示例 1：
 *
 * 输入： A = "ab", B = "ba"
 * 输出： true
 * 解释： 你可以交换 A[0] = 'a' 和 A[1] = 'b' 生成 "ba"，此时 A 和 B 相等。
 *
 * 示例 2：
 *
 * 输入： A = "ab", B = "ab"
 * 输出： false
 * 解释： 你只能交换 A[0] = 'a' 和 A[1] = 'b' 生成 "ba"，此时 A 和 B 不相等。
 *
 * 示例 3:
 *
 * 输入： A = "aa", B = "aa"
 * 输出： true
 * 解释： 你可以交换 A[0] = 'a' 和 A[1] = 'a' 生成 "aa"，此时 A 和 B 相等。
 *
 * 示例 4：
 *
 * 输入： A = "aaaaaaabc", B = "aaaaaaacb"
 * 输出： true
 *
 * 示例 5：
 *
 * 输入： A = "", B = "aa"
 * 输出： false
 *
 * 提示：
 *
 * 1. 0 <= A.length <= 20000
 * 2. 0 <= B.length <= 20000
 * 3. A 和 B 仅由小写字母构成。
 *
 */

// @lc code=start
/**
 * 题解思路：
 * 1. A === B 时，如果 A（或 B）中存在重复字母，则满足；否则，不满足。
 * 2. A !== B 时
 *   2.1 如果仅存在“两个”下标 i, j 使得 A[i] == B[j] && A[j] == B[i]，则满足。
 *   2.2 如果 A、B 相同下标处不等的元素大于 2，则不满足。
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
  if (A.length !== B.length) return false;

  const len = A.length;

  if (A === B) {
    const map = new Map();

    for (let i = 0; i < len; i++) {
      if (map.get(A[i])) {
        return true;
      }
      map.set(A[i], true);
    }

    return false;
  }

  let p0 = -1;
  let p1 = -1;

  for (let i = 0; i < len; i++) {
    if (A[i] !== B[i]) {
      if (p0 === -1) {
        p0 = i;
      } else if (p1 === -1) {
        p1 = i;
      } else {
        // 存在第三个，相同下标，不同字母的情况
        // 题目只允许“仅存在两个，相同下标，不同字母”
        return false;
      }
    }
  }

  return A[p0] === B[p1] && A[p1] === B[p0];
};
// @lc code=end
