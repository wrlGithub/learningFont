// 数组解构
let [a,b,c] = [1,2,3]
/* 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值 */
let [foo, [[bar],baz]] = [1, [[2],3]]

let [ , , third] = ["foo", "bar", "baz"]

let [x, , y] = [1, 2, 3]

let [head, ...tail] = [1, 2, 3, 4]
console.log(head);
console.log(tail);

let [x, y, ...z] = ['a'];
console.log(x);
console.log(y);
console.log(z);

// 如果解构不成功，变量的值就等于undefined。
let [foo] = [];
let [bar, foo] = [1]
console.log(foo);

// 另一种情况是不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。
let [x, y] = [1, 2, 3];
console.log(x,y);

let [a,[b],d] = [1,[2,3],4]
console.log(b);
/* 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。 */
// 报错
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};

// 事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。
{
function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
  
  let [first, second, third, fourth, fifth, sixth] = fibs();
  sixth // 5
//   上面代码中，fibs是一个 Generator 函数（参见《Generator 函数》一章），原生具有 Iterator 接口。解构赋值会依次从这个接口获取值。
}


// 默认值
let [foo = true] = []
console.log(foo);
let [x,y = 'b'] = ['a'];
console.log(x);
console.log(y);

let [x,y = 'b'] = ['a',undefined];
console.log(x);
console.log(y);

// 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];     // ReferenceError: y is not defined
