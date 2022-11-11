"use strict";

/*
 * @Author: Ruilin Wang
 * @Date: 2022-10-02 20:18:03
 * @Last Modified by: wangruilin
 * @Last Modified time: 2022-10-02 20:18:03
 * @Description: 
*/
Function.prototype.myapply = function (context) {
  if (typeof this !== 'function') {
    throw new Error('type error');
  }

  context = context || global;
  context.fn = this;
  var args = Array.prototype.slice.call(arguments)[1];
  var res = context.fn(args[1], args[0]);
  delete context.fn;
  return res;
};

var fn = function fn(a, b) {
  console.log('this a:', this.aa);
  console.log('a + b = ', a + b);
  return a + b + this.aa;
};

var aa = 1;
var obj = {
  aa: 1
}; // fn.myapply(obj, [1,2])

console.log(fn.myapply(obj, [1, 2]));