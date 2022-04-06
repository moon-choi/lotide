// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//apr solution
const countOnly = function(arr, obj) {
  let counter = 0;
  let result1 = {};
  for (let key in obj) {
    if (obj[key] === true && arr.includes(key)) {
      counter++;
      result1[key] = counter;
    }
  }
  return result1;
};

// TEST CODE
/* moved to test folder
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
*/
module.exports = assertEqual;

// feb solution
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// const countOnly = function(allItems, itemsToCount) {
//   const results = {};

//   for (const item of allItems) {
//     console.log(item);
//     if (itemsToCount[item]) {
//       if (results[item]) {
//         results[item] += 1;
//       } else {
//         results[item] = 1;
//       }
//     }
//   }

//   return results;
// };

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna", // x
  "Fang", //
  "Kavith",
  "Jason", //
  "Salima",
  "Fang", //
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
