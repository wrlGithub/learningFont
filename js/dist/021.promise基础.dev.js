"use strict";

// 简单例子
function timeout(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100).then(function (value) {
  console.log(value);
}); // 上面代码中，timeout方法返回一个Promise实例，表示一段时间以后才会发生的结果。过了指定的时间（ms参数）以后，Promise实例的状态变为resolved，就会触发then方法绑定的回调函数。

/* ************************************************** */
// Promise新建之后立即执行

var promise = new Promise(function (resolve, reject) {
  console.log('Promise');
  resolve();
});
promise.then(function () {
  console.log('resolved');
});
console.log('Hi'); // Promise
// Hi
// resolved

/* 上面代码中，Promise 新建后立即执行，所以首先输出的是Promise。然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。 */

/* ************************************************** */
// 异步加载图片

function loadImageAsync(url) {
  return new Promise(function (resolve, reject) {
    var image = new Image(); // onload 事件在图片加载完成后立即执行。

    image.onload = function () {
      resolve(image);
    }; // onerror 事件会在文档或图像加载过程中发生错误时被触发。


    image.onerror = function () {
      reject(new Error('Could not load image at ' + url));
    }; // src 属性可设置或者返回图片的 src 属性值。


    image.src = url;
  });
}
/* ************************************************** */

/* ************************************************** */


var p1 = new Promise(function (resolve, reject) {
  resolve('hello');
}).then(function (result) {
  console.log('p1:callback  ' + result);
  return result;
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

/* ******race****** */

var p = Promise.race([fetch('/resource-that-may-take-a-while'), new Promise(function (resolve, reject) {
  setTimeout(function () {
    return reject(new Error('request timeout'));
  }, 5000);
})]);
p.then(console.log)["catch"](console.error);