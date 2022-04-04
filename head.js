const head = function(arr) {
  return arr[0];
};

// const head = function (array, target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return array[i];
//     }
//     return array[i]; // is this return correct? or unnecessary?
//   }
// };
// const result = head([5, 6, 7], 5);

// refactored
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

/* moved to test folder
assertEqual(result, 5)
*/

module.exports = head;

console.log(head([1, 2, 3], 1));
console.log(head(["5"]));
