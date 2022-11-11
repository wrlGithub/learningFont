"use strict";

var p1 = new Promise(function (resolve, reject) {
  resolve('hello');
}).then(function (result) {
  console.log('p1:callback' + result);
})["catch"](function (e) {
  return e;
});
var p2 = new Promise(function (resolve, reject) {
  throw new Error('报错了');
}).then(function (result) {
  console.log('p1:callback' + result);
})["catch"](function (e) {
  return e;
});
Promise.all([p1, p2]).then(function (result) {
  return console.log(result);
})["catch"](function (e) {
  return console.log(e);
}); // ["hello", Error: 报错了]