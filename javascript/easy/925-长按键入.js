/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 *
 * https://leetcode-cn.com/problems/long-pressed-name/description/
 *
 * @level ⭐
 * @tags 'String' 'Double Pointer'
 * @similars
 * @end
 *
 * 你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。
 *
 * 你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。
 *
 * 示例 1：
 *
 * 输入：name = "alex", typed = "aaleex"
 * 输出：true
 * 解释：'alex' 中的 'a' 和 'e' 被长按。
 *
 * 示例 2：
 *
 * 输入：name = "saeed", typed = "ssaaedd"
 * 输出：false
 * 解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。
 *
 * 示例 3：
 *
 * 输入：name = "leelee", typed = "lleeelee"
 * 输出：true
 * 示例 4：
 *
 * 输入：name = "laiden", typed = "laiden"
 * 输出：true
 * 解释：长按名字中的字符并不是必要的。
 *
 * 提示：
 *
 * 1. name.length <= 1000
 * 2. typed.length <= 1000
 * 3. name 和 typed 的字符都是小写字母
 *
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  if (name === typed) return true;

  const nLen = name.length;
  const tLen = typed.length;

  if (name[0] !== typed[0] || name[nLen - 1] !== typed[tLen - 1]) return false;

  let m = 0;
  let n = 0;

  while (m < nLen && n < tLen) {
    if (name[m] === typed[n]) {
      m += 1;
      n += 1;
    } else if (n > 0 && typed[n] === typed[n - 1]) {
      n += 1;
    } else {
      return false;
    }
  }

  return true;
};
// @lc code=end
