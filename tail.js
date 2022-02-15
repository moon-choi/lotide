const assertEqual = require('./assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const tail = function(array){
// let shifted = [];   
    if (array.length > 0) {
        console.log(array.slice(1));
        return array
    } 
    return [];      
}

// Test Case: Check the original array 
tail(words); // no need to capture the return value since we are not checking it

/*
imported

const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
*/


/* moved to test 
assertEqual(words.length, 3); // original array should still have 3 elements!
*/