// Problem Statement: On a positive integer, you can perform any one of the following 3 steps.
// 1.) Subtract 1 from it. ( n = n - 1 )
// 2.) If its divisible by 2, divide by 2. ( if n % 2 == 0 , then n = n / 2  )
// 3.) If its divisible by 3, divide by 3. ( if n % 3 == 0 , then n = n / 3  ).
// You can perform each of these actions any number of times.
// Now the question is, given a positive integer n, find the minimum number of steps that takes n to 1

// eg: 1.)For n = 1 , output: 0
// 2.) For n = 4 , output: 2  ( 4  /2 = 2  /2 = 1 )
// 3.)  For n = 7 , output: 3  (  7  -1 = 6   /3 = 2   /2 = 1 )

let steps = num => {
  let step = 0;
  let n = num;
  while (n > 1) {
    step++;
    if (n % 3 === 0) {
      n = n / 3;
    } else if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n - 1;
    }
  }
  return step;
};

console.log(steps(1));
console.log(steps(4));
console.log(steps(7));

const findSteps = n => {
  if (n === 1) {
    return 0;
  }
  let result = findSteps(n - 1) + 1;
  if (n % 2 == 0) {
    let resultTwo = findSteps(n / 2) + 1;
    result = resultTwo < result ? resultTwo : result;
  }
  if (n % 3 == 0) {
    let resultTwo = findSteps(n / 3) + 1;
    result = resultTwo < result ? resultTwo : result;
  }
  return result;
};
