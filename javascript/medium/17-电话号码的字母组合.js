/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * @level ⭐⭐
 * @tags 'DFS' 'Backtracking'
 * @similars
 * @end
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 *
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 * ---------------------------------
 * | 1 ()     | 2 (abc) | 3 (def)  |
 * ---------------------------------
 * | 4 (ghi)  | 5 (jkl) | 6 (mno)  |
 * ---------------------------------
 * | 7 (pqrs) | 8 (tuv) | 9 (wxyz) |
 * ---------------------------------
 * |          | 0 ()    |          |
 * ---------------------------------
 *
 * 示例:
 *
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 * 说明: 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 *
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // 输入空数据 '' 或空数组 [] 时
  if (digits.length === 0) return [];

  let phones = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  // 存储最终结果
  let result = [];
  // 存储回溯过程中的临时结果
  let current = [];

  let combination = (digits, index) => {
    // 当临时数组存入 digits.length 个数据时，递归返回
    if (index === digits.length) {
      result.push(current.join(""));
      return;
    }

    let letters = phones[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      current.push(letters[i]);
      combination(digits, index + 1);
      // 开始回溯
      current.pop();
    }
  };
  combination(digits, 0);

  return result;
};
// @lc code=end
