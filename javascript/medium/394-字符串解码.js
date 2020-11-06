/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 *
 * https://leetcode-cn.com/problems/decode-string/description/
 *
 * @tags 'DFS' 'Stack'
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
 */

// @lc code=start

/**
 * 题解思路 2：
 * 递归查找，遇到 [ 是递归的开始条件，遇到 ] 是递归的终止条件
 */
var decodeString = function (s) {
  var dfs = (s, i) => {
    let multi = 0;
    let res = "";

    while (i < s.length) {
      if (s[i] >= "0" && s[i] <= "9") {
        multi = multi * 10 + parseInt(s[i]);
      } else if (s[i] === "[") {
        const temp = dfs(s, i + 1);

        while (multi > 0) {
          res += temp.res;
          multi -= 1;
        }
        i = temp.i;
      } else if (s[i] === "]") {
        return { res, i };
      } else {
        res += s[i];
      }
      i += 1;
    }

    return res;
  };

  return dfs(s, 0);
};

// /**
//  * 题解思路 1：
//  * 用栈来保存子问题的状态
//  * 1. 迭代保存数字，表示倍数
//  * 2. 遇到 [ 证明是子问题，将 "倍数" 和 "当前的子串" 作为子状态入栈
//  * 3. 遇到 ] 证明子问题结束，将 "当前子串" 复制 "上个状态的倍数" 次，并与 "上个状态的子串" 相加，此时一个子问题处理完成
//  * 4. 除了上述条件外，遇到的只可能是字母，直接相加到当前子串后
//  */
// var decodeString = function (s) {
//   const stack = [];

//   function isDigit(val) {
//     return val >= "0" && val <= "9";
//   }

//   let multi = 0;
//   let res = "";

//   for (let i = 0; i < s.length; i++) {
//     if (isDigit(s[i])) {
//       multi = multi * 10 + parseInt(s[i]);
//     } else if (s[i] === "[") {
//       stack.push({ multi: parseInt(multi), res });
//       multi = 0;
//       res = "";
//     } else if (s[i] === "]") {
//       const top = stack.pop();
//       res = top.res + res.repeat(top.multi);
//     } else {
//       res += s[i];
//     }
//   }

//   return res;
// };

// /**
//  * 自己的思路：
//  * 用 i 记录最后遇到的 [ 的位置，用 j 记录第一次遇到的 ] 的位置，然后第一次遇到 ] 时，
//  * 就可以通过两个指针获取到括号中的字符串和括号前面的数字，相乘得到一个结果，然后替换主串中处理过的部分
//  * @param {string} s
//  * @return {string}
//  */
// var decodeString = function (s) {
//   let l = 0;
//   let r = 0;

//   for (let i = 0; i < s.length; i++) {
//     let temp = "";

//     if (s[i] === "[") {
//       l = i;
//     }
//     if (s[i] === "]") {
//       r = i;

//       let find = l - 1;
//       let num = "";

//       while (/[0-9]/.test(s[find])) {
//         num = s[find] + num;
//         find -= 1;
//       }

//       num = parseInt(num);

//       let sub = s.substring(l + 1, r);

//       while (num > 0) {
//         temp += sub;
//         num -= 1;
//       }

//       s = s.substring(0, find + 1) + temp + s.substring(r + 1);
//       s = decodeString(s);

//       break;
//     }
//   }

//   return s;
// };

// console.log(`decodeString("3[a]2[bc]")`, decodeString("3[a]2[bc]"));
// console.log(`decodeString("3[a2[c]]")`, decodeString("3[a2[c]]"));
// console.log(`"100[leetcode]"`, decodeString("100[leetcode]"));
// @lc code=end
