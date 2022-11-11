/*
 * @Author: Ruilin Wang
 * @Date: 2022-10-02 20:18:03
 * @Last Modified by: wangruilin
 * @Last Modified time: 2022-10-02 20:18:03
 * @Description: 
*/
Function.prototype.myapply = function(context,arrArgs) {
    if(typeof this !== 'function' ) {
        throw new Error('type error')
    }
    context = context || global
    context.fn = this
    let res = context.fn(...arrArgs)
    delete context.fn
    return res
}

let fn = function(a,b) {
    console.log('this a:' ,this.aa);
    console.log('a + b = ', a+b)
    return a + b + this.aa
}
var aa = 1
let obj = {
    aa: 1
}
// fn.myapply(obj, [1,2])
console.log(fn.myapply(obj,[1,2]));