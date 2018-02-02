// Each breakfast delivery is assigned a unique ID, a positive integer.
// When one of the company's 100 drones takes off with a delivery, the delivery's ID is added to an array, deliveryIdConfirmations.
// When the drone comes back and lands, the ID is again added to the same array.

// After breakfast this morning there were only 99 drones on the tarmac.
// One of the drones never made it back from a delivery.
// We suspect a secret agent from Amazon placed an order and stole one of our patented drones.
// To track them down, we need to find their delivery ID.

// Given the array of IDs, which contains many duplicate integers and one unique integer, find the unique integer.
// The IDs are not guaranteed to be sorted or sequential.
// Orders aren't always fulfilled in the order they were received, and some deliveries get cancelled before takeoff.
//[92398, 928934, 92398, 928934, 2384]

//O(n) time algorithm to find the unique id

//array of IDs, as each drone comes back, they add an ID. Figure out one ID in array that is unique. The unique ID is the one that is missing

//create algo of O(n) that will find the unique one
let uniqueDrone = arr => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) obj[arr[i]]++;
    else obj[arr[i]] = 1;
  }
  //j is the obj's key
  for (let j in obj) {
    if (obj[j] === 1) return j;
  }
};

let drones = [92398, 928934, 45, 92398, 928934, 2384, 45];

console.log(uniqueDrone(drones));
//saves space complexity
const idFinder = arr =>
  drones.reduce((a, b) => {
    console.log("a", a);
    console.log("b", b);
    return a ^ b;
  }); //When a bitwise XOR is performed on a pair of bits, it returns 1 if the bits are different:

console.log(idFinder(drones));

// //function findMissingDroneId(ids) {
//     if (!ids.length) {
//         return;
//       }

//       if (ids.length === 1) {
//         const [ id ] = ids;
//         return id;
//       }

//       const hash = {};
//       ids.forEach(id => { hash[id] ? delete hash[id] : hash[id] = true; });
//       const [ key ] = Object.keys(hash);
//       return +key;
//     }

//     console.log(findMissingDroneId([92398, 928934, 92398, 928934, 2384]));
//     //=> 2384
