/**
Problem Title: Implement Queue using Stacks

Problem Description:
You are given the file implementQueueUsingStacks.ts, which contains an incomplete implementation of a queue data structure using stacks. Your task is to complete the implementation of the queue class, ensuring that it correctly implements the queue operations: enqueue, dequeue, and peek.

A queue is a data structure that follows the FIFO (First-In-First-Out) principle, where the element that is inserted first is the first one to be removed.

The class should have the following methods:

1. enqueue(value: number): void - Inserts an element to the back of the queue.
2. dequeue(): number - Removes and returns the element at the front of the queue. If the queue is empty, return -1.
3. peek(): number - Returns the element at the front of the queue without removing it. If the queue is empty, return -1.

You should implement the queue using only stacks, and your implementation should use the following stack class:

Stack class:
- The stack class has two methods:
  - push(value: number): void - Adds an element to the top of the stack.
  - pop(): number - Removes and returns the top element of the stack. If the stack is empty, return -1.
  - isEmpty(): boolean - Returns true if the stack is empty, false otherwise.

You need to complete the implementation of the queue class in the given file implementQueueUsingStacks.ts, ensuring that it correctly implements the queue operations.

Note:
- The input values for enqueue and dequeue operations will be integers.
- You can assume that the enqueue operation will never be called if the queue is already full (maximum size = 1000).
- Your implementation should have a time complexity of O(1) for enqueue, dequeue, and peek operations.

Example:

const queue = new Queue();
queue.enqueue(1); // Queue becomes [1]
queue.enqueue(2); // Queue becomes [1, 2]
queue.peek();    // Returns 1
queue.dequeue(); // Returns 1, Queue becomes [2]
queue.isEmpty(); // Returns false

Note:
- The given file implementQueueUsingStacks.ts already contains the partial implementation of the queue class with the necessary imports and initializations.
*/ 



// Required stack class to implement queue functionality using stack.
class Stack {
  private stack: number[];

  constructor() {
    this.stack = [];
  }

  push(value: number) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.length === 0 ? -1 : this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

// Queue class implementing Enqueue, Dequeue and Peek methods.
class Queue {
  private stack1: Stack;
  private stack2: Stack;

  constructor() {
    this.stack1 = new Stack(); 
    this.stack2 = new Stack();
  }

  enqueue(value: number) {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }

    this.stack1.push(value);

    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    if (this.stack1.isEmpty()) {
      return -1;
    } else {
      return this.stack1.pop();
    }
  }

  peek() {
    if (this.stack1.isEmpty()) {
      return -1;
    } else {
      return this.stack1.stack[this.stack1.stack.length - 1];
    }
  }

  isEmpty() {
    return this.stack1.isEmpty();
  }
}
