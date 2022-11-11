"use strict";

function solu1(arr1, arr2) {
  var sum = 0;
  var arr = [];

  for (var i = 0; i < arr1.length; i++) {
    if (arr2[i] == 0) {
      sum += arr1[i];
    } else {
      arr.push(arr1[i]);
    }
  } // console.log(arr.sort().reverse());
  // console.log(sum);


  var s1 = sum + arr.reduce(function (a, b) {
    return a + b;
  });
  var s2 = sum;

  for (var _i = 0; _i < arr.length; _i++) {
    s2 = s2 * 2;
  } // console.log(s1, s2);


  if (s1 > s2) {
    return s1;
  } else {
    return s2;
  }
}

function solu(arr1, arr2) {
  var sum = 0;
  var arr = [];

  for (var i = 0; i < arr1.length; i++) {
    if (arr2[i] == 0) {
      sum += arr1[i];
    } else {
      arr.push(arr1[i]);
    }
  }

  arr.sort().reverse();
  var s1 = sum;
  var s2 = sum;

  for (var _i2 = 0; _i2 < arr.length; _i2++) {
    s1 = s1 + arr[_i2];
    s2 = s2 * 2;

    if (s1 > s2) {
      sum = s1;
    } else {
      sum = s2;
    }

    console.log(sum);
  }

  console.log(sum);
  return sum;
}

var arr1 = [1, 3, 5, 2, 2];
var arr2 = [1, 1, 1, 0, 0];
solu(arr1, arr2);