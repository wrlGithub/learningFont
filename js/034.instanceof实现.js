class People {}
class Student extends People {}

const vortesnail = new Student();

console.log(vortesnail instanceof People); // true
console.log(vortesnail instanceof Student); // true


// instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。
function myinstanceof (left , right) {
    let proto = Object.getPrototypeOf(left);// 获取对象的原型
    let prototype = right.prototype; // 获取构造函数的prototype对象
    while(true) {
        if(!proto) return false;
        if(proto === prototype) return true;
        proto = Object.getPrototypeOf(proto)
    }
}

console.log(myinstanceof(vortesnail,People));