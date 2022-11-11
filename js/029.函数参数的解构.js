// 函数的参数也可以使用解构赋值
function add([x, y]) {
    return x + y;
}
console.log(add([1, 4]));
// 上面代码中，函数add的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量x和y。对于函数内部的代码来说，它们能感受到的参数就是x和y

[[1, 2], [3, 4]].map(([a, b]) => {console.log(a + b);});

// 函数参数的解构可以使用默认值

{
    function move({x = 0, y = 0} = {}) {
        return [x, y];
    }
    
    move({x: 3, y: 8}); // [3, 8]
    move({x: 3}); // [3, 0]
    move({}); // [0, 0]
    move(); // [0, 0]
}

{
    function move({x, y} = { x: 0, y: 0 }) {
        return [x, y];
      }
      
      move({x: 3, y: 8}); // [3, 8]
      move({x: 3}); // [3, undefined]
      move({}); // [undefined, undefined]
      move(); // [0, 0]
}
// 上面代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。


// undefined就会触发函数参数的默认值。
[1, undefined, 3].map((x = 'yes') => x);
// [ 1, 'yes', 3 ]