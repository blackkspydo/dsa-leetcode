/**
Problem: Lowest Common Ancestor

You are given the implementation of a binary search tree (BST) node in the TypeScript file `lowestCommonAncestor.ts`. Your task is to write a function, `lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode`, that finds the lowest common ancestor (LCA) of two given nodes, `p` and `q`, in the BST.

A BST is a binary tree where, for any node, its left child contains values smaller than its own value, and its right child contains values greater than its own value. The implementation of the `TreeNode` class is as follows:

```
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
```

You need to implement the function `lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode`, which takes the root node of the BST and the two nodes, `p` and `q`, as arguments. Your function should return the LCA of `p` and `q`.

**Constraints:**

- The number of nodes in the tree is in the range `[2, 10^5]`.
- `-10^9 <= Node.val <= 10^9`
- All `Node.val` are unique.
- `p` and `q` will exist in the BST.
- `p` and `q` are different and will not be the same node.

**Example:**

Input:
```
      6
    /   \
   2     8
  / \   / \
 0   4 7   9
    / \
   3   5
```
`p = 2`, `q = 8`

Output:
```
6
```

Explanation:
The LCA of nodes `2` and `8` in the given BST is `6`.
*/ 



class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

/**
 * The function to get the LCA of two nodes
 * @param root - The root of the tree
 * @param p - Node p
 * @param q - Node q
 * @returns The LCA of p and q in BST
 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    // If the root is null or if the root equals to p or q, return the root directly
    if (root === null || root === p || root === q) return root;

    // Recursively search left and right subtrees
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    // If both subtrees contain nodes, the root is the LCA
    if (left !== null && right !== null) return root;
    // If only the left subtree contains nodes, the left node is the LCA
    else if (left !== null) return left;
    // If only the right subtree contains nodes, the right node is the LCA
    else if (right !== null) return right;

    return null;
}
