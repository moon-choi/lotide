const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(
      `βββ Assertion Passed: ${actual} ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `πππ Assertion Failed: ${actual} ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    const obj2Keys = Object.keys(object2); //itβs an array including a, b
    for (const obj1Key of Object.keys(object1)) {
      //obj1Key = a   Object.keys() = [a, b]
      if (!obj2Keys.includes(obj1Key)) {
        // if [a, b] does not include b
        return false; //then two arrays don't match, so exit the loop.
      }
      //  β2"                  β2β
      if (object1[obj1Key] !== object2[obj1Key]) {
        //if two arrays matched above, then we skip that if statement, and continue on this if statement.
        return false; // if object1[a] values are not matching (1, 2), exit the loop.
      }
    }
    return true; //when if statement was true
  } else {
    return false;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);
