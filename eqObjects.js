// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length === keys2.length) {
    for (const key of keys1) {
      if (!keys2.includes(key)) {
        // if [a, b] does not include b
        return false; //then two arrays don't match, so exit the loop.
      }
      //  “2"                  “2”
      if (object1[key] !== object2[key]) {
        //if two arrays matched above, then we skip that if statement, and continue on this if statement.
        return false; // if object1[a] values are not matching (1, 2), exit the loop.
      }
    }
    return true; //when every if statement was true (when all for loop is finished)
  } else { //when array lengths don't match, finish the function right away
    return false;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const result1 = eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
const result2 = eqObjects(ab, abc); // => false

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(result1, true);
assertEqual(result2, false);
