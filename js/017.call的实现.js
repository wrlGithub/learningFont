Function.prototype.myCall = function(context) {
    // 判断调用对象
    if (typeof this !== "function") {
        throw new Error("Type error");
    }
    // 首先获取参数
    let args = [...arguments].slice(1)
    console.log('参数',[...arguments]);
    let result = null;
    // 判断 context 是否传入，如果没有传就设置为 window
    context = context || window;
    console.log('context',context);
    // 将被调用的方法设置为 context 的属性
    // this 即为我们要调用的方法
    context.fn = this;
    // 执行要被调用的方法
    result = context.fn(...args);
    // 删除手动增加的属性方法
    delete context.fn;
    // 将执行结果返回
    return result;
}

obj = {
    firstname:"王",
    lastname:'瑞霖'
}
obj2 = {
    firstname:"马",
    lastname:'牛逼'
}

function myname(something) {
    console.log(this.firstname,this.lastname,'  ',something);
}
myname.myCall(obj2,'hello')