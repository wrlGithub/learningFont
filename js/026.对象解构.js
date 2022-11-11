
let { foo, bar } = { foo: 'aaa', bar:'bbb'}
console.log(foo);
console.log(bar);

let { baz } = { foo: 'aaa', bar:'bbb'}
console.log(baz);// 如果解构失败，变量的值等于undefined。

// 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。
{
    let { log, sin, cos } = Math;
    console.log(log(10));
}

const { log } = console;
log('hello')

// 如果变量名与属性名不一致，必须写成下面这样。
{
    let { foo: baz } = { foo: 'aaa', bar: 'bbb'} 
    console.log(baz);
}

{
    let obj = { first: 'hello', last: 'world'};
    let { first: f, last: l} = obj
    console.log(f);
    console.log(l);
}
// 也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
{
    let { foo: baz} = { foo: 'aaa', bar: 'bbb'}
    console.log(baz); // aaa
    console.log(foo); // ReferenceError: foo is not defined
}

// 与数组一样，解构也可以用于嵌套结构的对象。
{
    let obj = {
        p: [
            'hello',
            { y: 'World'}
        ]
    };
    // 这时p是模式，不是变量，因此不会被赋值。
    let { p:[x,{y}]} = obj
    console.log(x,y); // hello World
}
// 如果p也要作为变量赋值，可以写成下面这样。
{
    let obj = {
        p: [
            'hello',
            { y: 'World'}
        ]
    };
    let { p, p: [x, { y }]} = obj;
    console.log(x, y, p);
}

{
    const node = {
        loc: {
            start: {
                line: 1,
                column: 5
            }
        }
    }
    let {loc, loc: { start }, loc: { start: { line }}} = node
    console.log(line, loc, start);
    // 1 { start: { line: 1, column: 5 } } { line: 1, column: 5 }
}
// 下面是嵌套赋值的例子。
{
    var obj = {};
    var arr = [];
    ({ foo: obj.prop, bar: arr[0]} = { foo: 123, bar: true}
        );
    console.log(obj);
    console.log(arr);
    
    obj // {prop:123}
    arr // [true]
}

// 如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错。
// 报错
let {foo: {bar}} = {baz: 'baz'};
// 上面代码中，等号左边对象的foo属性，对应一个子对象。该子对象的bar属性，解构时会报错。原因很简单，因为foo这时等于undefined，再取子属性就会报错。

// 对象的解构赋值可以取到继承的属性。
const obj1 = {};
const obj2 = { foo: 'bar' };
Object.setPrototypeOf(obj1, obj2);

const { foo } = obj1;
foo // "bar"
// 上面代码中，对象obj1的原型对象是obj2。foo属性不是obj1自身的属性，而是继承自obj2的属性，解构赋值可以取到这个属性。

// 默认值
var {x = 3} = {};
x // 3

var {x, y = 5} = {x: 1};
x // 1
y // 5

var {x: y = 3} = {};
y // 3

var {x: y = 3} = {x: 5};
y // 5

var { message: msg = 'Something went wrong' } = {};
msg // "Something went wrong"
// 默认值生效的条件是，对象的属性值严格等于undefined。
var {x = 3} = {x: undefined};
x // 3

var {x = 3} = {x: null};
x // null
/* 上面代码中，属性x等于null，因为null与undefined不严格相等，所以是个有效的赋值，导致默认值3不会生效。 */
// 注意点：
/* 1.如果要将一个已经声明的变量用于解构赋值，必须非常小心  */
{
    // 错误的写法
    let x;
    {x} = {x: 1};
    // SyntaxError: syntax error
}
// 上面代码的写法会报错，因为 JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。
{
    // 正确的写法
    let x;
    ({x} = {x: 1});
}
/* 2.解构赋值允许等号左边的模式之中，不放置任何变量名。因此，可以写出非常古怪的赋值表达式。 */
({} = [true, false]);
({} = 'abc');
({} = []);

/* 3.由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。  */
let arr = [1, 2, 3];
let {0 : first, [arr.length - 1] : last} = arr;
first // 1
last // 3