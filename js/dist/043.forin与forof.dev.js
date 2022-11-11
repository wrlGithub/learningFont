"use strict";

var arr = [1, 'aa', {
  a: 12,
  t: 'wang'
}];

for (i in arr) {
  console.log(i);
}

for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
  value = _arr[_i];
  console.log(value);
}