

// apr solution
const string = "LHL";
const obj = {};

const countLetters = function(string) {
  const newString = string.replace(/\s/g, ""); // only take away spaces at the end and at the beginning

  for (let x of newString) {
    let counter = 1;

    if (!obj[x]) {
      //checking if this is undefiend
      // if (!obj.hasOwnProperty(x)) { //checking if the object has the property.
      obj[x] = counter;
    } else {
      //you need an else statement.
      obj[x] += 1;
    }
  }
  return obj;
};


const assertEqual = function(actual, expected) {
  if (actual.L === expected.L) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(countLetters(string), {L:2, H:1});

// feb solution
// const countLetters = function (word) {
//   const count = {};
//   const trimWord = word.replace(/\s/g, '') // only take away spaces at the end and at the beginning
//   console.log(trimWord)
//   for (let i = 0; i < trimWord.length; i++) {
//     const letter = trimWord[i];
//     if (count[letter]) {
//       count[letter]++;
//     } else {
//       count[letter] = 1;
//     }
//   }
//   return count
// };
