/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 *
 * https://leetcode-cn.com/problems/sort-colors/description/
 *
 * @level ⭐⭐
 * @tags Array, 双路快排, 三路快排, 💯
 * @similars
 * @end
 *
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 *
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 *
 * 注意:
 * 不能使用代码库中的排序函数来解决这道题。
 *
 * 示例:
 *
 * 输入: [2,0,2,1,1,0]
 * 输出: [0,0,1,1,2,2]
 *
 * 进阶：
 *
 * 一个直观的解决方案是使用计数排序的两趟扫描算法。
 * 首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
 * 你能想出一个仅使用常数空间的一趟扫描算法吗？
 *
 */

// @lc code=start
/**
 * 思路一：双路快排
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function partition(arr, l, r) {
    const rnd = l + Math.floor(Math.random() * (r - l + 1));
    swap(arr, l, rnd);

    let i = l + 1;
    let j = r;

    while (true) {
      while (i <= j && arr[i] < arr[l]) i++;
      while (i <= j && arr[j] > arr[l]) j--;

      if (i >= j) break;

      swap(arr, i, j);
      i++;
      j--;
    }

    swap(arr, l, j);

    return j;
  }

  function quickSort(arr, l, r) {
    if (l >= r) return;

    const p = partition(arr, l, r);
    quickSort(arr, l, p - 1);
    quickSort(arr, p + 1, r);
  }

  quickSort(nums, 0, nums.length - 1);

  return nums;
};

/**
 * 思路二：三路快排
 */
var sortColors = function (nums) {
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function partition(arr, l, r) {
    const rnd = l + Math.floor(Math.random() * (r - l + 1));
    swap(arr, l, rnd);

    /**
     * 循环不变量：
     *  - arr[l + 1 , lt   ]  < v
     *  - arr[lt + 1, i - 1] == v
     *  - arr[gt    , r    ]  > v
     *
     *  终止条件：i === gt
     */
    let lt = l;
    let gt = r + 1;
    let i = l + 1;

    while (i < gt) {
      if (arr[i] < arr[l]) {
        lt++;
        swap(arr, i, lt);
        i++;
      } else if (arr[i] > arr[l]) {
        gt--;
        swap(arr, i, gt);
      } else {
        i++;
      }
    }

    swap(arr, l, lt);

    return { lt: lt - 1, gt };
  }

  function quickSort(arr, l, r) {
    if (l >= r) return;

    const { lt, gt } = partition(arr, l, r);
    quickSort(arr, l, lt);
    quickSort(arr, gt, r);
  }

  quickSort(nums, 0, nums.length - 1);

  return nums;
};
// @lc code=end
