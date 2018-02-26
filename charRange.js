/*

Given a function `charRange` that returns an array of all the lower case letters of the alphabet:

* Write a function `toString26` that takes a num and converts it into its alphabetic base 26 string representation.

//pass a toInt10, should return 1
* Write a function `toInt10` that takes a base 26 string and converts it into its base 10 integer representation.

Examples:
    a 1
    z 26
    ba 53
    bb 54
    aa 27
    abc 731
    abcdefg 334123303
    abcdefghijklm 103215959525275440

*/

function charRange(start, stop) {
  var result = [];

  // get all chars from starting char
  // to ending char
  var i = start.charCodeAt(0),
    last = stop.charCodeAt(0) + 1;
  for (i; i < last; i++) {
    result.push(String.fromCharCode(i));
  }

  return result;
}

function toInt10(str) {
  //convert to alphabetic base 26 string representation
  let total = 0;
  let alphaArr = charRange("a", "z");
  let alphaArrNumber = [];
  for (let j = 0, running = 1; j < alphaArr.length; j++) {
    alphaArrNumber[j] = running;
    running++;
  }
  console.log(alphaArrNumber);
  for (let i = 0; i < str.length; i++) {
    for (let k = 0; k < alphaArr.length; k++) {
      if (str[i] == alphaArr[k]) {
        total += alphaArrNumber[k];
      }
    }
  }

  total = total % 26;

  return total;
}

// console.log(charRange("a", "z"));

var str, num;

num = toInt10("a");
console.log(num);
str = toString26(num);
console.log(str, num);

num = toInt10("z");
str = toString26(num);
console.log(str, num);

num = toInt10("ba");
str = toString26(num);
console.log(str, num);

num = toInt10("bb");
str = toString26(num);
console.log(str, num);

num = toInt10("aa");
str = toString26(num);
console.log(str, num);

num = toInt10("abc");
str = toString26(num);
console.log(str, num);

num = toInt10("abcdefg");
str = toString26(num);
console.log(str, num);

num = toInt10("abcdefghijklm");
str = toString26(num);
console.log(str, num);
