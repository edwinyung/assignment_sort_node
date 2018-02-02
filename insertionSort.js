function insertionSort(arr) {
  // Step through sorted elements right to left.
  // As long as your value is less than the element
  // at arr[i] and you still have elements

  for (let x = 0; x < arr.length; x++) {
    // rightIndex is the furthest right sorted element
    let rightIndex = x - 1;
    // value is the value of arr[rightIndex + 1]
    let value = arr[x];
    //loop every single element in the arr
    while (rightIndex >= 0 && arr[rightIndex] > value) {
      // shift elements to the right by one place
      arr[rightIndex + 1] = arr[rightIndex];
      rightIndex -= 1;
    }
    // insert the actual element
    arr[rightIndex + 1] = value;
  }
  return arr;
}

console.log(insertionSort([1, 3, 7, 2, 5])); //[1,2,3,5,7]
