// constructor Function

function human(name, age, weight){
  this.name = name,
  this.age = age,
  this.weight = weight
}
/*
var bob = new human('bob', 45);

var sentence = "I'm going to the park";

var number = 1 > 3 ? 123 : 456;

var human = {
  name : "Alex",
  age : 23,
  sports : ['golf', 'basketball', 'football']
};

human.property = 123 */



var bob = new human('bob', 29, 123);

human.prototype.run = function(){
  console.log(this.name + ' is running');
}