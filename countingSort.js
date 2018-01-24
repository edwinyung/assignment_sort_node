function countingSort(arr, base = 10) {
  let buckets = {}; //[0, 1, 2, 3..9]
  let outputArr = [];
  for (let j = 0; j < arr.length; j++) {
    if (buckets[arr[j]]) buckets[arr[j]] += 1;
    else buckets[arr[j]] = 1;
  }

  Object.keys(buckets).forEach(function(key) {
    for (let k = 1; k <= buckets[key]; k++) {
      outputArr.push(key);
    }
  });

  console.log(buckets);
  return outputArr;
}

console.log(countingSort([3, 2, 1, 4, 7, 8, 9, 5, 5]));
