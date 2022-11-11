"use strict";

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 比较版本号
 * @param version1 string字符串 
 * @param version2 string字符串 
 * @return int整型
 */
function compare(version1, version2) {
  // write code here
  var v1 = version1.split('.');
  var v2 = version2.split('.');

  for (var i = 0; i < v1.length; i++) {
    v1[i] = parseInt(v1[i]);
  }

  for (var _i = 0; _i < v2.length; _i++) {
    v2[_i] = parseInt(v2[_i]);
  }

  var len = Math.max(v1.length, v2.length);

  for (var _i2 = 0; _i2 < len; _i2++) {
    if (v1[_i2] > v2[_i2]) {
      return 1;
    } else if (v1[_i2] < v2[_i2]) {
      return -1;
    } else if (v1[_i2] = v2[_i2]) {
      continue;
    } else if (_i2 == len - 1 && v1.length > v2.length && v1[v1.length - 1] != 0) {
      return 1;
    } else if (_i2 == len - 1 && v2.length > v1.length && v2[v2.length - 1] != 0) {
      return -1;
    }
  }

  return 0;
}

module.exports = {
  compare: compare
};
var s1 = '1.1.0';
var s2 = '1.2';
console.log(compare(s1, s2));