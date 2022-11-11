"use strict";

// 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
{
  var _ = 123,
      s = _.toString;
  console.log(s);
  console.log(s === Number.prototype.toString);
}
{
  var _true = true,
      _s = _true.toString;
  console.log(_s);
  console.log(_s === Boolean.prototype.toString);
} // 上面代码中，数值和布尔值的包装对象都有toString属性，因此变量s都能取到值。
// 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

var x = undefined.prop; // TypeError

var _ref = null,
    y = _ref.prop; // TypeError