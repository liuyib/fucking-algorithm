/*
 * @lc app=leetcode.cn id=769 lang=javascript
 *
 * [769] 最多能完成排序的块
 *
 * https://leetcode-cn.com/problems/max-chunks-to-make-sorted/description/
 *
 * @level ⭐⭐
 * @tags Stack, 单调栈
 * @similars
 * @end
 *
 * 数组 arr 是 [0, 1, ..., arr.length - 1] 的一种排列，
 * 我们将这个数组分割成几个“块”，并将这些块分别进行排序。
 * 之后再连接起来，使得连接的结果和按升序排序后的原数组相同。
 *
 * 我们最多能将数组分成多少块？
 *
 * 示例 1:
 *
 * 输入: arr = [4,3,2,1,0]
 * 输出: 1
 * 解释:
 * 将数组分成2块或者更多块，都无法得到所需的结果。
 * 例如，分成 [4, 3], [2, 1, 0] 的结果是 [3, 4, 0, 1, 2]，这不是有序的数组。
 *
 * 示例 2:
 *
 * 输入: arr = [1,0,2,3,4]
 * 输出: 4
 * 解释:
 * 我们可以把它分成两块，例如 [1, 0], [2, 3, 4]。
 * 然而，分成 [1, 0], [2], [3], [4] 可以得到最多的块数。
 *
 * 注意:
 *
 * arr 的长度在 [1, 10] 之间。
 * arr[i] 是 [0, 1, ..., arr.length - 1]的一种排列。
 *
 */

// @lc code=start
/**
 * 题解思路：单调栈（单调递减），将当前段最大的元素保存起来。具体操作如下：
 * 1. 如果栈空 或 下一个元素大于栈顶元素，直接进栈
 * 2. 否则，如果下一个元素小于栈顶元素，则栈顶元素出栈并暂存
 * 3. 然后循环遍历，只要下一个元素小于栈顶元素，就出栈。直到下一个元素大于栈顶元素
 * 4. 将暂存的那个栈顶元素入栈
 * 5. 循环结束后，栈的长度即为区间的个数（栈中的每个元素，就是其所在区间的最大值）。
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  var Stack = function () {
    this.stack = [];
  };

  Stack.prototype.empty = function () {
    return this.stack.length === 0;
  };

  Stack.prototype.size = function () {
    return this.stack.length;
  };

  Stack.prototype.push = function (e) {
    this.stack.push(e);
  };

  Stack.prototype.pop = function () {
    return this.stack.pop();
  };

  Stack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
  };

  const len = arr.length;
  const stack = new Stack();

  for (let i = 0; i < len; i++) {
    if (stack.empty() || arr[i] > stack.top()) {
      stack.push(arr[i]);
    } else {
      const top = stack.pop();

      while (!stack.empty() && arr[i] < stack.top()) {
        stack.pop();
      }

      stack.push(top);
    }
  }

  return stack.size();
};

console.log(maxChunksToSorted([1, 0, 2, 3, 4]), 4);
console.log(maxChunksToSorted([0, 2, 1]), 2);

/**
 * 题解思路：暴力解法（并不暴力）
 * 这一题直接暴力遍历，听起来是笨方法，其实是最优解。
 */
var maxChunksToSorted = function (arr) {
  let count = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);

    if (max === i) {
      count++;
    }
  }

  return count;
};
// @lc code=end
