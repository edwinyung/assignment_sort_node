// Given an array of numbers, find all the pairs of array elements that have a particular sum.

// Input: [-4, 2, 1, 9, 7, 5, 3, 0], sum: 3

// [ [ 2, 1 ], [ -4, 7 ], [ 3, 0 ] ]

function twoSum(input, sum) {
  const output = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (sum === input[i] + input[j]) {
        output.push([input[i], input[j]]);
      }
    }
  }
  return output;
}

function twoSumOptimized(input, sum) {
  const obj = {};
  const output = [];
  for (let i = 0; i < input.length; i++) {
    const difference = sum - input[i];
    //if hash has the difference
    if (obj[difference]) output.push([difference, input[i]]);
    //for all cases, make the key equal to the value
    obj[input[i]] = input[i];
  }

  return output;
}

const array = [-4, 2, 1, 9, 7, 5, 3, 0];
const sum = 3;
const naiveResult = twoSum(array, sum);
const answer = [[-4, 7], [2, 1], [3, 0]];
console.log(naiveResult, naiveResult.join("") === answer.join(""));
// => [ [ -4, 7 ], [ 2, 1 ], [ 3, 0 ] ] true
const optimizedResult = twoSumOptimized(array, sum);
const otherAnswer = [[2, 1], [-4, 7], [3, 0]];
console.log(optimizedResult, optimizedResult.join("") === otherAnswer.join(""));
// => [ [ 2, 1 ], [ -4, 7 ], [ 3, 0 ] ] true
