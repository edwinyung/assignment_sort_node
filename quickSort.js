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
//console.log(partition([3, 7, 8, 5, 2, 1, 9, 5, 4]));

//|6 5 1 3 8 4 7 9 2
//1 | 5 6 3 8 4 7 9 2
//1  2 | 6 3 8 4 7 9 5

//Other approach
//pivot = arr[-1]
//current Idx -> 0
//wall = 0
//if(currentIdx < pivot)
//swap currentIdx elem with wall
//wall++

function partitioning(arr, low, high) {
  let pivot = arr[high];
  let wall = low;
  for (let i = low; i < high - 1; i++) {
    if (arr[i] <= pivot) {
      //swap current elem with wall
      [arr[wall], arr[i]] = [arr[i], arr[wall]];
      wall++;
    }
  }
  //swap wall and pivot
  [pivot, arr[wall]] = [arr[wall], pivot];
  return;
}
//
// console.log(quickSort([6,5,1,3,8,4,7,9,2]));
