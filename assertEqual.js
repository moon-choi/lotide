// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) { //can't do this for arrays and objects.
    // when compare arrays and objects directly, it's always false.
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
/* moved to test folder

*/
module.exports = assertEqual;

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
//assertEqual: only receiving primitive values