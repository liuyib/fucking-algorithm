/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 *
 * https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists/description/
 *
 * @level ⭐
 * @tags Array, Hash Table
 * @similars
 * @end
 *
 * 假设Andy和Doris想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。
 *
 * 你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设总是存在一个答案。
 *
 * 示例 1:
 *
 * 输入:
 * ["Shogun", "Tapioca Express", "Burger King", "KFC"]
 * ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse",
 * "Shogun"]
 * 输出: ["Shogun"]
 * 解释: 他们唯一共同喜爱的餐厅是“Shogun”。
 *
 * 示例 2:
 *
 * 输入:
 * ["Shogun", "Tapioca Express", "Burger King", "KFC"]
 * ["KFC", "Shogun", "Burger King"]
 * 输出: ["Shogun"]
 * 解释: 他们共同喜爱且具有最小索引和的餐厅是“Shogun”，它有最小的索引和1(0+1)。
 *
 * 提示:
 *
 * 1. 两个列表的长度范围都在 [1, 1000]内。
 * 2. 两个列表中的字符串的长度将在[1，30]的范围内。
 * 3. 下标从0开始，到列表的长度减1。
 * 4. 两个列表都没有重复的元素。
 *
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const map = new Map();
  const ret = [];

  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }

  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < list2.length; i++) {
    if (map.has(list2[i])) {
      const curIndex = map.get(list2[i]) + i;

      if (curIndex < min) {
        ret.length = 0;
        min = curIndex;
      }

      if (curIndex <= min) {
        ret.push(list2[i]);
      }
    }
  }

  return ret;
};

const temp1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
const temp2 = ["KFC", "Shogun", "Burger King"];
console.log(
  `findRestaurant(temp1, temp2): `,
  findRestaurant(temp1, temp2),
  `should: ["Shogun"]`
);
// @lc code=end
