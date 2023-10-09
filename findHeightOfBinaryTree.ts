/**
Problem: Height of Binary Tree

You are given a TypeScript file `findHeightOfBinaryTree.ts` that contains a class `TreeNode`. The `TreeNode` class represents a node in a binary tree and has the following properties and methods:

Properties:
- `value`: represents the value of the node.
- `left`: represents the left child of the node.
- `right`: represents the right child of the node.

Methods:
- `addChild(value: number)`: takes a number and adds a new node with the given value as the child of the current node. If the current node already has a left child, the method assigns the new node as the right child of the current node.

You need to implement the `findHeight` function, which takes the root node of a binary tree and returns the height of the binary tree.

The height of a binary tree is defined as the number of edges in the longest path from the root node to any leaf node. If the binary tree is empty (i.e., the root node is null), the height is 0.

You need to write the implementation of the `findHeight` function in the `findHeightOfBinaryTree.ts` file so that the function returns the correct height of the given binary tree.

Example:
```
// Input
const root = new TreeNode(1);
root.addChild(2);
root.left.addChild(3);
root.right.addChild(4);
root.right.addChild(5);
root.left.left.addChild(6);
root.left.right.addChild(7);
root.right.right.addChild(8);

console.log(findHeight(root));
// Output: 3
```

Note:
In the above example, the binary tree looks like this:

```
       1
     /   \
    2     4
   / \   / \
  3   7 5   8
 /
6
```

The longest path from the root node to a leaf node is the path `1 -> 2 -> 3 -> 6`. This path has a length of 3, so the height of the binary tree is 3.
*/ 



// A class that represents a node in a binary tree.
class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // Method that adds a child to the current node.
    addChild(value: number) {
        if (this.left === null) {
            this.left = new TreeNode(value);
        } else if (this.right === null) {
            this.right = new TreeNode(value);
        }
    }
}

// Function that calculates the height of a binary tree.
function findHeight(root: TreeNode | null): number {
    // If the root node is null, the height of the binary tree is 0.
    if (root === null) {
        return 0;
    } else {
        // Calculate the height of the left and the right subtree
        const leftHeight = findHeight(root.left);
        const rightHeight = findHeight(root.right);

        // The height of the current node is the max of the heights of its left and right subtrees + 1 (for the edge that connects the current node to its parent).
        return Math.max(leftHeight, rightHeight) + 1;
    }
}
