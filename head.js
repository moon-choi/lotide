const head = function(array, target){
    for(let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return array[i]
        }
    }
}
const result = head([5,6,7], 5)

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
assertEqual(result, 5)