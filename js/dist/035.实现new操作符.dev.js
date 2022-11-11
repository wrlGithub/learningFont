"use strict";

// （1）首先创建了一个新的空对象
// （2）设置原型，将对象的原型设置为函数的 prototype 对象。
// （3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
// （4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。
// 实现:
function create(Fun) {
  var obj = Object.create(Fun.prototype);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var result = Fun.apply(obj, args);
  return result instanceof Object ? result : obj;
}

function app(name) {
  this.name = name;

  this.saysomething = function (a) {
    console.log(a);
  };
}

var test = create(app, 'li');
console.log(test.name);
console.log(test.saysomething((void 0).name));