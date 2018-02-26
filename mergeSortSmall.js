function mergeSort(arr) {
  console.log('arr', arr);
  if (arr.length < 2) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  let result = [];

  while (left.length > 0 && right.length > 0) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  result = result.concat(left.length ? left : right); //concat the remaining elements of either the left or right, depending on which is left over
  console.log('result', result);
  return result;
}

mergeSort([1, 5, 3, 2]);
