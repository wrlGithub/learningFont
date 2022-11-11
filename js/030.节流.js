/**
 * 节流函数 一个函数执行一次后，只有大于设定的执行周期才会执行第二次。有个需要频繁触发的函数，出于优化性能的角度，在规定时间内，只让函数触发的第一次生效，后面的不生效。
 * @param fn要被节流的函数
 * @param delay规定的时间
 */

function throttle(fn, delay) {
    // 记录上次执行的时间
    var lastTime = 0;
    return function(...args) {
        // 记录当前函数触发的
        var nowTime = Date.now();
        if(nowTime - lastTime > delay){
            // 修正this指向问题
            fn.call(this);
            // 同步执行同步时间
            lastTime = nowTime;
        }
    }
}

function throttle2(fn, delay) {
    let timeout;
    return function() {
        if(timeout) {
            return
        }
        timeout = setTimeout( function() {
            fn.apply(this,args)
            timeout = null
        },delay) 
    }
}

document.onscroll = throttle(function () {
    console.log('scllor事件被触发了' + Date.now());
}, 200); 