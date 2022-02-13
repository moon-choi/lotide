//W01D4

const findKey = function(obj, callback){
    // const numStar = obj.property.stars
    for (const star in obj) {
        if(callback(obj[star])){
            return star;
            console.log(star) // it greys out, because anything after return statement, it won't execute. useless code. 

        }    
    }
}

// obj[variableName] //if I am using variable, i have to use bracket notation.

const result = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) // => "noma"


  // FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };


assertEqual(result, "noma")