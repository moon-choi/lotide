const head = require('../head');
const assertEqual = require('../assertEqual');
const result = head([5,6,7], 5)

assertEqual(result, 5)
