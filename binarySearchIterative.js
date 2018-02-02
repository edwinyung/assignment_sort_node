const arrGenr8r = num => {
  let arr = [];
  while (num) {
    arr.push({ id: num, data: "name" + num-- });
  }
  return arr;
};

let myArray = arrGenr8r(100000);

const binarySearch = (datum, arr) => {
  let first = 0,
    last = arr.length - 1,
    middle = Math.floor((first + last) / 2),
    middleElement = Number(arr[middle].data.slice(4));

  while (middleElement != datum && first < last) {
    if (datum < middleElement) last = middle - 1;
    else if (datum > middleElement) first = middle + 1;
    middle = Math.floor((last + first) / 2);
  }
  return arr[middle];
};

console.log(myArray);
console.log(binarySearch(97674, myArray));
//expected output = { data: 'name97674', count: 16 };
