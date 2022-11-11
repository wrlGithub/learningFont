"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// 函数的参数也可以使用解构赋值
function add(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      x = _ref2[0],
      y = _ref2[1];

  return x + y;
}

console.log(add([1, 4])); // 上面代码中，函数add的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量x和y。对于函数内部的代码来说，它们能感受到的参数就是x和y

[[1, 2], [3, 4]].map(function (_ref3) {
  var _ref4 = _slicedToArray(_ref3, 2),
      a = _ref4[0],
      b = _ref4[1];

  console.log(a + b);
}); // 函数参数的解构可以使用默认值

{
  var move = function move() {
    var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref5$x = _ref5.x,
        x = _ref5$x === void 0 ? 0 : _ref5$x,
        _ref5$y = _ref5.y,
        y = _ref5$y === void 0 ? 0 : _ref5$y;

    return [x, y];
  };

  move({
    x: 3,
    y: 8
  }); // [3, 8]

  move({
    x: 3
  }); // [3, 0]

  move({}); // [0, 0]

  move(); // [0, 0]
}
{
  var _move = function _move() {
    var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      x: 0,
      y: 0
    },
        x = _ref6.x,
        y = _ref6.y;

    return [x, y];
  };

  _move({
    x: 3,
    y: 8
  }); // [3, 8]


  _move({
    x: 3
  }); // [3, undefined]


  _move({}); // [undefined, undefined]


  _move(); // [0, 0]

} // 上面代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。
// undefined就会触发函数参数的默认值。

[1, undefined, 3].map(function () {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'yes';
  return x;
}); // [ 1, 'yes', 3 ]