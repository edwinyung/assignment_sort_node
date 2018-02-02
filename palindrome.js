// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function palindrome(num) {
  if (
    num
      .toString()
      .split("")
      .reverse()
      .join("") === num.toString()
  ) {
    return true;
  } else {
    return false;
  }
}

function largestThreeDigitPalindrome() {
  let largestPalindrome = null;
  for (let i = 100; i <= 999; i++) {
    for (let j = 100; j <= 999; j++) {
      if (palindrome(i * j) && i * j > largestPalindrome) {
        largestPalindrome = i * j;
      }
    }
  }
  console.log(largestPalindrome);
  return largestPalindrome;
}

console.log(palindrome(101));
console.log(largestThreeDigitPalindrome()); //=> 906609
function isPalindrome(n) {
  const l = Math.log10(n);
  let digits = Math.ceil(l);
  const half = Math.floor(digits / 2);

  let left = n;
  let right = n;
  let isP = true;

  for (let i = 0; i < half; i++) {
    digits--;

    const r = right % 10;
    const l = Math.floor(left / Math.pow(10, digits));

    if (r != l) {
      isP = false;
      break;
    }

    right = Math.floor(right / 10);
    left -= l * Math.pow(10, digits);
  }

  return isP;
}

function largestPalindromeProduct(n) {
  const digits = n;
  const max = Math.pow(10, digits) - 1;
  const min = Math.pow(10, digits - 1);

  let maxPalindrome = -1;
  for (let i = max; i >= min; i--) {
    for (let j = max; j >= min; j--) {
      const product = i * j;
      const isP = isPalindrome(product);
      if (isP) {
        maxPalindrome = product > maxPalindrome ? product : maxPalindrome;
      }
    }
  }

  return maxPalindrome;
}

console.log(
  "The largest palindrome made from the product of two 3-digit numbers is: "
);
console.log(largestPalindromeProduct(3));
