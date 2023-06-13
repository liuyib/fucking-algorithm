/*
 * @lc app=leetcode.cn id=886 lang=javascript
 *
 * [886] 可能的二分法
 *
 * https://leetcode.cn/problems/possible-bipartition/description/
 *
 * algorithms
 * Medium (51.99%)
 * Likes:    376
 * Dislikes: 0
 * Total Accepted:    48.1K
 * Total Submissions: 92.4K
 * Testcase Example:  '4\n[[1,2],[1,3],[2,4]]'
 *
 * 给定一组 n 人（编号为 1, 2, ..., n）， 我们想把每个人分进任意大小的两组。每个人都可能不喜欢其他人，那么他们不应该属于同一组。
 *
 * 给定整数 n 和数组 dislikes ，其中 dislikes[i] = [ai, bi] ，表示不允许将编号为 ai 和
 * bi的人归入同一组。当可以用这种方法将所有人分进两组时，返回 true；否则返回 false。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 4, dislikes = [[1,2],[1,3],[2,4]]
 * 输出：true
 * 解释：group1 [1,4], group2 [2,3]
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 3, dislikes = [[1,2],[1,3],[2,3]]
 * 输出：false
 *
 *
 * 示例 3：
 *
 *
 * 输入：n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 2000
 * 0 <= dislikes.length <= 10^4
 * dislikes[i].length == 2
 * 1 <= dislikes[i][j] <= n
 * ai < bi
 * dislikes 中每一组都 不同
 *
 *
 *
 *
 */

// @lc code=start
class UF {
  parent = [];
  rank = [];

  constructor(size) {
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.rank[i] = 1;
    }
  }

  find(x) {
    if (x !== this.parent[x]) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }

  union(x, y) {
    let xr = this.find(x);
    let yr = this.find(y);

    if (xr === yr) return;
    if (this.rank[xr] < this.rank[yr]) [xr, yr] = [yr, xr];

    this.parent[yr] = xr;
    this.rank[xr] += this.rank[yr];
  }

  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }
}

/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  const uf = new UF(n + 1);
  const dis = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    dis[i] = [];
  }

  for (let i = 0; i < dislikes.length; i++) {
    const [x, y] = dislikes[i];
    dis[x].push(y);
    dis[y].push(x);
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < dis[i].length; j++) {
      uf.union(dis[i][0], dis[i][j]);

      if (uf.isConnected(i, dis[i][j])) return false;
    }
  }

  return true;
};
// @lc code=end
