/**
Title: Valid Parentheses

Problem Statement:
Given a string of parentheses `s` represented by a file name "validParens.ts", you need to determine if the parentheses in the input string are valid or not.

The rules for valid parentheses are as follows:

1. Each open parenthesis must have a corresponding closing parenthesis of the same type. For example, "( )" or "{ }" are valid pairs, but "( ]" or "{ )" are invalid pairs.
2. The parentheses must be closed in the correct order. For example, "{ [ ] }" is valid, but "{ [ } ]" is not.

You need to implement a function `isValid(s: string): boolean` that returns `true` if the input string contains valid parentheses and `false` otherwise.

Function Signature:
```typescript
function isValid(s: string): boolean {
}
```

Input:
The input parameter `s` represents a string of parentheses.

Output:
The function should return a boolean value - `true` if the parentheses are valid, and `false` otherwise.

Constraints:
- The input string `s` consists only of parentheses characters: `(`, `)`, `{`, `}`, `[`, `]`.
- 1 <= |s| <= 104, where |s| is the length of the string `s`.

Examples:
```typescript
isValid("()") => true
isValid("()[]{}") => true
isValid("(]") => false
isValid("([)]") => false
isValid("{[]}") => true
```

Note:
In the first example, the string contains only one pair of parentheses, which are valid.
In the second example, the string contains three pairs of parentheses, and all of them are valid.
In the third example, the string contains one pair of parentheses, but they are not valid since the closing parenthesis is of a different type than the opening parenthesis.
In the fourth example, the string contains one pair of parentheses, but they are not valid since the closing parenthesis is not in the correct order.
In the fifth example, the string contains one pair of parentheses, and they are valid since the opening and closing parentheses are of the same type and in the correct order.
*/ 



function isValid(s: string): boolean {
    // Initializing a stack to hold opening parentheses
    let stack: string[] = []; 

    // Defining the valid parentheses pairs
    let parenthesesMap = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    // Iterating through the string of parentheses
    for (let i = 0; i < s.length; i++) {
        // If the character is an opening bracket, push it to the stack
        if (parenthesesMap[s[i]]) {
            stack.push(s[i]);
        } 
        // If the character is a closing bracket and the last opening bracket
        // from the stack does not correspond to it, the parentheses are not valid
        else if (stack.length === 0 || s[i] !== parenthesesMap[stack.pop()]) {
            return false;
        }
    }

    // If there are still opening parentheses left in the stack, the parentheses are not valid
    return stack.length === 0;
}

