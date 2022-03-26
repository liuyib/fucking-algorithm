/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode-cn.com/problems/spiral-matrix/description/
 *
 * @level ⭐⭐
 * @tags Array, Matrix
 * @end
 *
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 *
 * 示例 1：
 *
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 *
 * 示例 2：
 *
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 *
 * 提示：
 * - m == matrix.length
 * - n == matrix[i].length
 * - 1 <= m, n <= 10
 * - -100 <= matrix[i][j] <= 100
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  var m = matrix.length;
  var n = matrix[0].length;
  var len = m * n;

  var row = 0;
  var col = 0;

  var turn = 0;
  var directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  var stack = [];
  var visited = new Map();

  while (stack.length !== len) {
    stack.push(matrix[row][col]);
    visited.set(`${row}${col}`, true);

    var nextRow = row + directions[turn][0];
    var nextCol = col + directions[turn][1];

    if (
      !(
        nextRow >= 0 &&
        nextRow < m &&
        nextCol >= 0 &&
        nextCol < n &&
        !visited.get(`${nextRow}${nextCol}`)
      )
    ) {
      turn = (turn + 1) % 4;
    }

    row += directions[turn][0];
    col += dire[turn][1];
  }

  return stack;
};
// @lc code=end
