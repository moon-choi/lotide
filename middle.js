//apr solution
const middle = function(arr) {
  let midArr = [];
  if (arr.length < 2) {
    return [];
  }
  if (arr.length > 2 && arr.length % 2 === 0) {
    //even number
    midArr.push(arr[arr.length / 2 - 1], arr[arr.length / 2]);
  } else if (arr.length > 2 && arr.length % 2 !== 0) {
    midArr.push(arr[(arr.length - 1) / 2]);
  }
  return midArr;
};

//feb solution
// const middle = function (arr) {
//   let midArray = [];
//   if (arr.length < 3) {
//     return midArray;
//   } else if (arr.length % 2 === 0) {
//     // this covers arrays of which length is bigger than 3.
//     midArray.push(arr[arr.length / 2 - 1]); // [1,2,3,4]
//     midArray.push(arr[arr.length / 2]);
//   } else {
//     // length bigger than 3, and odd number length [1,2,3,4,5]
//     midArray.push(arr[(arr.length - 1) / 2]);
//   }
//   return midArray;
// };

module.exports = middle;
