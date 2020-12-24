/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * @level ⭐
 * @tags Array, Double Pointer
 * @similars T#21
 * @end
 *
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 *
 * 说明：
 *
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 *
 * 示例：
 *
 * 输入：
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 *
 * 输出：[1,2,2,3,5,6]
 *
 * 提示：
 *
 * 1. -10^9 <= nums1[i], nums2[i] <= 10^9
 * 2. nums1.length == m + n
 * 3. nums2.length == n
 *
 */

// @lc code=start
/**
 * 方法一：合并后排序
 * 代码略，合并后可用任意排序算法排序
 */

/**
 * 方法二：双指针（从前往后）
 *
 * 由于 nums1 是输出数组，有两种方法对其进行操作：
 *
 * 1. 先将 nums1 复制到其他地方，然后双指针合并即可。时间 O(M + N)，空间 O(M)，空间换时间。
 * 2. nums2 中的数据合并到 nums1 时，先将 nums1 中插入点后面的元素依次后移一位，再插入。
 *    时间 O(M * N)，空间 O(1)，时间换空间。
 *
 * 这里只实现第一种
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (n == 0) return;

  let i = 0;
  let j = 0;
  let k = 0;
  const copy1 = nums1.slice(0, m);

  while (i < m && j < n) {
    if (copy1[i] < nums2[j]) {
      nums1[k] = copy1[i];
      i++;
    } else {
      nums1[k] = nums2[j];
      j++;
    }

    k++;
  }

  for (; i < m; i++, k++) {
    nums1[k] = copy1[i];
  }
  for (; j < n; j++, k++) {
    nums1[k] = nums2[j];
  }
};

/**
 * 方法三：双指针（从后往前）
 *
 * - 从后向前比较，大的元素放在 nums1 后面
 * - 时间 O(M + N)，空间 O(1)
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }

    k--;
  }

  for (; i >= 0; i--, k--) {
    nums1[k] = nums1[i];
  }
  for (; j >= 0; j--, k--) {
    nums1[k] = nums2[j];
  }
};
// @lc code=end
