// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (word) {
  const count = {};
  const trimWord = word.replace(/\s/g, '') // only take away spaces at the end and at the beginning
  console.log(trimWord)
  for (let i = 0; i < trimWord.length; i++) {
    const letter = trimWord[i];
    if (count[letter]) {
      count[letter]++;
    } else {
      count[letter] = 1;
    }
  }
  return count
};

console.log(countLetters("hello from the other side"));
