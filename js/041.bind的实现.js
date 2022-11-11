/*
 * @Author: Ruilin Wang
 * @Date: 2022-10-02 20:38:08
 * @Last Modified by: wangruilin
 * @Last Modified time: 2022-10-02 20:38:08
 * @Description: 
*/

Function.prototype.mybind = function(context) {
    if(typeof this !== 'function') {
        throw new Error('type error')
    }
    const  args = [...arguments].slice(1)
    const fn = this
    return function Fn() {
        return fn.apply(this instanceof Fn ? this : context, args.concat(...arguments))
    }
}

let fn = function(a, b) {
    console.log(a + b + this.aa);
}
let obj = { aa: 1}
var aa = 3
let fn1 = fn.mybind(obj)
console.log( fn1)
fn1(1,2)