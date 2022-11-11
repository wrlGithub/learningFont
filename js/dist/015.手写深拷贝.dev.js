"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function deepClone() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var map = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Map();

  //obj 如果为基础类型 则不需要拷贝
  if (_typeof(obj) !== "object") {
    return obj;
  }

  if (map.get(obj)) {
    return map.get(obj);
  }

  var result = {}; // 初始化返回结果

  if (obj instanceof Array || Object.prototype.toString.call(obj) === "[object Array]") {
    result = [];
  } // 防止循环引用


  map.set(obj, result);

  for (var key in obj) {
    // 保证 key 不是原型属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key], map);
    }
  } // 返回结果


  return result;
}