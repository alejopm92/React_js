function squ(x) {
  return x*x;
};

console.log( squ(5));

const square = (x) => {
  return x*x;
};

console.log( square(25));

const squareSimple = (x) => x*x;

console.log( square(35));


const getFirstName = (name) => name.split(' ')[0];
console.log(getFirstName('Luis Fernando'));

const getFirstNameOther = (name => name.split(' ')[0]);
console.log(getFirstNameOther('Sergio Alejandro'));
