const swapper = function (key1, object1, key2, object2) {
  console.log("Swap!");

let valOne = object1[key1]
let valTwo = object2[key2]

object1[key1] = valTwo
object2[key2] = valOne

console.log("object1: ", object1);
console.log("object2: ", object2);

};

//power of objects: no need to loop, cus we have explicit keys for each value.

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });

/*
Elena & Moon on Feb 10, 2022
Pair Programming - The Swapper
Feb 7, 2022 Cohort
*/