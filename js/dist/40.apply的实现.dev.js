"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/*
 * @Author: Ruilin Wang
 * @Date: 2022-10-02 20:18:03
 * @Last Modified by: wangruilin
 * @Last Modified time: 2022-10-02 20:18:03
 * @Description: 
*/
Function.prototype.myapply = function (context, arrArgs) {
  var _context;

  if (typeof this !== 'function') {
    throw new Error('type error');
  }

  context = context || global;
  context.fn = this;

  var res = (_context = context).fn.apply(_context, _toConsumableArray(arrArgs));

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