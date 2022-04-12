const assertEqual = require('./assertEqual');

//apr solution
const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
      return false;
    }
  }
};

// feb solution
// const eqArrays = function(arr1, arr2) {
//   // Check if the arrays are the same length
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   // Check if all items exist and are in the same order
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

module.exports = eqArrays;
