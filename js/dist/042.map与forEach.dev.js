"use strict";

var arr = [1, 'aa', {
  a: 12,
  t: 'wang'
}];
var res1 = arr.forEach(function (item, second) {
  console.log('second', second);
  console.log(item);
});
var res2 = arr.map(function (item, second) {
  console.log('second', second);
  console.log(item);
  return item;
});
console.log('forEach', res1);
console.log('map', res2);
/**
 * forEach改变原数组
 * map不改变原数组
 * 
 *  */

var array = [{
  a: 1,
  b: 2
}, [1, 2]];
/* array.forEach( (item) => {
    item.conut = 3
}) */

array.map(function (item) {
  item.conut = 3;
});
console.log(array);