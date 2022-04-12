const tail = function(arr) {
  return arr.slice(1);
};

// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// const tail = function(array){
// let shifted = [];
//  if (array.length > 0) {
//    console.log(array.slice(1));
//    return array
//  }
//    return [];
// }

// Test Case: Check the original array
// tail(words); // no need to capture the return value since we are not checking it

module.exports = tail;
