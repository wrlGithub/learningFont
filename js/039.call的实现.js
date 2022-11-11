// call的用法：使用一个指定的this值和一个或者多个参数来调用一个函数
/*
 * @Author: Ruilin Wang
 * @Date: 2022-10-02 17:19:36
 * @Last Modified by: wangruilin
 * @Last Modified time: 2022-10-02 17:19:36
 * @Description: 参数：1. 函数的this指向 2. 一个多个传入的函数参数
*/
// var a = 1
// let obj = {
//     a: 0
// }
function s(b) {
    // console.log(this);
    console.log(this.a);
    console.log( 'b',b );
}
var a = 2
let obj = { a : 3}
Function.prototype.mycall = function(context) {
    if(typeof this !== 'function') {
        throw new Error('type error')
    }
    let args = [...arguments].slice(1);
    context.fn = this
    let res = context.fn(...args)
    delete context.fn
    return res
}
// s.mycall()
// s()
s.mycall(obj,'bbbbbbbb')