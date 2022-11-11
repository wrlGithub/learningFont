"use strict";

function deepclone() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var map = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Map();
  if (typeof obj !== "Object") return obj;
  if (map.get(obj)) return map.get(obj);
  var result = {};
  if (obj instanceof Array || Object.prototype.toString.call(obj) === "[object Array]") result = [];
  map.set(obj, result);

  for (var k in obj) {
    if (obj.hasOwnProperty(k)) deepclone(obj[k], map);
  }

  return result;
}