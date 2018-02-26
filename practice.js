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

// let reversiblePrime = function(input) {
//   let primes = sieve(input);
//   primes.filter(prime => {
//     for (let i = 0; i < prime.length; i++) {
//       if (prime[i] === p[i - 1]) return prime;
//     }
//   });
// };

function getPrimes(max) {
  var sieve = [],
    i,
    j,
    primes = [];
  for (i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      primes.push(i);
      for (j = i << 1; j <= max; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
}
