const multiplier = {
  numbers: [2, 15, 20,6,99],
  multiplyBy: 3,
  newArrayFn() {
    return this.numbers.map((number) => this.multiplyBy * number);
  }
};

console.log(multiplier.newArrayFn());

const newArray = multiplier.numbers.map((number => number * multiplier.multiplyBy));

console.log(newArray);
