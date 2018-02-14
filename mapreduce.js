
// map
var arr = [1,2,3,4,5];

arr = arr.map(function(i){
  return i + 5;
});

// reduce
// the reduce method often takes two arguments
var bob = [1,2,3,4,5,6];

bob = bob.reduce(function(a, b){ // the sum of all itens of array and reduce it into a number
  return a + b;
});

// filter
// it's a boolean function if true it will keep the same itens of array. if false it will not include in it.

var juliet = [1,2,3,4,5,6,7];

juliet = juliet.filter(function(i){
  return i > 5;
}); // input [6, 7] elements that are greater than 5