var a;
console.log(typeof aa);

/* 引用类型 */
let obj1 = {name:'yao',password:'123'}
let obj2 = obj1 //obj2 引用了 obj1 实际上obj2只是使用了 obj1 的地址，对象的数据内存保存在某一个地方， obj1， obj2指向

obj2.password = '666'

console.log(obj2);// 输出： { name: 'yao', password: '666' }


// # 如果想克隆？

var a = [1,2,3,4]

var b = a
b.push(12325)

console.log(a);

//克隆
var c = [].concat(a)
console.log(c);

var obj = {
    a:'1',
    b:'2',
    c: {
        deep:'try and copy me'
    }
}
let clone = Object.assign({},obj)//浅克隆 
let clone2 = {...obj}//浅克隆
let superClone = JSON.parse(JSON.stringify(obj))//深克隆

obj.c.deep = 'hahaha'
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);

// # 浅克隆 对象内置对象只是引用  # 深克隆 对象内置对象的值也传递
