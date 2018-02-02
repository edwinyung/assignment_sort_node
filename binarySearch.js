const arrGenr8r = num => {
  let arr = [];
  while (num) {
    arr.push({ id: num, data: "name" + num-- });
  }
  return arr;
};

let myArray = arrGenr8r(100000);

const binarySearch = (val, array, count = 0) => {
  let current = 0;
  let max = array.length;
  let pivot = Math.floor(max / 2);

  return val === array[pivot].id //base case
    ? { data: array[pivot].data, count } //output this if hit the base case
    : val < array[pivot].id //then compare if value is less or more than current id
      ? binarySearch(val, array.slice(pivot + 1, max), ++count)
      : binarySearch(val, array.slice(0, pivot), ++count); //tail call optimizaton for recursion
};

console.log(binarySearch(97674, myArray));
//expected output = { data: 'name97674', count: 16 };
