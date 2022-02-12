// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function (object1, object2) {
    if (Object.keys(object1).length === Object.keys(object2).length) {
      const obj2Keys = Object.keys(object2); //it’s an array including a, b
      for (const obj1Key of Object.keys(object1)) { //obj1Key = a   Object.keys() = [a, b]
        if (!obj2Keys.includes(obj1Key)) { // if [a, b] does not include b
          return false; //then two arrays don't match, so exit the loop.
        }
               //  “2"                  “2”
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
const result1 = eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
const result2 = eqObjects(ab, abc); // => false




// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

const eqArrays = function(arr1, arr2){
	// Check if the arrays are the same length
	if (arr1.length !== arr2.length) {
        return false;
    }    
	// Check if all items exist and are in the same order
	for (let i = 0; i < arr1.length; i++) {
	    if (arr1[i] !== arr2[i]) {
            return false;
	    } 
  }    
  return true;
}      

assertEqual(result1, true);
assertEqual(result2, false);