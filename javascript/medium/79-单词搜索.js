/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * 作者：liuyib <https://github.com/liuyib>
 * 日期：2020-08-04
 *
 * [79] 单词搜索
 *
 * https://leetcode-cn.com/problems/word-search/description/
 *
 * @tags 'Backtracking' '看的题解'
 *
 * 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
 *
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 *
 * 示例:
 *
 * board =
 * [
 * ⁠ ['A','B','C','E'],
 * ⁠ ['S','F','C','S'],
 * ⁠ ['A','D','E','E']
 * ]
 *
 * 给定 word = "ABCCED", 返回 true
 * 给定 word = "SEE", 返回 true
 * 给定 word = "ABCB", 返回 false
 *
 * 提示：
 *
 * board 和 word 中只包含大写和小写英文字母。
 * 1 <= board.length    <= 200
 * 1 <= board[i].length <= 200
 * 1 <= word.length     <= 10^3
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (board.length === 0) return false;
  if (word.length === 0) return true;

  const row = board.length;
  const col = board[0].length;
  // 标记数组，用于标记搜索过的位置
  const marked = [...Array(row)].map(() => Array(col).fill(false));

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  return false;

  // DFS（深度优先搜索）
  function dfs(i, j, index) {
    // 越界、标记过的
    if (i < 0 || i >= row || j < 0 || j >= col || marked[i][j]) return false;
    // 不符合的字母，直接返回
    if (board[i][j] !== word[index]) return false;
    // 到这个 if 语句时，有 board[i][j] === word[index]
    // 因此，此处只要判断到了最后一个字母的索引，即可返回 true
    if (index === word.length - 1) return true;

    // 标记
    marked[i][j] = true;
    // 对 “右、左、下、上” 四个方向分别 DFS 查找
    const result =
      dfs(i, j + 1, index + 1) ||
      dfs(i, j - 1, index + 1) ||
      dfs(i + 1, j, index + 1) ||
      dfs(i - 1, j, index + 1);
    // 任意一个方向找到符合条件的字母，即可返回 true
    if (result) return true;

    // 四个方向都未找到，回溯
    marked[i][j] = false;
    return false;
  }
};
// @lc code=end
