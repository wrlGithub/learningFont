"use strict";

function foo(num) {
  console.log("foo:" + num);
  this.count++;
}

foo.count = 0;

for (var i = 0; i < 10; i++) {
  if (i > 5) foo(i);
}

console.log(foo.count);
console.log(count);
console.log(window.count);