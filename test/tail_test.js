const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words)
assertEqual(words.length, 3); // original array should still have 3 elements!
