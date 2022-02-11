const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

const findKeyByValue = function(obj, show){
    for (let genre in obj){
       if (genre.value === show) {
            return obj[genre];
       } else {
           return undefined;
       }
    }
}  


  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))

  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//   assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);