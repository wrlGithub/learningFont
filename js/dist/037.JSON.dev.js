"use strict";

/* 
JSON 是一种基于文本的轻量级的数据交换格式。它可以被任何的编程语言读取和作为数据格式来传递。

在项目开发中，我们使用 JSON 作为前后端数据交换的方式。在前端我们通过将一个符合 JSON 格式的数据结构序列化为 JSON 字符串，然后将它传递到后端，后端通过 JSON 格式的字符串解析后生成对应的数据结构，以此来实现前后端数据的一个传递。

因为 JSON 的语法是基于 js 的，因此很容易将 JSON 和 js 中的对象弄混，但是我们应该注意的是 JSON 和 js 中的对象不是一回事，JSON 中对象格式更加严格，比如说在 JSON 中属性值不能为函数，不能出现 NaN 这样的属性值等，因此大多数的 js 对象是不符合 JSON 对象的格式的。

在 js 中提供了两个函数来实现 js 数据结构和 JSON 格式的转换处理，一个是 JSON.stringify 函数，通过传入一个符合 JSON 格式的数据结构，将其转换为一个 JSON 字符串。如果传入的数据结构不符合 JSON 格式，那么在序列化的时候会对这些值进行对应的特殊处理，使其符合规范。在前端向后端发送数据时，我们可以调用这个函数将数据对象转化为 JSON 格式的字符串。

另一个函数 JSON.parse() 函数，这个函数用来将 JSON 格式的字符串转换为一个 js 数据结构，如果传入的字符串不是标准的 JSON 格式的字符串的话，将会抛出错误。当我们从后端接收到 JSON 格式的字符串时，我们可以通过这个方法来将其解析为一个 js 数据结构，以此来进行数据的访问。
*/

/* 
    JSON.parse(string) ：接受一个 JSON 字符串并将其转换成一个 JavaScript 对象。
    JSON.stringify(obj) ：接受一个 JavaScript 对象并将其转换为一个 JSON 字符串。
*/
var test1 = JSON.stringify({
  name: "Samara",
  country: "Jimbabwe",
  fun: function fun(a) {
    console.log(a);
  }
});
console.log(test1); // 输出结果:  "{"name":"Samara","country":"Jimbabwe"}"

var test2 = JSON.stringify("Oh look, a string!");
console.log(test2); // 输出结果： ""Oh look, a string!""

var test3 = JSON.stringify([1, 2, "open", "the", "door", undefined]);
console.log(test3); // 输出结果： "[1,2,"open","the","door"]"

console.log(JSON.parse('{}')); // {}

console.log(JSON.parse('true')); // true

console.log(JSON.parse('"foo"')); // "foo"

console.log(JSON.parse('[1, 5, "false"]')); // [1, 5, "false"]

console.log(JSON.parse('null')); // null

var o = JSON.parse('{"name":"张三"}');
console.log(o.name); // 张三