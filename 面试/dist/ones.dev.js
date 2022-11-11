"use strict";

// let num = '12300'
// function solu(num) {
//     return num.split('').reverse().join('')
// }
// console.log(solu(num));
function solu(arr) {
  var b = 0;
  var sumA = 0,
      sumB = 0;
  var tab = 9999999;

  for (var i = 0; i < arr.length; i++) {
    // 求和
    for (var j = 0; j <= b; j++) {
      sumA += arr[j];
    } // 得到sumA


    for (var k = arr.length - 1; k > b; k--) {
      // 求和
      for (var g = k; g < arr.length; g++) {
        sumB += arr[g];
      }

      if (Math.abs(sumA - sumB) < tab) {
        tab = Math.abs(sumA - sumB);
      }

      sumB = 0;
    }

    sumA = 0;
    b++;
  }

  return tab;
}

var arr = [1, 2, 3, 4, 5];
console.log(solu(arr));

function aa(a, b, c) {
  console.log(arguments);
  console.log(Array.prototype.slice.call(arguments).slice(1, 3));
}

aa(1, 2, 3);