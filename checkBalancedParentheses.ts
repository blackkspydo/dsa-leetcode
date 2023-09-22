/**
Title: Balanced Parentheses Checker

Problem Description:
You are given a file named `checkBalancedParentheses.ts` containing a TypeScript function `checkBalancedParentheses` as input. Your task is to implement the function that will determine whether the parentheses in a given string are balanced or not.

The `checkBalancedParentheses` function takes a single string parameter `inputStr`. The string `inputStr` may contain multiple types of parentheses, including `(`, `)`, `{`, `}`, `[`,`]`. It may also contain other characters besides parentheses, which are irrelevant for this problem.

The function should return a boolean value: `true` if the parentheses in the given string are balanced, and `false` otherwise.

A string is considered to have balanced parentheses if:

- For every opening parentheses, there is a corresponding closing parentheses of the same type.
- The closing parentheses appear in the correct order relative to the opening parentheses.
- There are no unmatched parentheses.

For example, given the input string `"({})([])()"`, the function should return `true` because the parentheses are balanced. On the other hand, if the input string is `"({))(]"` or `"({)()}"`, the function should return `false` because the parentheses are not balanced.

You need to write the code for the `checkBalancedParentheses` function in the provided `checkBalancedParentheses.ts` file.

Constraints:
- The input string `inputStr` consists of lowercase and uppercase alphabets, digits, and parentheses.
- The length of `inputStr` is at most 10^5.

Note:
- You are allowed to use additional data structures or helper functions if needed.
*/ 



// TypeScript function to check balanced parentheses in inputStr
function checkBalancedParentheses(inputStr: string): boolean {
    // Create a stack to push opening parentheses and pop when closing parentheses are encountered
    let stack: string[] = [];
    
    // Create a map to associate each closing parenthesis with its corresponding opening parenthesis
    let map: { [key: string]: string } = {
        ")": "(",
        "}": "{",
        "]": "["
    };
    
    // Iterate through every character in inputStr
    for(let i=0; i<inputStr.length; i++){
        // if character is an opening parenthesis, push it into the stack
        if(inputStr[i] === "(" || inputStr[i] === "{" || inputStr[i] === "[") {
            stack.push(inputStr[i]);
        }
        // if character is a closing parenthesis 
        else if(inputStr[i] === ")" || inputStr[i] === "}" || inputStr[i] === "]") {
            // if stack is empty, then there isn't a matching opening parenthesis for this closing parenthesis, hence return false
            if(stack.length === 0) {
                return false
            }
            /* If the character is not the same type as the opening parenthesis at the top of the stack,
            then the parenthesis is not balanced, hence return false */
            else if(stack[stack.length - 1] !== map[inputStr[i]]) {
                return false;
            }
            // If there is a match, pop the opening parenthesis from the stack
            else {
                stack.pop();
            }
        }
    }

    // If the stack is empty after the iteration, then the parentheses are balanced, hence return true
    return stack.length === 0;
}
