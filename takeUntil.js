// apr solution
const takeUntil = function (array, callback) {
  let finalArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      array.splice(i);
    }
  }
  return array;
};

// feb solution
// const takeUntil = function (array, callback) {
//   takenArray = [];

//   //for..of loop
//   for (const element of array) {
//     // can i use for ... of? or for..each?
//     if (callback(element)) {
//       // takenArray.push(element) // i am pushing everything and i am breaking. the condition won't be checked this way.
//       break; //kicks me out of the for loop, stop the execution 5-12,
//       // return; will finish execution. entire function not just the for loop
//     }
//     takenArray.push(element);
//   }

//   /*
//     //c-style loop
//     for(let i = 0; i < array.length; i++) { // can i use for ... of? or for..each?
//         if(callback(array[i])) {
//             break;
//         }
//         takenArray.push(array[i])
//     }
//     */
//   return takenArray;
// };

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);

console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

// let arr = ['a', 'b', 'c'];
// arr.map(x => console.log(x))

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    // if function returns true
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function (arr1, arr2) {
  // Check if the arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Check if all items exist and are in the same order
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } else {
      return true;
    }
  }
};

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
