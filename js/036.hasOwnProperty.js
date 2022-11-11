var obj = {
    a:1,
    fn: function() {

    },
    c:{
        d:3
    }
}


console.log(obj.hasOwnProperty('a'));  // true
console.log(obj.hasOwnProperty('fn'));  // true
console.log(obj.hasOwnProperty('c'));  // true
console.log(obj.c.hasOwnProperty('d'));  // true
console.log(obj.hasOwnProperty('d'));  // false, obj对象没有d属性

var str =new String()
// split方法是String这个对象的方法，str对象本身是没有这个split这个属性的
console.log(str.hasOwnProperty('split')) // false
console.log(String.prototype.hasOwnProperty('split')); // true