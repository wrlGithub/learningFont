console.log(0.1 + 0.2 === 0.3); //false

/* 使用 Number.EPSILON 误差范围 */
function isEqual(a,b) {
    return Math.abs(a - b ) < Number.EPSILON
    //Number.EPSILON 的实质是一个可以接受的最小误差范围，一般来说为 Math.pow(2, -52) 。
}

console.log(isEqual(0.1 + 0.2,0.3)); //true