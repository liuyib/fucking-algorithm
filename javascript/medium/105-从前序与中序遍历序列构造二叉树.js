/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * @level ⭐⭐
 * @tags Array, Binary Tree, Recursion
 * @similars
 * @end
 *
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 *
 * 注意:
 * 你可以假设树中没有重复的元素。
 *
 * 例如，给出
 *
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 *
 * 返回如下的二叉树：
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 */

// @lc code=start
// 第一版：直接递归，不过每次循环都要用 slice 对数组进行切割，性能不好
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;

  const node = preorder[0];
  const root = new TreeNode(node);
  const pos = inorder.indexOf(node);

  root.left = buildTree(preorder.slice(1, 1 + pos), inorder.slice(0, pos));
  root.right = buildTree(preorder.slice(1 + pos), inorder.slice(pos + 1));

  return root;
};

// 第二版：在第一版的基础上优化掉了 slice 操作，现在每次 indexOf 查找根节点浪费性能，还可以优化
var buildTree = function (preorder, inorder) {
  const find = function (pStart, pEnd, iStart, iEnd) {
    if (pStart > pEnd || iStart > iEnd) return null;

    const node = preorder[pStart];
    const root = new TreeNode(node);
    const pos = inorder.indexOf(node);
    const leftNum = pos - iStart;

    root.left = find(pStart + 1, pStart + leftNum, iStart, pos - 1);
    root.right = find(pStart + 1 + leftNum, pEnd, pos + 1, iEnd);

    return root;
  };

  return find(0, preorder.length - 1, 0, inorder.length - 1);
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 第三版（最终版本）：用对象（键值对）缓存后续要找的根节点的索引
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  const indexCaches = {};
  for (let i = 0; i < inorder.length; i++) {
    indexCaches[inorder[i]] = i;
  }

  const find = function (pStart, pEnd, iStart, iEnd) {
    if (pStart > pEnd || iStart > iEnd) return null;

    const node = preorder[pStart];
    const root = new TreeNode(node);
    const pos = indexCaches[node];
    const leftNum = pos - iStart;

    root.left = find(pStart + 1, pStart + leftNum, iStart, pos - 1);
    root.right = find(pStart + 1 + leftNum, pEnd, pos + 1, iEnd);

    return root;
  };

  return find(0, preorder.length - 1, 0, inorder.length - 1);
};
// @lc code=end
