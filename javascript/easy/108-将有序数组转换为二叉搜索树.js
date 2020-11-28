/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 *
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 * @level ⭐
 * @tags 'Array' 'BST' 'DFS'
 * @similars
 * @end
 *
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 *
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 *
 * 示例:
 *
 * 给定有序数组: [-10,-3,0,5,9],
 *
 * 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
 *
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 自己的思路：（第一版）
 * 1. 取数组中间的元素作为根节点，然后将数组一分为二
 * 2. 左边的子数组作为左子树，递归遍历
 * 3. 右边的子数组作为右子树，递归遍历
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;

  const dfs = function (nums) {
    const len = nums.length;
    const mid = Math.floor(len / 2);
    const root = new TreeNode(nums[mid]);

    if (nums[mid] === undefined) return null;

    root.left = dfs(nums.slice(0, mid));
    root.right = dfs(nums.slice(mid + 1));

    return root;
  };

  return dfs(nums);
};

/**
 * 第二版：用双指针标记下标，来优化对数组的 slice 操作。
 */
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;

  const dfs = function (left, right) {
    if (left > right) return null;

    const mid = Math.floor((right + left) / 2);
    const root = new TreeNode(nums[mid]);

    root.left = dfs(left, mid - 1);
    root.right = dfs(mid + 1, right);

    return root;
  };

  return dfs(0, nums.length - 1);
};

// console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
// @lc code=end
