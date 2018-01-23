function insertionSort(arr) {
  //left pointer --> points to left array(unsorted)
  //right pointer --> points to unsorted array

  // value is the value of arr[rightIndex + 1]
  // rightIndex is the furthest right sorted element

  // Step through sorted elements right to left.
  // As long as your value is less than the element
  // at arr[i] and you still have elements

  for (let x = 0; x < arr.length; x++) {
    //every single element in the arr
    let rightIndex = x - 1;
    //
    let value = arr[x];
    while (rightIndex >= 0 && arr[rightIndex] > value) {
      // copy the element
      arr[rightIndex + 1] = arr[rightIndex];
      rightIndex -= 1;
    }
    // insert the actual element
    arr[rightIndex + 1] = value;
  }
  return arr;
}

console.log(insertionSort([1, 3, 7, 2, 5])); //[1,2,3,5,7]
