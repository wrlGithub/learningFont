"use strict";

var _foo$bar = {
  foo: 'aaa',
  bar: 'bbb'
},
    foo = _foo$bar.foo,
    bar = _foo$bar.bar;
console.log(foo);
console.log(bar);
var _foo$bar2 = {
  foo: 'aaa',
  bar: 'bbb'
},
    baz = _foo$bar2.baz;
console.log(baz); // 如果解构失败，变量的值等于undefined。
// 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。

{
  var _log = Math.log,
      sin = Math.sin,
      cos = Math.cos;
  console.log(_log(10));
}
var _console = console,
    log = _console.log;
log('hello'); // 如果变量名与属性名不一致，必须写成下面这样。

{
  var _foo$bar3 = {
    foo: 'aaa',
    bar: 'bbb'
  },
      _baz = _foo$bar3.foo;
  console.log(_baz);
}
{
  var obj = {
    first: 'hello',
    last: 'world'
  };
  var f = obj.first,
      l = obj.last;
  console.log(f);
  console.log(l);
} // 也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

{
  var _foo$bar4 = {
    foo: 'aaa',
    bar: 'bbb'
  },
      _baz2 = _foo$bar4.foo;
  console.log(_baz2); // aaa

  console.log(foo); // ReferenceError: foo is not defined
}