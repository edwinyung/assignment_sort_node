function selectionSort(arr) {
  let smallest;

  for (let i = 0; i < arr.length; i++) {
    // set a tentative value for where
    // the smallest element in the array is
    // starting with i
    smallest = i;

    // for each index from i to the end
    // compare values until you find the
    // ACTUAL smallest value
    for (let j = i; j < arr.length - 1; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }

    // finally, still in the outer loop
    // swap the smallest element into
    // position i. You now have
    // one more sorted element at i.
    let temp = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = temp;
  }
}
