const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1); // [c d]
  const keys2 = Object.keys(object2); // [d c]

  if (keys1.length !== keys2.length) {
    //2
    return false;
  }
  // by failing the most wrong case, we don't have to indent everything below, also we don't need an else statement.

  for (const key of keys1) {
    // c, d
    if (!keys2.includes(key)) {
      //dc 에 c가 없는가 //dc에 d가 없는가
      return false;
    }
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        //[2,3] [2,3]
        return false;
      }
    } else {
      //anything that is not array
      if (object1[key] !== object2[key]) {
        //cd의 c 값과 dc의 c값이 다른가 //cd의 d값과 dc의 d값이 다른가 //this only works for primitives.
        return false; //여기가 문제
      }
    }
  }
  return true;
};

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
      return false;
    }
  }
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const result1 = eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
const result2 = eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const result3 = eqObjects(cd, dc); // => true 

assertEqual(result1, true);
assertEqual(result2, false);
assertEqual(result3, true);
