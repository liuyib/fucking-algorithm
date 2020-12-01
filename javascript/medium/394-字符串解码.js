/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 *
 * https://leetcode-cn.com/problems/decode-string/description/
 *
 * @level ⭐⭐
 * @tags Stack, DFS
 * @similars
 * @end
 *
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 *
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 *
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 *
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 *
 * 示例 1：
 *
 * 输入：s = "3[a]2[bc]"
 * 输出："aaabcbc"
 *
 * 示例 2：
 *
 * 输入：s = "3[a2[c]]"
 * 输出："accaccacc"
 *
 * 示例 3：
 *
 * 输入：s = "2[abc]3[cd]ef"
 * 输出："abcabccdcdcdef"
 *
 * 示例 4：
 *
 * 输入：s = "abc3[cd]xyz"
 * 输出："abccdcdcdxyz"
 *
 */

// @lc code=start
/**
 * 题解思路 1：
 * 用栈来保存子问题的状态
 * 1. 迭代保存数字，表示倍数
 * 2. 遇到 [ 证明是子问题，将 "倍数" 和 "当前的子串" 作为子状态入栈
 * 3. 遇到 ] 证明子问题结束，将 "当前子串" 复制 "上个状态的倍数" 次，并与 "上个状态的子串" 相加，此时一个子问题处理完成
 * 4. 除了上述条件外，遇到的只可能是字母，直接相加到当前子串后
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];

  function isDigit(val) {
    return val >= '0' && val <= '9';
  }

  let num = 0;
  let res = '';

  for (let i = 0; i < s.length; i++) {
    if (isDigit(s[i])) {
      num = num * 10 + parseInt(s[i]);
    } else if (s[i] === '[') {
      stack.push({ num, res });
      num = 0;
      res = '';
    } else if (s[i] === ']') {
      const top = stack.pop();
      res = top.res + res.repeat(top.num);
    } else {
      res += s[i];
    }
  }

  return res;
};

/**
 * 题解思路 2：
 * 递归查找，遇到 [ 是递归的开始条件，遇到 ] 是递归的终止条件
 */
var decodeString = function (s) {
  const len = s.length;

  var dfs = (i, num, str) => {
    while (i < len) {
      if (s[i] >= '0' && s[i] <= '9') {
        num = num * 10 + parseInt(s[i]);
      } else if (s[i] === '[') {
        const sub = dfs(i + 1, 0, '');
        str += sub.str.repeat(num);
        i = sub.i;
        num = 0;
      } else if (s[i] === ']') {
        return { i, str };
      } else {
        str += s[i];
      }

      i++;
    }

    return str;
  };

  return dfs(0, 0, '');
};

console.log(`decodeString("3[a]2[bc]")`, decodeString('3[a]2[bc]'));
console.log(`decodeString("3[a2[c]]")`, decodeString('3[a2[c]]'));
console.log(`"10[leetcode]"`, decodeString('10[leetcode]'));
// @lc code=end
