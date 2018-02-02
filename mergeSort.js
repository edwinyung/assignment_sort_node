function mergeSort(arr) {
  let midpoint = Math.floor(arr.length / 2);
  let leftHalf = arr.slice(0, midpoint);
  let rightHalf = arr.slice(midpoint);
  if (arr.length <= 1) {
    return arr;
  }
  // mergeSort(leftHalf); //[1,3]
  // mergeSort(rightHalf); //[7,2,5]
  console.log(leftHalf);
  console.log(rightHalf);
  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

//[1,3] [7,2,5]

//[1] [3] [2] [5] [7]
//[1 3] [7 2 5]
//[1 2 3 5 7]

function merge(leftHalf, rightHalf) {
  let leftIndex = 0;
  let rightIndex = 0;
  let sortedArr = [];

  //zip back up and combine the fragmented elements
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

  //take care of leftovers from either the left or right
  while (leftIndex < leftHalf.length) {
    sortedArr.push(leftHalf[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightHalf.length) {
    sortedArr.push(rightHalf[rightIndex]);
    rightIndex++;
  }

  console.log("sortedArr: ", sortedArr);
  return sortedArr;
}

const mergeClean = (left, right) => {
  const newArr = [];
  const lLen = left.length;
  const rLen = right.length;
  let l = 0;
  let r = 0;

  while (l < lLen && r < rLen) {
    if (left[l] < right[r]) {
      newArr.push(left[l++]);
    } else {
      newArr.push(right[r++]);
    }
  }

  return newArr.concat(left.slice(l)).concat(right.slice(r));
};

//[7] [2] [5]
//[7] [2]
//[2,7] [5] === [2,7,5]
//[2,5,7]
//console.log(merge([1, 3, 5], [4, 6, 8]));

console.log(mergeSort([1, 3, 7, 2, 5]));
// [1,2,3,5,7]
