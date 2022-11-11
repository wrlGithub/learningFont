function foo(num) {
    console.log("foo:" + num);
    this.count++
}
foo.count = 0 
for (let i = 0; i < 10; i++) {
    if(i > 5) foo(i)
    
}
console.log(foo.count);// 0
console.log(count);// NaN
/* --------------------------------------------- */
function foo() {
    var a = 2;
    this.bar();
}
function bar() {
    console.log(this.a);
}

foo();
// 输出：ReferenceError：a is not defined

/* --------------------------------------------- */
// 默认绑定
function foo() {
    // console.log(this);
    console.log(global === this);
    console.log(this.a);
    console.log(global.a);
}
var a = 2;
foo()
/* --------------------------------------------- */
// 隐式绑定
// 01
function foo() {
    console.log( this.a );
}
var obj = {
    a:2,
    foo:foo
}
obj.foo() //2

// 02 对象属性引用链上只有上一层或者说最后一层在调用位置中起作用。
function foo() {
    console.log(this.a);
}
var obj2 = {
    a:42,
    foo:foo
}

var obj1 = {
    a :2,
    obj2:obj2
}

obj1.obj2.foo()
// 03. 隐式丢失 —— 一个常见的this绑定问题就是被隐式绑定的函数丢失绑定对象，也就是说他会应用默认绑定，从而把this绑定到全局对象或者undefined上。
function foo() {
    console.log(this.a);
}
var obj = {
    a: 2,
    foo: foo
}
var bar = obj.foo;
var a = "opp,global"
bar();
  

/* --------------------------------------------- */
// 显示绑定
function foo() {
    console.log( this.a );
}
var obj = {
    a:2
}
foo.call( obj )
// 1.硬绑定
function foo() {
    console.log(this.a);
}
var obj = {
    a:2
}
var bar = function() {
    foo.call(obj)
}
bar() // 2
setTimeout(bar ,100) //2

bar.call(window) // 2

/* --------------------------------------------- */
// new 绑定
// 使用new来调用foo(...)时，会构造一个新的对象并把它绑定到foo(...)调用中的this上。
function foo(a) {
    this.a = a
}
var bar = new foo(2);
console.log( bar.a );