"use strict";

function soltion(N, k, arr) {
  function sum1(N, k, arr) {
    var res = 0;

    for (var i = 0; i <= N - k - 1; i++) {
      res += arr[i] * arr[i + k];
    }

    return res;
  }

  function sum2(N, k, arr) {
    var res = 0;

    for (var i = N - k; i <= N - 1; i++) {
      res += arr[i] * arr[i + k - N];
    }

    return res;
  }

  var res = [];

  for (var _j = 0; _j < N; _j++) {
    res.push(sum1(N, _j, arr) + sum2(N, _j, arr));
  }

  return res;
}

var N = 10;
var arr = [6, 6, 6, 6, 6, 6, 6, 6, 6, 6];
var j = 1; // console.log(sum1(N,j,arr)+sum2(N,j,arr));

console.log(soltion(N, 1, arr));