function partition(arr, low, high) {
  let pivot = arr[high]; //pivot is fixed. Move smaller elements to its left, and bigger elements to its right
  let wall = low; //move wall up if the current element is less than pivot by swapping them both

  //i is less than high, because we are not counting the last element
  for (let i = low; i < high; i++) {
    if (arr[i] <= pivot) {
      //swap current elem with wall to move the wall up. Otherwse, if the current element is greater than pivot, wall stays still and current element changes to the next one
      [arr[wall], arr[i]] = [arr[i], arr[wall]];
      wall++;
    }
  }

  console.log(pivot); //value
  console.log(arr[high]); //indexed element in the array
  //swap wall and arr[high] because we can't just swap the pivot value, we need to swap array in place
  [arr[high], arr[wall]] = [arr[wall], arr[high]];
  console.log(arr);
  console.log(wall);
  return wall;
}

console.log(partition([3, 7, 8, 5, 2, 1, 9, 5, 4], 0, 8));

function quickSort(arr, low, high) {
  //if there is still distance between min and max values
  if (low < high) {
    let pivot = partition(arr, low, high);
    //quick sort left and right sides of partition
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
    return arr;
  }
}

console.log(quickSort([6, 5, 1, 3, 8, 4, 7, 9, 2], 0, 8));

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
