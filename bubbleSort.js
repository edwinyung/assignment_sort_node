function bubbleSort(arr) {
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    let j = i + 1;
    while (j < arr.length) {
      if (arr[j] < arr[i]) {
        //swap
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      j++;
    }
  }
  return arr;
}

console.log(bubbleSort([1, 3, 7, 2, 5]));
// [1,2,3,5,7]
