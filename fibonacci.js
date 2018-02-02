//  A Fibonacci number is the sum of its previous two neighbors, starting at 0
// 0 1 1 2 3 5 8 13 21 34 .. i[n-2] + i[n-1] = i[n]
// Given an integer n, write a function to compute the nth Fibonacci number. Determine the Big O time complexity of your solution

// Expected Output:
// fibonacci(1) //=> 1
// fibonacci(4) //=> 3
// fibonacci(12) //=> 144
// fibonacci(40) //=> 102334155

function fibonacciRecursive(num) {
  if (num === 0) return 0;
  else if (num === 1) return 1;
  else return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2); // i[n] = i[n-1] + i[n-2]
}

//To find the 4th Fibonacci number...
//We get multiple returned recursive results when we run the function
//fibonacciRecursive(4) = fibonacciRecursive(3) + fibonacciRecursive(2)
//fibonacciRecursive(3) = fibonacciRecursive(2) + fibonacciRecursive(1)
//fibonacciRecursive(2) = fibonacciRecursive(1) + fibonacciRecursive(0) //we know this is 0 and 1

//Pop off the recursive call stack
//fibonacciRecursive(2) = 1 + 0 = 1
//fibonacciRecursive(3) = 1 + 1 = 2
//fibonacciRecursive(4) = 1 + 2 = 3
//Result is 3

//Memoization
//This gets computationally expensive. Notice how we are being redudant; we call fibonacci(2) and fibonacci(1) twice just for an input of 4. Imagine if we are inputting larger numbers and how a program will slow down.
// Our time complexity is T(n) = T(n-1) + T(n-2) + C
// T(n) = O(2^(n-1)) + O(2^n-2)) + O(1) because each recursive call creates a binary tree of calls

//               fib(4)
//            /          \
//         fib(3)       fib(2)
//        /    \         /   \
//    fib(2)  fib(1)  fib(1) fib(0)

// At large n, we obtain O(2^n), which is exponential time (slow as molasses).

// We can use a technique called memoization to store solved results. This runs in O(n)

let cache = [0, 1];
function fibonacciRecursiveArray(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  else if (num <= cache.length) {
    //return index number one less because a fibonacci call returns a sum of the previous two elements
    return cache[num - 1];
  } else {
    let temp =
      fibonacciRecursiveArray(num - 1) + fibonacciRecursiveArray(num - 2);
    cache.push(temp);
    return temp;
  }
}

//We can also use Javascrip's default parameter instead of declaring a global object.

function fibonacciRecursiveArrayDefault(num, cache = [0, 1]) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  else if (num <= cache.length) {
    //return index number one less because a fibonacci call returns a sum of the previous two elements
    return cache[num - 1];
  } else {
    let temp =
      fibonacciRecursiveArray(num - 1, cache) +
      fibonacciRecursiveArray(num - 2, cache);
    cache.push(temp);
    return temp;
  }
}

//Or, we can save up additional recursive calls by storing them in an object for retrieval when we need them.
//This runs in O(n)

function fibonacciRecursiveObjDefault(num, cache = {}) {
  //base case as normal
  if (num === 0) return 0;
  else if (num === 1) return 1;
  if (cache[num]) return cache[num]; //retrieve cached data if exists
  let output =
    fibonacciRecursiveObjDefault(num - 1, cache) +
    fibonacciRecursiveObjDefault(num - 2, cache); //recursive call as normal
  cache[num] = output; //store output into the cache for future use

  return output;
}

//We can also do this in a class. We need to put this as an property for an instance of the class because the recursive call method has to be kept separate from the cache. Also, think of us as separating out the methods defined on instances of the class from the properties and methods defined on the class's constructor. The two are very different.

class fibonacciRecursiveMemoized {
  constructor() {
    this.cache = {}; //object stores previously solved solutions for later use
  }

  find(num) {
    //base case as normal
    if (num === 0) return 0;
    else if (num === 1) return 1;

    if (this.cache[num]) return this.cache[num]; //retrieve cached data if exists

    let output = this.find(num - 1) + this.find(num - 2); //recursive call as normal
    this.cache[num] = output; //store output into the cache for future use

    return output;
  }
}

//Iterative
//Since everything recursive can be expressed in iterative terms, here is the following implementation. This is as fast the memoized version with O(n)

function fibonacciIterative(num) {
  let previousNumByTwo = 0;
  let previousNumByOne = 1;
  if (num === 0) return 0;
  else if (num === 1) return 1;
  for (let i = 1; i < num; i++) {
    //we start at 1 because an input of 2 (index 2 of the fibonacci sequence) needs a loop to compute
    let sum = previousNumByOne + previousNumByTwo; //Fibonacci number is sum of previous two elements
    previousNumByTwo = previousNumByOne; //shift elements by one to the right
    previousNumByOne = sum; //move prev element up one as well. It is now the sum
  }
  return previousNumByOne;
}

//Tests and Benchmarking Time
let startOne = Date.now();
console.log(fibonacciRecursive(1));
console.log(fibonacciRecursive(4));
console.log(fibonacciRecursive(12));
console.log(fibonacciRecursive(40));
let endOne = Date.now();
console.log("Naive Recursive Time (ms): ", endOne - startOne);
//=> 4 millisecs

let startTwo = Date.now();
console.log(fibonacciRecursiveArray(1));
console.log(fibonacciRecursiveArray(4));
console.log(fibonacciRecursiveArray(12));
console.log(fibonacciRecursiveArray(40));
let endTwo = Date.now();
console.log("Memoized Recursive Time Using Array (ms): ", endTwo - startTwo);
//=> Fewer than 1 millisecs

let startThree = Date.now();
let result = new fibonacciRecursiveMemoized();
console.log(result.find(1));
console.log(result.find(4));
console.log(result.find(12));
console.log(result.find(40));
let endThree = Date.now();
console.log("Memoized Recursive Time Using Object (ms)", endThree - startThree);
//=> Fewer than 1 millisecs

let startFour = Date.now();
console.log(fibonacciIterative(1));
console.log(fibonacciIterative(4));
console.log(fibonacciIterative(12));
console.log(fibonacciIterative(40));
let endFour = Date.now();
console.log("Iterative Time (ms):", endFour - startFour);
//=> Fewer than 1 millisecs

let startFive = Date.now();
console.log(fibonacciRecursiveObjDefault(1));
console.log(fibonacciRecursiveObjDefault(4));
console.log(fibonacciRecursiveObjDefault(12));
console.log(fibonacciRecursiveObjDefault(40));
let endFive = Date.now();
console.log(
  "Memoized Recursive Time Using Default Object (ms): ",
  endFive - startFive
);
//=> Fewer than 1 millisecs

let startSix = Date.now();
console.log(fibonacciRecursiveArrayDefault(1));
console.log(fibonacciRecursiveArrayDefault(4));
console.log(fibonacciRecursiveArrayDefault(12));
console.log(fibonacciRecursiveArrayDefault(40));
let endSix = Date.now();
console.log(
  "Memoized Recursive Time Using Default Object (ms): ",
  endSix - startSix
);
//=> Fewer than 1 millisecs

//Sources:
//http://davedash.com/2011/01/28/interviews-with-fibonacci/
//https://stackoverflow.com/questions/8965006/java-recursive-fibonacci-sequence
//https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/
//www.interviewcake.com
//https://stackoverflow.com/questions/6184869/what-is-the-difference-between-memoization-and-dynamic-programming
//https://stackoverflow.com/questions/17714365/complexity-of-the-recursion-tn-tn-1-tn-2-c
