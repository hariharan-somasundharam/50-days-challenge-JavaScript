// Arrays sort method
const array=[8,7,13,4,3,11];
array.sort(function(a,b){return a-b});  // For Ascending Order
console.log("Ascending Order:",array);

array.sort(function(a,b){return b-a});  // For Descending Order
console.log("Descending Order:",array);