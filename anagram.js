// Map every letter of the alphabet to a prime number.
// If the two words are anagrams, then the product of the prime numbers corresponding to each letter will be the same.

const o = {
  a: 2,
  b: 3,
  c: 5,
  d: 7,
  e: 11,
  f: 13,
  g: 17,
  h: 19,
  i: 23,
  j: 29,
  k: 31,
  l: 37,
  m: 41,
  n: 43,
  o: 47,
  p: 53,
  q: 59,
  r: 61,
  s: 67,
  t: 71,
  u: 73,
  v: 79,
  w: 83,
  x: 89,
  y: 97,
  z: 101
};

const anagrams = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }

  let productA = 1;
  let productB = 1;

  a.split("").forEach((letter, index) => {
    productA *= o[letter];
    productB *= o[b[index]];
  });

  return productA === productB;
};

console.log(anagrams("vlad", "dalv"));
console.log(anagrams("reign", "iegrn"));
console.log(anagrams("reign", "i3grn"));
console.log(anagrams("reign", "something"));

//rounding errors for very large zzzzzzzzzzzzzzz
