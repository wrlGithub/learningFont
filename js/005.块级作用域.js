function f() { console.log('I am outside!'); }

(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();
}());

{
    let a =0;
    console.log(a);
}
let a = 10;
console.log(a);