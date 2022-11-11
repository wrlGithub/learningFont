class Promise {
    callback = []
    constructor(fn) {
        fn(this._resolve.bind(this));
    }
    then(onFulfilled) {
        this.callback.push(onFulfilled)
    }
    _resolve(value) {
        this.callback.forEach(fn => fn(value))
    }
}
/**
 * 调用 then 方法，将想要在 Promise 异步操作成功时执行的 onFulfilled 放入callbacks队列，其实也就是注册回调函数，可以向观察者模式方向思考；
 * 创建 Promise 实例时传入的函数会被赋予一个函数类型的参数，即 resolve，它接收一个参数 value，代表异步操作返回的结果，当异步操作执行成功后，会调用resolve方法，这时候其实真正执行的操作是将 callbacks 队列中的回调一一执行；
 *  */ 

let p = new Promise(resolve => {
    setTimeout(() => {
        console.log('done');
        resolve('5秒')
    },5000)
}).then((tip) => {
    console.log(tip);
})

console.log(typeof null);
console.log(null instanceof Object );