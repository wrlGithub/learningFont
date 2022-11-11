/* 1. 工厂模式 */
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayname = function() {
        console.log(`my name is ${this.name}.`);
    }
    return o;
}
var person1 = createPerson("james",9,"student");
person1.sayname()
var person2 = createPerson("kobe",9,"student");

/* 2.构造函数模式 */
function createPerson(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayname = function() {
        console.log(`my name is ${this.name}.`);
    }
    return o;
}

/* 3. 原型模式 */
function Person() {

}
Person.prototype.name = 'James';
Person.prototype.age = 19;
Person.prototype.job = 'students';
Person.prototype.sayname = function() {
    console.log(this.name);
}
const p1 = new Person();
const p2 = new Person();
console.log(p1.name === p2.name);
console.log(p1.sayname === p2.sayname);

/* 4.组合使用构造函数和原型模式 */
/**
 * 创建自定义类型的最常见方式，就是组合使用构造函数模式和原型模式。构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性。使用这种模式的好处就是，每个实例都会拥有自己的一份实例属性的副本，但同时又共享着对方法的引用，最大限度地节省了内存。而且这中混成模式还支持向构造函数传递参数，可以说是及两种模式之长。
 */

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}
Person.prototype = {
    constructor:Person,
    sayname: function() {
        console.log(this.name);
    }
}
var p3 = new Person('james',13,'police');
var p4 = new Person('jom',12,'police');
console.log(p3.name); // "james"
console.log(p4.name); // "kobe"
console.log(p3.sayName === p4.sayName); // true


/* 5. 动态原型模式 */
function Person(name, age,job){
    this.name = name;
    this.age = age;this.job = job;
    if(typeof this.sayName !== "function" ) {
      Person.prototype.sayName= function(){
            console.log(this.name) ;
    }
    }
    }
var person1 = new Person("james",9,"student" );
    person1.sayName( );
    