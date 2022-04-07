/* eslint-disable no-prototype-builtins */
// apr solution
const string = "lighthouse in the house";

const letterPositions = function(sentence) {
  const results = {}; // when I defined this global object outisde my function, so it was just adding on when it was in line 2.
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (!results.hasOwnProperty(sentence[i])) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

// feb solution
// const letterPositions = function(sentence) {
//   const results = {};
//   for (let i = 0; i < sentence.length; i++) {
//     if (results[sentence[i]]) {
//       results[sentence[i]].push(i);
//     } else {
//       results[sentence[i]] = [i];
//     }
//   }
//   return results;
// };

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    // if function returns true
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
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

assertArraysEqual(letterPositions(string).l, [0]);
assertArraysEqual(letterPositions(string).i, [1, 10]);
assertArraysEqual(letterPositions(string).g, [2]);
assertArraysEqual(letterPositions(string).h, [3, 5, 13, 15]);
