'use strict';

function squ(x) {
  return x * x;
};

console.log(squ(5));

var square = function square(x) {
  return x * x;
};

console.log(square(25));

var squareSimple = function squareSimple(x) {
  return x * x;
};

console.log(square(35));

var getFirstName = function getFirstName(name) {
  return name.split(' ')[0];
};
console.log(getFirstName('Luis Fernando'));

var getFirstNameOther = function getFirstNameOther(name) {
  return name.split(' ')[0];
};
console.log(getFirstNameOther('Sergio Alejandro'));
