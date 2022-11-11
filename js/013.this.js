/* 2.2.1 默认绑定 */
function foo() {
    console.log(this.a);
}

var a = 2
foo() //node环境=》undefined；v8 => 2

function foo() {
    "use strict";
    console.log(this.a);
}
var a = 2;
foo()

/* 隐式绑定 */
// # 当函数引用有上下文对象时，隐式绑定规则会把函数调用中的this绑定到这个上下文对象中

//隐式
function foo() {
    console.log(this.a);
}

var obj = {
    a:2,
    foo:foo
}
obj.foo() //2

// # 对象属性引用中只有上一层或者说最后一层在调用位置中作用
function foo() {
    console.log(this.a);
}

var obj2 = {
    a:42,
    foo:foo
}

var obj = {
    a:2,
    obj2:obj2
}

obj.obj2.foo();


//隐式丢失 —— 被隐式绑定的函数会丢失对象，也就是说他会应用默认绑定，从而把this绑定到全局对象或者undefined上
function foo() {
    console.log(this.a);
}
var obj = {
    a:2,
    foo:foo
}
var bar = obj.foo //函数别名
var a = "opp,global" //a是全局对象的属性
bar() //opp,global
// # 虽然bar是obj.foo的一个引用，但实际上，他引用的是foo函数本身，因此此时的bar()其实是一个不带任何修饰函数的调用，因此应用了默认绑定

/* 显示绑定 */
function foo() {
    console.log(this.a);
}

var obj = {
    a:2
}

foo.call(obj)

//硬绑定
function foo() {
    console.log(this.a);
}
var obj = {
    a:2
}
var bar = function() {
    foo.call(obj)
}

bar()
setTimeout(bar,100)
bar.call(window)//硬绑定的bar不可能再修改它的this 2

//创建一个包裹函数，负责接受参数并返回值
function foo(something) {
    console.log(this.a,something);
    return this.a + something
}

var obj = {
    a:2
}

var bar = function() {
    return foo.apply(obj,arguments)
}

var b = bar(3)
console.log(b);

//创建一个课重复使用的辅助函数
function foo(something) {
    console.log(this.a,something);
    return this.a + something
}

var obj = {
    a:2
}

var bar = foo.bind(obj);
var b = bar(3)
console.log(b);

/* new 绑定 */
// 使用new来调用foo(..)时，我们会构造一个新的对象并把它绑定到foo(..)调用中的this上。new是最后一种可以影响函数调用时this绑定行为
function foo(a) {
    this.a = a
}
var bar = new foo(2)
console.log(bar.a);