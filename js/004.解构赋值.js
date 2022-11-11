const { log } = console
log("王瑞霖牛逼！")

let {foo} = {bar: 'baz'};
foo // undefined
// 上面代码中，等号右边的对象没有foo属性，所以变量foo取不到值，所以等于undefined

let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
log(baz)//aaa

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
log(f) // 'hello'
log(l) // 'world'