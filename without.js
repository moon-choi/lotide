const words = ["hello", "world", "lighthouse"];

const without = function(source, itemsToRemove) {
    const result = [];
    for (const element of source) {
        if (!itemsToRemove.includes(element)) { 
            // '!' was important, think in reverese. I was trying to get the want that matches removing element and try to take it out from the source array. 
            result.push(element);
        }
    }
    return result
}
const wordsWithout = without(words, ["lighthouse"]); // no need to capture return value for this test case



const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };


  const assertArraysEqual = function(arr1, arr2){
    if (eqArrays(arr1, arr2)) { // if function returns true
        console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    }
  
}

const eqArrays = function(arr1, arr2){
	// Check if the arrays are the same length
	if (arr1.length !== arr2.length) { ///////
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
}    

  
  // Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(wordsWithout, ["hello", "world"])