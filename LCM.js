// Write a function called findLCM that takes an array of two numbers and returns the least common multiple (LCM) of those two numbers. The least common multiple should be a positive integer that can be evenly divided by both of the starting numbers, as well as by all sequential numbers in the range between them.
//
// The starting array will contain two numbers that will not necessarily be in numerical order.
//
// For example, if given [5, 1], find the least common multiple of both 1 and 5 that is evenly divisible by all numbers between 1 and 5.

// When complete, your function should return the following results for these arrays:
// [5, 1] => 60
// [8, 7] => 56
// [4, 8] => 840

// An optimized solution should use a recursive function inside the findLCM function.

function findLCM([input1, input2]) {
  let multiples = [];
  if (input1 < input2) {
    for (let i = input1; i <= input2; i++) {
      for (let j = 0; j < 1000; j++) {
        if (j * i) {
          multiples.push(j);
        }
      }
    }
  }
  if (input1 > input2) {
    for (let i = input2; i <= input1; i++) {
      for (let j = 0; j < 1000; j++) {
        if (j * i) {
          multiples.push(j);
        }
      }
    }
  }
  return Math.min.apply(null, multiples);
}

console.log(findLCM([5, 1]));
console.log(findLCM([8, 7]));
console.log(findLCM([4, 8]));
