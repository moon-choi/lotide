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
const assertArraysEqual = function(arr1, arr2){
    if (eqArrays(arr1, arr2)) { // if function returns true
        console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    }
  
}

const middle = function(arr){
    let midArray = []; 
    if(arr.length < 3) {
        return midArray;
    } else if(arr.length % 2 === 0) { // this covers arrays of which length is bigger than 3.
        midArray.push(arr[(arr.length/2)-1]) // [1,2,3,4]
        midArray.push(arr[(arr.length/2)])
    } else { // length bigger than 3, and odd number length [1,2,3,4,5]
        midArray.push(arr[(arr.length-1)/2])
    }
    return midArray;
}

assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([1, 2, 3, 4]),  [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
