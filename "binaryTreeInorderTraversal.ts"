/**
Title: Binary Tree Inorder Traversal

Problem Statement:
Given the file name "binaryTreeInorderTraversal.ts," your task is to implement a binary tree traversal algorithm to perform an inorder traversal on a given binary tree.

Function Signature:
```typescript
function inorderTraversal(root: TreeNode | null): number[]
```

Input:
The function takes in one parameter:
- `root` (Type: TreeNode | null): The root node of a binary tree. The binary tree is structured using the following definition:

```typescript
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
```

Output:
The function should return an array of integers, containing the values of the binary tree nodes in the order they were visited during an inorder traversal.

Constraints:
- The number of nodes in the binary tree is in the range [0, 100].
- -100 <= Node.val <= 100

Note:
An inorder traversal of a binary tree is a depth-first traversal that visits the left subtree, then the node itself, and finally the right subtree.

Example:
```typescript
const tree = new TreeNode(1);
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);

inorderTraversal(tree); // [1, 3, 2]
```

Explanation:
In the above example, the given binary tree is as follows:

```
     1
      \
       2
      /
     3
```

The inorder traversal of the binary tree visits the nodes in the order: [1, 3, 2].
*/ 



class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function inorderTraversal(root: TreeNode | null): number[] {
    // Stores result of node values
    let inorderValues: number[] = [];

    // Recursive helper function
    function inorderHelper(node: TreeNode | null) {
        // Base case: null node
        if(node === null) return;

        inorderHelper(node.left); // Traverse left subtree
        inorderValues.push(node.val); // Visit node
        inorderHelper(node.right); // Traverse right subtree
    }

    // Start recursion on root
    inorderHelper(root);

    return inorderValues;
}
