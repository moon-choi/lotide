const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item))
    }
    return results;
}

map(words, word => word[0]); //array, callback
map(words, word => word[1]);
map(words, word => word.toUpperCase());

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word.toUpperCase());

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


assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['r', 'o', 'o,', 'a', 'o']);
assertArraysEqual(results3, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);


  