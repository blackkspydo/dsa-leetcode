/**
Title: Anagram Detection

Description:
You are given two strings, `s1` and `s2`, both consisting of lowercase alphabets only. Your task is to write a function called `anagramDetection` in `anagramDetection.ts` that determines if `s1` is an anagram of `s2`.

An anagram is a word or phrase formed by rearranging the letters of another word or phrase. In other words, two strings are anagrams if they contain the same characters in a different order.

The function `anagramDetection` should return a boolean value: 
- `true` if `s1` is an anagram of `s2`
- `false` otherwise.

Constraints:
- The length of `s1` and `s2` will be between 1 and 5,000 (inclusive).
- The strings will consist of lowercase English letters only.

Example:
```typescript
anagramDetection("hello", "leloh"); // Expected: true
anagramDetection("listen", "silent"); // Expected: true
anagramDetection("hello", "world"); // Expected: false
```

Note:
- In the first example, we can rearrange the letters of `leloh` to obtain `hello`, so `s1` is an anagram of `s2`.
- In the second example, we can rearrange the letters of `silent` to obtain `listen`, so `s1` is an anagram of `s2`.
- In the third example, it is not possible to rearrange the letters of `world` to obtain `hello`, so `s1` is not an anagram of `s2`.
*/ 



/**
 * Determines whether string s1 is an anagram of string s2
 * @param s1 - First string
 * @param s2 - Second string
 * @returns boolean - true if s1 is an anagram of s2, false otherwise
 */
function anagramDetection(s1: string, s2: string): boolean {
    // Sort characters of both strings and then compare
    return s1.split('').sort().join('') === s2.split('').sort().join('');
}

// Testing the function
console.log(anagramDetection("hello", "leloh")); // Expected: true
console.log(anagramDetection("listen", "silent")); // Expected: true
console.log(anagramDetection("hello", "world")); // Expected: false
