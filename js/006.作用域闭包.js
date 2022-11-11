function foo() {
    var a = 2

    function bar() {
        console.log(a);
    }

    return bar
}

var baz = foo()
baz() //2

//闭包使得函数可以继续访问定义时的词法作用域


function foo() {
    var a = 2
     
    function baz() {
        console.log(a);
    }
    bar(baz)
}
function bar(fn) {
    fn();
}

foo();


/* 间接传递 */
var fn;
function foo() {
    var a = 2;
    function baz() {
        console.log(a);
    }

    fn = baz;//将baz分配给全局变量
}
function bar() {
    fn();//闭包
}
foo()
bar()//2


//本质上无论何时何地，如果将函数（访问它们各自的词法作用域）当作第一 级的值类型并到处传递，你就会看到闭包在这些函数中的应用。在定时器、事件监听器、 Ajax 请求、跨窗口通信、Web Workers 或者任何其他的异步（或者同步）任务中，只要使 用了回调函数，实际上就是在使用闭包！

function wait(message) {
    setTimeout( function timer() {
        console.log(message);
    },1000 )
}

wait('hello,closure!')


/* 循环与闭包的问题 */
for( var i = 1;i <=5;i++) {
    setTimeout( function timer() {
        console.log(i);
    },i*1000);
}//输出5个6
//原来由于js是单线程的，所以在执行for循环的时候定时器setTimeout被安排到任务队列中排队等待执行，而在等待过程中for循环就已经在执行，等到setTimeout可以执行的时候，for循环已经结束，i的值也已经编程5，所以打印出来五个5

// 立即执行函数
for (var i=1; i<=5; i++) {
    (function() {
        setTimeout( function timer() {
            console.log(i);
        },i*1000)
    })();
}//输出5个6

//怎么才能输出1-5
for(var i=1; i<=5; i++) {
    (function() {
        var j = i;
        setTimeout( function timer() {
            console.log(j);
        },j*1000)
    })()
}

//let的出来带来的块作用域为闭包正名
//下面两个例子
for (var i=1; i<=5; i++) {
    let j = i;//闭包的块级作用域
    setTimeout( function timer() {
        console.log(j);
    }, j*1000);
}

for(let i=1; i<5; i++) {
    setTimeout( function timer() {
        console.log(i);
    },i*1000)
}
