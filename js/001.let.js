// let 将变量绑定在所在的任意的作用域中
var foo = true
if(foo) {
    {
        let bar = foo*2
        bar = something(bar)
        console.log(bar);
    }//显式的块级作用域

    console.log(bar);
}