// Reversed Prime->  if reversed prime is also a prime it is a reversible prime
// n(start from 0)--> 0 1 2 3 4  5  6  7  ....
// reversed prime --> 2 3 5 7 11 13 17 31 ....
// reverse form of a prime number
// /*Function accepts argument n. Returns the n-th reversible prime.

// return 10000th reversible prime = 942583

let sieve = function(num) {
  let arr = [],
    output = [];

  //Initialize
  for (let i = 0; i < num; i++) {
    arr.push(true);
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (arr[i]) {
      for (let j = i * i; j < num; j += i) {
        arr[j] = false;
      }
    }
  }

  for (let i = 2; i < num; i++) {
    if (arr[i]) {
      output.push(i);
    }
  }

  return output;
};

let reversiblePrime = function(input) {
  let primes = sieve(input);
  primes.filter(prime => {
    for (let i = 0; i < prime.length; i++) {
      if (prime[i] === p[i - 1]) return prime;
    }
  });
};
