function mergeSort(arr) {
  let midpoint = Math.floor(arr.length / 2);
  let leftHalf = arr.slice(0, midpoint);
  let rightHalf = arr.slice(midpoint);
  if (arr.length > 1) {
    mergeSort(leftHalf);
    mergeSort(rightHalf);
    console.log(leftHalf);
    console.log(rightHalf);
  }
  return merge(leftHalf, rightHalf);
}

//[1] [3] [2] [5] [7]
//[1 3] [7 2 5]
//[1 2 3 5 7]

function merge(leftHalf, rightHalf) {
  let leftIndex = 0;
  let rightIndex = 0;
  let sortedArr = [];
  while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
    if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
      sortedArr.push(leftHalf[leftIndex]);
      leftIndex++;
    }
    if (leftHalf[leftIndex] > rightHalf[rightIndex]) {
      sortedArr.push(rightHalf[rightIndex]);
      rightIndex++;
    }
  }

  return sortedArr;
}

console.log(mergeSort([1, 3, 7, 2, 5]));
// [1,2,3,5,7]
