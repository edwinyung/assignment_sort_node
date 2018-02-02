//arrays of 1s and 0s. Group them together by making one pass thru array
//[1, 0, 1, 0]
//[0, 0, 1, 1]

function grouping(arr) {
  let outputArr = [];
  let outputArr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) outputArr.push(1);
    else outputArr2.push(0);
  }
  return outputArr.concat(outputArr2);
}

console.log(grouping([1, 0, 1, 0]));

//least common ancestor of binary tree
function LCA(tree) {}
