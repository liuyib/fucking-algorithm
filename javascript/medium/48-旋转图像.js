/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 *
 * https://leetcode-cn.com/problems/rotate-image/description/
 *
 * @level ⭐⭐
 * @tags Array, Recursion, Math, 💯
 * @similars
 * @end
 *
 * 给定一个 n × n 的二维矩阵表示一个图像。
 *
 * 将图像顺时针旋转 90 度。
 *
 * 说明：
 *
 * 你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。
 *
 * 示例 1:
 *
 * 给定 matrix =
 * [
 * ⁠ [1,2,3],
 * ⁠ [4,5,6],
 * ⁠ [7,8,9]
 * ],
 *
 * 原地旋转输入矩阵，使其变为:
 * [
 * ⁠ [7,4,1],
 * ⁠ [8,5,2],
 * ⁠ [9,6,3]
 * ]
 *
 * 示例 2:
 *
 * 给定 matrix =
 * [
 * ⁠ [ 5, 1, 9,11],
 * ⁠ [ 2, 4, 8,10],
 * ⁠ [13, 3, 6, 7],
 * ⁠ [15,14,12,16]
 * ],
 *
 * 原地旋转输入矩阵，使其变为:
 * [
 * ⁠ [15,13, 2, 5],
 * ⁠ [14, 3, 4, 1],
 * ⁠ [12, 6, 8, 9],
 * ⁠ [16, 7,10,11]
 * ]
 *
 */

// @lc code=start
/**
 * 方法一：直接旋转（递归。找旋转元素的坐标规律）
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  if (!matrix || !matrix.length || matrix.length !== matrix[0].length) return;

  const cache = new Set();
  const len = matrix.length;

  /**
   * 00011
   * 00011
   * 22311
   * 22444
   * 22444
   *
   * 如图上图所示，只需要遍历 0 所表示的区域的元素即可，不用遍历整个数组
   */
  for (let i = 0; i < Math.floor(len / 2); i++) {
    for (let j = 0; j < Math.floor((len + 1) / 2); j++) {
      rotateCycle(matrix, i, j, matrix[i][j]);
    }
  }

  /**
   * [
   *   [ 1, 2, 3],
   *   [ 4, 5, 6],
   *   [ 7, 8, 9]
   * ]
   *
   * 旋转规律如下所示：
   *                            i   j  ----→ j  n-i
   *               i   j  ----→ j  n-i       |   |
   *   i  j -----→ j  n-i       |   |        |   |
   *   ↓  ↓        ↓   ↓        ↓   ↓        ↓   ↓
   * ( 0, 0 ) => ( 0,  2 ) => ( 2,  2 ) => ( 2,  0 )
   *     1    =>     3     =>     9     =>     7
   */

  function rotateCycle(arr, i, j, last) {
    if (cache.has(`${i}-${j}`)) return;

    let nextVal = null;
    const next = { i: j, j: len - 1 - i };
    nextVal = matrix[next.i][next.j];
    matrix[next.i][next.j] = last;
    cache.add(`${i}-${j}`);

    rotateCycle(arr, next.i, next.j, nextVal);
  }
};

/**
 * 方法二：利用旋转规律
 * 规律 1. 顺时针旋转 90° == 沿『左下-右上』对角线翻转 + 沿水平中线上下翻转
 * 规律 2. 顺时针旋转 90° == 沿『左上-右下』对角线翻转 + 沿垂直中线左右翻转
 * 这里实现『规律 2』，较简单些
 */
var rotate = function (matrix) {
  if (!matrix || !matrix.length || matrix.length !== matrix[0].length) return;

  const len = matrix.length;

  // 沿『左上-右下』对角线翻转
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // 沿垂直中线左右翻转
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len >> 1; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][len - 1 - j];
      matrix[i][len - 1 - j] = temp;
    }
  }
};
// @lc code=end
