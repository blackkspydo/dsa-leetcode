/*
Problem Statement:
Write a function to find the maximum depth of a binary tree. The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

A binary tree is a tree structure in which each node has at most two children, referred to as the left child and the right child.
A binary tree node is defined as: 
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

Example:
Input: root = [3,9,20,null,null,15,7]
Output: 3
Explanation: Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

Return its depth is 3.
*/

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function findMaxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  let leftDepth = findMaxDepth(root.left);
  let rightDepth = findMaxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1; 
}
