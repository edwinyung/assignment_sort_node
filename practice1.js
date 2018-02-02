// In this Kata, you will be given an array of unique elements, and your task is to rerrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

function solve(arr, output = []) {
  if (arr.length === 1) {
    output.push(arr[0]);
    return output;
  }
  if (arr.length === 0) return output;
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
    if (min > arr[i]) min = arr[i];
  }

  output.push(max);
  output.push(min);
  arr = arr.filter(el => el !== min && el !== max);

  return solve(arr, output);
}

console.log(solve([15, 11, 10, 7, 12]));
