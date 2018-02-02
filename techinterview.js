//JS function that merges two JSON objects based on keys

function merge(jsonObj1, jsonObj2) {
  let obj1 = jsonObj1;
  let obj2 = jsonObj2;
  let mergedObj = {};

  //Loop through obj1 as an outer function and loop through obj2 as inner function
  Object.keys(obj1).forEach(outerKey => {
    Object.keys(obj2).forEach(innerKey => {
      if (outerKey === innerKey) {
        mergedObj[outerKey] = [obj1[outerKey]];
        mergedObj[outerKey].push(obj2[innerKey]);
      } else if (!mergedObj[innerKey]) {
        mergedObj[innerKey] = obj2[innerKey];
      } else if (!mergedObj[outerKey]) {
        mergedObj[outerKey] = obj1[outerKey];
      }
    });
  });
  return mergedObj;
}

//Test
let test1 = { apple: "good", steak: "bad", rice: "mediocre" };
let test2 = { apple: "awesome", rice: "ok" };
console.log(merge(test1, test2));
