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

assertArraysEqual([1, 2, 3], [2, 3]);