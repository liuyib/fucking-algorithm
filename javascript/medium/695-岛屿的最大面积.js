/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 *
 * https://leetcode-cn.com/problems/max-area-of-island/description/
 *
 * @level ⭐⭐
 * @tags DFS, Backtracking
 * @similars
 * @end
 *
 * 给定一个包含了一些 0 和 1 的非空二维数组 grid 。
 *
 * 一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被
 * 0（代表水）包围着。
 *
 * 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)
 *
 * 示例 1:
 *
 * [[0,0,1,0,0,0,0,1,0,0,0,0,0],
 *  ⁠[0,0,0,0,0,0,0,1,1,1,0,0,0],
 *  ⁠[0,1,1,0,1,0,0,0,0,0,0,0,0],
 *  ⁠[0,1,0,0,1,1,0,0,1,0,1,0,0],
 *  ⁠[0,1,0,0,1,1,0,0,1,1,1,0,0],
 *  ⁠[0,0,0,0,0,0,0,0,0,0,1,0,0],
 *  ⁠[0,0,0,0,0,0,0,1,1,1,0,0,0],
 *  ⁠[0,0,0,0,0,0,0,1,1,0,0,0,0]]
 *
 * 对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。
 *
 * 示例 2:
 *
 * [[0,0,0,0,0,0,0,0]]
 *
 * 对于上面这个给定的矩阵, 返回 0。
 *
 * 注意: 给定的矩阵grid 的长度和宽度都不超过 50。
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  if (!grid || !grid.length) return 0;

  const row = grid.length;
  const col = grid[0].length;

  const cache = new Set();
  let maxArea = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, dfs(i, j));
      }
    }
  }

  function dfs(i, j) {
    if (i < 0 || i >= row || j < 0 || j >= col) return 0;
    if (cache.has(`${i}-${j}`) || grid[i][j] !== 1) return 0;

    cache.add(`${i}-${j}`);

    const curArea =
      1 + dfs(i, j + 1) + dfs(i, j - 1) + dfs(i + 1, j) + dfs(i - 1, j);

    return curArea;
  }

  return maxArea;
};

// @lc code=end
