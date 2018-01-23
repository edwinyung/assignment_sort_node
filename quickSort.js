function partition(arr) {
  let rightIndex = arr.length - 1;
  let pivot = arr[rightIndex];
  for (let leftIndex = 0; leftIndex < arr.length; leftIndex++) {
    //swap
    if (pivot <= arr[leftIndex]) {
      let temp = arr[leftIndex];
      arr[leftIndex] = arr[rightIndex - 1]; //swap neighbor with left index

      arr[rightIndex - 1] = pivot; //decrement pivot

      arr[rightIndex] = temp;

      pivot = arr[rightIndex - 1]; //reassign pivot

      rightIndex--;
    }
  }
  return arr;
}
//0 , 1 ,2 ,3 ,4 ,5 ,6 , 7, 8
console.log(partition([3, 7, 8, 5, 2, 1, 9, 5, 4]));
