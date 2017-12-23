"use strict";

var multiplier = {
  numbers: [2, 15, 20, 6, 99],
  multiplyBy: 3,
  newArrayFn: function newArrayFn() {
    var _this = this;

    return this.numbers.map(function (number) {
      return _this.multiplyBy * number;
    });
  }
};

console.log(multiplier.newArrayFn());

var newArray = multiplier.numbers.map(function (number) {
  return number * multiplier.multiplyBy;
});

console.log(newArray);
