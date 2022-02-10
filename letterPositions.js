const letterPositions = function(sentence) {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i)      }
      else {
        results[sentence[i]] = [i];
      }
    }
    return results;
  };
  

console.log(letterPositions('hello'))  
  
const assertArraysEqual = function(arr1, arr2){
    if (eqArrays(arr1, arr2)) { // if function returns true
        console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    }
}

const eqArrays = function(arr1, arr2){
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
}    

assertArraysEqual(letterPositions('hello').e, [1]);
