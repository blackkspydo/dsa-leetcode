/**
Problem: Calculate Fibonacci Series

Description: 

You are given a file named "calculateFibonacciSeries.ts" containing a TypeScript class with a method called "calculateFibonacciSeries". Your task is to implement this method to return an array that represents the Fibonacci series up to a given number.

The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones, starting from 0 and 1. The series begins as follows:
0, 1, 1, 2, 3, 5, 8, 13, 21, ...

The method "calculateFibonacciSeries" should take in a parameter "n" representing the maximum number in the series, and return an array with all the Fibonacci numbers up to and including the number "n". 

Your implementation should handle the following edge cases:
- If "n" is less than 0, return an empty array.
- If "n" is equal to 0, return [0].
- If "n" is equal to 1, return [0, 1].

Function Signature: 
```typescript
calculateFibonacciSeries(n: number): number[]
```

Example:

Input: 
```typescript
calculateFibonacciSeries(10)
```
Output:
```
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
```

Input: 
```typescript
calculateFibonacciSeries(-5)
```
Output:
```
[]
```
*/ 



class Fibonacci {
    calculateFibonacciSeries(n: number): number[] {
        // If n is less than or equal to 0, return an empty array. 
        if (n < 1) {
            return n === 0 ? [0] : [];
        }
        
        // The first two number in the series are always 0 and 1.
        let fib = [0, 1];
        
        // Start from the third number in the series.
        for (let i = 2; ; i++) {
            // Calculate the next number in the series.
            let next = fib[i - 1] + fib[i - 2];
            
            // If the next number is more than n, break the loop.
            if (next > n) {
                break;
            }
            
            fib.push(next);
        }
        
        return fib;
    }
}
