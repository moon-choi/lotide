//W01D3
//apr

const findKeyByValue = function(obj, show) {
  for (let key in obj) {
    if (obj[key] === show) {
      return key;
    }
  }
};

// feb SOLUTION 1
// for (const genre in obj) {
//   if (obj[genre] === show) {
//     return genre;
//   }
// }
//

// feb SOLUTION 2
//   const genreArray = Object.keys(obj);
//   for (const element of genreArray) {
//     if (obj[element] === show) {
//       return element;
//     }
//   }
// };

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
