/**
In this coding challenge, you are given a file named `maxProfit.ts` which contains an array of stock prices on each trading day. Your task is to write a function `maxProfit(prices: number[]): number` that calculates the maximum profit that can be achieved by buying and selling the stock at different days.

The function should take in one parameter:
- `prices`: an array of integers representing the stock prices on each trading day. The length of the array will be between 1 and 10^5, and each element will be an integer between 0 and 10^4.

The function should return a single integer, which represents the maximum profit that can be achieved. If it is not possible to make a profit, return 0.

Example:
```
maxProfit([7, 1, 5, 3, 6, 4]); // Output: 5
maxProfit([7, 6, 4, 3, 1]); // Output: 0
```

In the first example, the maximum profit can be achieved by buying the stock on day 2 at the price of 1 and selling it on day 5 at the price of 6, resulting in a profit of 5.

In the second example, it is not possible to make a profit by buying and selling the stock.
*/ 

function maxProfit(prices: number[]): number {
  let minPrice = Number.MAX_VALUE;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    // If current price is less than minPrice, update minPrice
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } 
    // If the profit can be maximized by selling at current price, update maxProfit
    else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}

